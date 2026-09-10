#!/usr/bin/env node
// Wachter tegen propositie-drift tussen de site en wat er op de profielen staat.
//
// Waarom dit bestaat: de kit is op 10 september twee keer achterhaald geraakt door
// merges op main (#564 haalde de wachtlijst weg, #565 de bureau-wereld). Elke keer
// bleven profielteksten en links staan die de site niet meer had. Handmatig nalopen
// schaalt niet en werd twee keer te laat gedaan.
//
// Wat het meet, in oplopende hardheid:
//   1. Elke signumcore.io-URL in de kit moet 200 geven. Een 308 betekent dat de
//      pagina verplaatst is en de kit een oude deur noemt.
//   2. Geen enkele verboden term uit §2 mag in de kit-documenten staan.
//   3. De kernzinnen in profiel-teksten.md §2 moeten letterlijk voorkomen in
//      lib/belofte.ts op origin/main. Wijkt er één af, dan is de code verschoven.
//
// Draaien: node build/check-sync.mjs [pad-naar-signum-website]
// Exitcode 1 zodra er iets afwijkt, zodat dit in CI kan.

import { readFileSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const KIT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const WEBSITE = process.argv[2] || path.join(process.env.HOME, 'signum-website')
const DOCS = ['profiel-teksten.md', 'content-kalender.md', 'vindplaatsen.md', 'README.md']

const bevindingen = []
const meld = (regel, waarom) => bevindingen.push({ regel, waarom })

// ── 1. Elke site-URL in de kit moet nog 200 geven ────────────────────────────
// Een 308 is het signaal dat een pagina verhuisd is; de link blijft werken, maar
// de kit noemt dan een deur die niet meer de deur is. Dat is precies hoe
// /wachtlijst twee dagen lang in vijf profielen bleef staan.
async function urlsControleren() {
  const gevonden = new Set()
  for (const doc of DOCS) {
    const pad = path.join(KIT, doc)
    if (!existsSync(pad)) continue
    for (const m of readFileSync(pad, 'utf8').matchAll(/https:\/\/signumcore\.io[a-z0-9/._-]*/gi)) {
      const url = m[0].replace(/[.,)]+$/, '')
      // Beeldbestanden zijn geen pagina's; die horen niet in deze controle.
      if (/\.(png|jpe?g|svg|webp|ico|txt|xml|json)$/i.test(url)) continue
      gevonden.add(url)
    }
  }
  for (const url of [...gevonden].sort()) {
    let status = 0
    let locatie = ''
    try {
      const res = await fetch(url, { redirect: 'manual', headers: { 'user-agent': 'signumcore-sync-check' } })
      status = res.status
      locatie = res.headers.get('location') || ''
    } catch (e) {
      meld(`${url} onbereikbaar`, String(e.message))
      continue
    }
    if (status === 200) continue
    if (status >= 300 && status < 400) {
      meld(`${url} geeft ${status} naar ${locatie}`, 'de pagina is verplaatst; werk de kit bij naar de nieuwe URL')
    } else {
      meld(`${url} geeft ${status}`, 'de pagina bestaat niet meer')
    }
  }
}

// ── 2. Verboden termen ───────────────────────────────────────────────────────
// De lijst staat in profiel-teksten.md §2 en is daar in proza uitgelegd. Hier
// staan alleen de letterlijke strings die nooit in een profieltekst horen. Ze
// worden hoofdletterongevoelig gezocht.
//
// Uitzondering: §2 zelf en de logboek-secties beschríjven de verboden termen. Die
// regels worden overgeslagen, anders meldt de wachter zijn eigen uitleg.
const VERBODEN = [
  ['/wachtlijst', 'de wachtlijst is vervangen door /webinar (#564)'],
  ['voor-bureaus', 'de bureau-wereld is van de site (#565)'],
  ['tracking operations', 'bureau-aanbod bestaat niet meer (#565)'],
  ['klantportfolio', 'bureau-aanbod bestaat niet meer (#565)'],
  ['white-label', 'bureau-aanbod bestaat niet meer (#565)'],
  ['op Start of Groei', 'het aanbod is alleen op Groei'],
  ['wij bouwen je website', 'het systeem werkt op de site die de klant al heeft'],
  ['elke aanvraag', 'absolute meetclaim; zeg "je aanvragen"'],
]

/**
 * Secties die de verboden termen bescHRIJVEN in plaats van gebruiken: §0 (wat er
 * veranderde), §2 (de verboden-lijst zelf) en elke logboek- of standsectie. Zonder
 * deze uitzondering meldt de wachter zijn eigen uitleg als overtreding.
 */
function isUitlegkop(kop) {
  return /^##\s*[02]\.\s/.test(kop) || /log|stand|handle|bestandskiezer|wat er .* veranderde|vier plekken/i.test(kop)
}

function termenControleren() {
  for (const doc of DOCS) {
    const pad = path.join(KIT, doc)
    if (!existsSync(pad)) continue
    const regels = readFileSync(pad, 'utf8').split('\n')
    let overslaan = false
    regels.forEach((regel, i) => {
      if (/^#{2,3}\s/.test(regel)) overslaan = isUitlegkop(regel)
      if (overslaan) return
      for (const [term, waarom] of VERBODEN) {
        if (regel.toLowerCase().includes(term.toLowerCase())) {
          meld(`${doc}:${i + 1} bevat "${term}"`, waarom)
        }
      }
    })
  }
}

// ── 3. Kernzinnen moeten overeenkomen met lib/belofte.ts ────────────────────
// De kit citeert de code. Verandert een constante op main, dan moet dat hier
// opvallen — niet pas als een profiel al twee dagen de oude zin draagt.
//
// Val die dit bijna stuk maakte: niet elke constante is een platte string.
// `BELOFTE_MICRO_DELEN` is een array, `WACHTLIJST_BELOFTE` een template die twee
// andere constanten samenvoegt. Een letterlijke `includes()` op de brontekst faalt
// daar altijd, en dat is een valse rode — precies de wachter die de verkeerde vorm
// meet. Daarom: alleen constanten met een enkelvoudige string-waarde worden op hun
// inhoud vergeleken; voor samengestelde waarden controleren we of de naam nog
// bestaat, en verder niets.

/**
 * Haalt de string-waarde op van `export const NAAM = '...'`, ook als die op de
 * volgende regel staat of uit meerdere aaneengeplakte delen bestaat. Geeft null
 * terug bij arrays, templates met ${} of andere samengestelde vormen.
 */
function stringWaarde(bron, naam) {
  const m = bron.match(new RegExp(`export const ${naam}\\s*=\\s*([\\s\\S]*?)\\n(?=export |\\n|$)`))
  if (!m) return null
  const rechts = m[1].trim()
  if (rechts.startsWith('[') || rechts.includes('${')) return null
  const delen = [...rechts.matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((d) => d[1])
  if (delen.length === 0) return null
  // Sta losse aanhalingstekens toe die met + aan elkaar staan; alles daarbuiten
  // (functieaanroepen, ternaries) maakt de waarde samengesteld.
  if (/[a-zA-Z_$][\w$]*\s*\(/.test(rechts.replace(/'((?:[^'\\]|\\.)*)'/g, ''))) return null
  return delen.join('').replace(/\\'/g, "'")
}

function kernzinnenControleren() {
  if (!existsSync(path.join(WEBSITE, '.git'))) {
    meld(`geen git-repo op ${WEBSITE}`, 'geef het pad naar signum-website als argument mee')
    return
  }
  let belofte
  try {
    execFileSync('git', ['fetch', '-q', 'origin'], { cwd: WEBSITE })
    belofte = execFileSync('git', ['show', 'origin/main:lib/belofte.ts'], { cwd: WEBSITE, encoding: 'utf8' })
  } catch (e) {
    meld('kon lib/belofte.ts niet lezen van origin/main', String(e.message))
    return
  }
  const doc = readFileSync(path.join(KIT, 'profiel-teksten.md'), 'utf8')
  // §2 noteert elke kernzin als: - **Naam** (`CONSTANTE`): `de zin`
  const regel = /^- \*\*[^*]+\*\* \(`([A-Z_0-9]+)`\): `([^`]+)`/gm
  let gezien = 0
  let vergeleken = 0
  for (const m of doc.matchAll(regel)) {
    const [, constante, zin] = m
    gezien++
    if (!belofte.includes(`export const ${constante}`)) {
      meld(`${constante} bestaat niet meer in lib/belofte.ts`, 'de code is verschoven; herzie §2 van profiel-teksten.md')
      continue
    }
    const echt = stringWaarde(belofte, constante)
    if (echt === null) continue // samengesteld: naam bestaat, inhoud niet te vergelijken
    vergeleken++
    if (echt.replace(/\s+/g, ' ').trim() !== zin.replace(/\s+/g, ' ').trim()) {
      meld(`${constante} wijkt af van lib/belofte.ts`, `code: "${echt}" — kit: "${zin}"`)
    }
  }
  if (gezien === 0) meld('geen kernzinnen gevonden in §2', 'het formaat van profiel-teksten.md §2 is veranderd')
  else if (vergeleken === 0) meld('geen enkele kernzin kon vergeleken worden', 'stringWaarde() herkent de vorm van lib/belofte.ts niet meer')
}

// ── Uitvoeren ────────────────────────────────────────────────────────────────
await urlsControleren()
termenControleren()
kernzinnenControleren()

if (bevindingen.length === 0) {
  console.log('Kit en site lopen gelijk: URLs geven 200, geen verboden termen, kernzinnen matchen origin/main.')
  process.exit(0)
}

console.error(`Kit loopt achter op de site — ${bevindingen.length} afwijking(en):\n`)
for (const { regel, waarom } of bevindingen) console.error(`  ${regel}\n    ${waarom}`)
console.error('\nWerk profiel-teksten.md bij en daarna de gepubliceerde profielen (zie vindplaatsen.md).')
process.exit(1)
