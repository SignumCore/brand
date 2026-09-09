// Rendert alle social-visuals voor SignumCore op exacte pixelmaat.
// Huisstijl = components/ogFrame.tsx + components/Logo.tsx + app/globals.css
// uit signum-website: wit vlak, zwarte Switzer-kop, blauw accentblok,
// lime vierkant-punt als merkteken, mono bijschriften, blauwe balken.
import { chromium } from 'playwright'
import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const HIER = path.dirname(fileURLToPath(import.meta.url))
const KIT = path.resolve(HIER, '..')
const BRON = path.join(KIT, 'bron')
const UIT = path.join(KIT, 'uit')
const HTML = path.join(KIT, 'build', 'html')
mkdirSync(UIT, { recursive: true })
mkdirSync(HTML, { recursive: true })

// ── Merkconstanten (bron: lib/belofte.ts, lib/brand.ts, globals.css) ──
const KOP = 'Alles voor je aanvragen in één systeem.'
const ACCENT = 'Je ziet wat het oplevert.'
const SUB = 'Wij draaien je advertenties, meten elke aanvraag en sturen bij.'
const TAGS = ['JE ADVERTENTIES', 'DE METING', 'JE CIJFER', 'GRATIS TOOLS']
const VOET = 'signumcore.io · vaste prijs · maandelijks opzegbaar'
const BUREAU_KOP = 'Tracking voor al je klanten:'
const BUREAU_ACCENT = 'gezet, bewaakt en gerepareerd.'
const BUREAU_SUB = 'En jij ziet het eerst — niet je klant.'
const BUREAU_TAGS = ['GTM', 'GA4', 'CONSENT MODE V2', 'SERVER-SIDE']

const C = {
  wit: '#FFFFFF', zwart: '#0A0A0A', blauw: '#2B47D6', lime: '#C9F227',
  lijn: '#E4E4E0', vlak: '#F1F1F0', tekst2: '#3A3A38', muted: '#6E6E68',
}

const CSS = `
@font-face{font-family:Switzer;font-weight:900;src:url('${BRON}/switzer-900.woff2') format('woff2')}
@font-face{font-family:Switzer;font-weight:800;src:url('${BRON}/switzer-800.woff2') format('woff2')}
@font-face{font-family:Switzer;font-weight:700;src:url('${BRON}/switzer-700.woff2') format('woff2')}
@font-face{font-family:Switzer;font-weight:500;src:url('${BRON}/switzer-500.woff2') format('woff2')}
@font-face{font-family:Switzer;font-weight:400;src:url('${BRON}/switzer-400.woff2') format('woff2')}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:100%;height:100%;overflow:hidden}
body{font-family:Switzer,system-ui,sans-serif;color:${C.zwart};-webkit-font-smoothing:antialiased}
.mono{font-family:'IBM Plex Mono',ui-monospace,Menlo,monospace}
.stage{position:relative;width:100%;height:100%;background:${C.wit};overflow:hidden}
.bar{position:absolute;left:0;right:0;background:${C.blauw}}
.merk{display:inline-flex;align-items:baseline;font-weight:900;letter-spacing:-0.03em;line-height:1;white-space:nowrap}
.merk .punt{display:inline-block;width:.26em;height:.26em;background:${C.lime};border:.045em solid ${C.zwart};margin:0 .06em;transform:translateY(-.02em)}
.kop{font-weight:900;letter-spacing:-0.035em;line-height:1.04;display:flex;flex-direction:column;align-items:flex-start}
.kop .acc{background:${C.blauw};color:${C.wit};padding:0 .22em;display:inline-block;margin-top:.04em;white-space:nowrap}
.chips{display:flex;gap:.6em;flex-wrap:wrap}
.chip{border:1px solid ${C.lijn};background:${C.wit};font-weight:700;padding:.3em .75em;white-space:nowrap}
.sub{font-weight:600}
.voet{font-weight:700}
.label{font-weight:700}
`

const GF = `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=block" rel="stylesheet">`

const doc = (w, h, body, extraCss = '') =>
  `<!doctype html><html><head><meta charset="utf-8">${GF}<style>${CSS}${extraCss}</style></head><body style="width:${w}px;height:${h}px">${body}</body></html>`

// Greedy regelafbreking op tekens (Satori-les uit ogFrame: te brede tekst valt stil weg).
function wrap(tekst, maxChars) {
  const woorden = tekst.split(' ')
  const regels = []
  let huidig = ''
  for (const w of woorden) {
    const probe = huidig ? `${huidig} ${w}` : w
    if (probe.length > maxChars && huidig) { regels.push(huidig); huidig = w } else huidig = probe
  }
  if (huidig) regels.push(huidig)
  return regels
}
// 0.47em per teken is gemeten aan Switzer 900 (ogFrame.tsx), incl. marge.
const CHAR = 0.5 // Switzer 900 in Chromium meet breder dan Satori's fallback; 0.5 houdt marge
function passend(regels, max, budget) {
  const p = Math.min(...regels.map((r) => budget / (r.length * CHAR)))
  return Math.max(12, Math.min(max, Math.floor(p)))
}

const merk = (px, kleur = C.zwart) =>
  `<span class="merk" style="font-size:${px}px;color:${kleur}">SignumCore<span class="punt"></span></span>`

// ── Layout A: "kaart" (OG-frame-familie) — voor 2:1 … 1:1 … 9:16 ──
function kaart({ w, h, safe = {}, kop = KOP, accent = ACCENT, sub = SUB, tags = TAGS, voet = VOET, label = '// adverteren en meten', maxChars, kopMax }) {
  const s = { top: 0, right: 0, bottom: 0, left: 0, ...safe }
  const bw = w - s.left - s.right, bh = h - s.top - s.bottom
  const bar = Math.max(8, Math.round(bh * 0.019))
  const padY = Math.round(bh * 0.076), padX = Math.round(bw * 0.047)
  const budget = bw - 2 * padX
  const regels = wrap(kop, maxChars ?? Math.max(14, Math.round(budget / (bh * 0.108 * CHAR))))
  const kopCap = kopMax ?? Math.round(bh * (bw / bh < 1.3 ? 0.085 : 0.108))
  const kopPx = Math.min(passend(regels, kopCap, budget), passend([accent], kopCap, budget - Math.round(bh * 0.06)))
  const smal = bw / bh < 1.3
  const merkPx = Math.round(bh * (smal ? 0.06 : 0.073)), labelPx = Math.round(bh * (smal ? 0.026 : 0.035))
  const subPx = Math.round(bh * (smal ? 0.034 : 0.041)), chipPx = Math.round(bh * (smal ? 0.022 : 0.029)), voetPx = Math.round(bh * (smal ? 0.026 : 0.035))
  const body = `
  <div class="stage">
    <div style="position:absolute;left:${s.left}px;top:${s.top}px;width:${bw}px;height:${bh}px;background:${C.wit}">
      <div class="bar" style="top:0;height:${bar}px"></div>
      <div class="bar" style="bottom:0;height:${bar}px"></div>
      <div style="position:absolute;inset:0;padding:${padY}px ${padX}px;display:flex;flex-direction:column">
        <div style="display:flex;${smal ? 'flex-direction:column;gap:.5em' : 'align-items:baseline'};gap:${Math.round(merkPx * .3)}px;margin-top:${Math.round(bh * 0.02)}px;margin-bottom:${Math.round(bh * (smal ? 0.04 : 0.05))}px">
          ${merk(merkPx)}<span class="mono label" style="font-size:${labelPx}px;white-space:nowrap">${label}</span>
        </div>
        <div class="kop" style="font-size:${kopPx}px">${regels.map((r) => `<span>${r}</span>`).join('')}<span class="acc">${accent}</span></div>
        <p class="mono sub" style="font-size:${subPx}px;margin-top:${Math.round(bh * 0.04)}px">${sub}</p>
        <div class="chips mono" style="font-size:${chipPx}px;margin-top:${Math.round(bh * 0.07)}px">${tags.map((t) => `<span class="chip">${t}</span>`).join('')}</div>
        <p class="mono voet" style="font-size:${voetPx}px;margin-top:auto">${voet}</p>
      </div>
    </div>
  </div>`
  return doc(w, h, body)
}

// ── Layout B: "band" — voor brede banners (3:1 tot 16:1) ──
// safe.left houdt ruimte vrij waar het platform de avatar overheen legt.
function band({ w, h, safe = {}, kop = KOP, accent = ACCENT, voet = VOET, label = '// adverteren en meten', compact = false }) {
  const s = { top: 0, right: 0, bottom: 0, left: 0, ...safe }
  const bw = w - s.left - s.right, bh = h - s.top - s.bottom
  const bar = Math.max(6, Math.round(bh * 0.03))
  const padX = Math.round(Math.min(bw * 0.04, bh * 0.25)), padY = Math.round(bh * 0.1)
  const merkPx = Math.round(bh * (compact ? 0.19 : 0.14))
  const labelPx0 = Math.round(bh * (compact ? 0.085 : 0.065))
  const merkBreedte = Math.max(merkPx * 5.9, label.length * 0.6 * labelPx0) // "SignumCore▪" ≈ 5.9em bij 900; mono ≈ 0.6em/teken
  const kolomGap = Math.round(bh * 0.14)
  const rest = bw - 2 * padX - merkBreedte - kolomGap
  const regels = compact ? [kop] : wrap(kop, 24)
  const kopCap = Math.round(bh * (compact ? 0.2 : 0.2))
  const kopPx = Math.min(passend(regels, kopCap, rest), passend([accent], kopCap, rest - Math.round(bh * 0.08)))
  const labelPx = labelPx0
  const voetPx = Math.min(Math.round(bh * (compact ? 0.075 : 0.06)), Math.floor(rest / (voet.length * 0.62)))
  const body = `
  <div class="stage">
    <div class="bar" style="top:0;height:${bar}px"></div>
    <div class="bar" style="bottom:0;height:${bar}px"></div>
    <div style="position:absolute;left:${s.left}px;top:${s.top}px;width:${bw}px;height:${bh}px;padding:${padY}px ${padX}px;display:flex;align-items:center;gap:${kolomGap}px">
      <div style="display:flex;flex-direction:column;gap:${Math.round(bh * 0.06)}px;flex:0 0 auto">
        ${merk(merkPx)}
        <span class="mono label" style="font-size:${labelPx}px;white-space:nowrap">${label}</span>
      </div>
      <div style="width:1px;align-self:stretch;background:${C.zwart};flex:0 0 1px"></div>
      <div style="display:flex;flex-direction:column;gap:${Math.round(bh * 0.05)}px;flex:1 1 auto;min-width:0">
        <div class="kop" style="font-size:${kopPx}px">${regels.map((r) => `<span>${r}</span>`).join('')}<span class="acc">${accent}</span></div>
        <p class="mono voet" style="font-size:${voetPx}px;white-space:nowrap">${voet}</p>
      </div>
    </div>
  </div>`
  return doc(w, h, body)
}

// ── Avatar: de "S" + lime punt — het monogram van het woordmerk ──
function avatar({ w, bg = C.wit, ink = C.zwart, rand = true }) {
  const px = Math.round(w * 0.62)
  const body = `
  <div class="stage" style="background:${bg};display:flex;align-items:center;justify-content:center;${rand ? `outline:${Math.round(w * 0.004)}px solid ${C.lijn};outline-offset:-${Math.round(w * 0.004)}px` : ''}">
    <span class="merk" style="font-size:${px}px;color:${ink}">S<span class="punt" style="border-color:${C.zwart}"></span></span>
  </div>`
  return doc(w, w, body)
}

// ── Woordmerk los (transparant) ──
function woordmerk({ w, h, kleur }) {
  const body = `<div style="width:${w}px;height:${h}px;display:flex;align-items:center;justify-content:center;background:transparent">${merk(Math.round(h * 0.62), kleur)}</div>`
  return doc(w, h, body, 'html,body,.stage{background:transparent!important}')
}

// ── Specs ──
const SPECS = [
  // Avatars
  { naam: 'avatar-wit-1024', w: 1024, h: 1024, html: avatar({ w: 1024 }) },
  { naam: 'avatar-blauw-1024', w: 1024, h: 1024, html: avatar({ w: 1024, bg: C.blauw, ink: C.wit, rand: false }) },
  { naam: 'avatar-zwart-1024', w: 1024, h: 1024, html: avatar({ w: 1024, bg: C.zwart, ink: C.wit, rand: false }) },
  // Woordmerken
  { naam: 'woordmerk-zwart-transparant-2400x600', w: 2400, h: 600, html: woordmerk({ w: 2400, h: 600, kleur: C.zwart }), transparant: true },
  { naam: 'woordmerk-wit-transparant-2400x600', w: 2400, h: 600, html: woordmerk({ w: 2400, h: 600, kleur: C.wit }), transparant: true },
  // Kaarten (2:1-familie)
  { naam: 'og-linkvoorbeeld-1200x630', w: 1200, h: 630, html: kaart({ w: 1200, h: 630 }) },
  { naam: 'github-social-preview-1280x640', w: 1280, h: 640, html: kaart({ w: 1280, h: 640, label: '// github.com/SignumCore' }) },
  { naam: 'producthunt-galerij-1270x760', w: 1270, h: 760, html: kaart({ w: 1270, h: 760 }) },
  { naam: 'producthunt-galerij-bureaus-1270x760', w: 1270, h: 760, html: kaart({ w: 1270, h: 760, kop: BUREAU_KOP, accent: BUREAU_ACCENT, sub: BUREAU_SUB, tags: BUREAU_TAGS, label: '// voor marketingbureaus', voet: 'signumcore.io/voor-bureaus · white-label · maandelijks opzegbaar' }) },
  { naam: 'instagram-post-1080x1080', w: 1080, h: 1080, html: kaart({ w: 1080, h: 1080, maxChars: 15 }) },
  { naam: 'instagram-story-1080x1920', w: 1080, h: 1920, html: kaart({ w: 1080, h: 1920, safe: { top: 250, bottom: 250 }, maxChars: 15, voet: 'signumcore.io<br>vaste prijs · maandelijks opzegbaar' }) },
  // Facebook: desktop toont alles, mobiel snijdt zijkanten af tot ~1109px breed; profielfoto overlapt linksonder.
  { naam: 'facebook-paginacover-1640x624', w: 1640, h: 624, html: kaart({ w: 1640, h: 624, safe: { left: 270, right: 270 } }) },
  // YouTube: alleen de 1546×423-kern is overal zichtbaar.
  { naam: 'youtube-kanaalbanner-2560x1440', w: 2560, h: 1440, html: band({ w: 2560, h: 1440, safe: { left: 507, right: 507, top: 508, bottom: 509 } }) },
  // Banden (brede banners)
  { naam: 'linkedin-bedrijfscover-1128x191', w: 1128, h: 191, html: band({ w: 1128, h: 191, safe: { left: 40, right: 40 }, compact: true }) },
  { naam: 'linkedin-persoonlijk-cover-1584x396', w: 1584, h: 396, html: band({ w: 1584, h: 396, safe: { left: 400, right: 40 }, label: '// oprichter' }) },
  { naam: 'x-header-1500x500', w: 1500, h: 500, html: band({ w: 1500, h: 500, safe: { left: 60, right: 60, bottom: 130 } }) },
  { naam: 'bluesky-mastodon-banner-1500x500', w: 1500, h: 500, html: band({ w: 1500, h: 500, safe: { left: 60, right: 60, bottom: 130 } }) },
  { naam: 'reddit-profielbanner-1920x384', w: 1920, h: 384, html: band({ w: 1920, h: 384, safe: { left: 360, right: 60 } }) },
  { naam: 'reddit-communitybanner-4000x256', w: 4000, h: 256, html: band({ w: 4000, h: 256, safe: { left: 1000, right: 1000 }, compact: true }) },
]

const browser = await chromium.launch()
const ctx = await browser.newContext({ deviceScaleFactor: 1 })
const page = await ctx.newPage()
const log = []
for (const s of SPECS) {
  const htmlPad = path.join(HTML, `${s.naam}.html`)
  writeFileSync(htmlPad, s.html)
  await page.setViewportSize({ width: s.w, height: s.h })
  await page.goto(`file://${htmlPad}`)
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(150)
  const uit = path.join(UIT, `${s.naam}.png`)
  await page.screenshot({ path: uit, type: 'png', omitBackground: !!s.transparant, clip: { x: 0, y: 0, width: s.w, height: s.h } })
  log.push(`${s.naam} ${s.w}x${s.h}`)
}
await browser.close()
console.log(log.join('\n'))
