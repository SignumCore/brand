# SignumCore — profielteksten voor social media en vindplaatsen

Bron van waarheid: `lib/belofte.ts`, `lib/cta.ts`, `lib/pricing.ts`, `public/llms.txt` en `app/(masterbrand)/webinar/page.tsx` op **origin/main** van signum-website (stand 10 september 2026, ná #564 webinar-voordeur en #565 bureau-wereld weg). Overal exact dezelfde naam, handle, URL en logo. Geen adres, geen telefoon: die bestaan nog niet.

## 0. Wat er op 10 september veranderde

Twee merges hebben de propositie versmald. Alles hieronder is daarop herschreven; oudere teksten (bureaus, wachtlijst, "op Start of Groei", "maandelijks opzegbaar" als micro) zijn ongeldig.

- **Eén doelgroep.** De bureau-wereld is van de site: 45 pagina's weg, alles 308 naar de home. Weg zijn `/voor-bureaus`, `/tracking-operations`, `/monitoring`, `/integrations`, `/partners`, `/compare/*`, `/solutions/*`, `/docs/*`, `/case-studies`, `/for/*`, `/migrate-to-ga4`. Noem ze nergens meer. De doelgroep is nu de **directeur van een Nederlands bedrijf van 10 tot 50 medewerkers dat adverteert**.
- **Eén handeling.** `/wachtlijst` bestaat niet meer. De enige deur is `/webinar`: een sessie van een uur, live, maximaal vijf deelnemers, de eerste donderdag na aanmelding.

## 1. Stamgegevens (overal identiek)

| Veld | Waarde |
|---|---|
| Naam | SignumCore |
| Handle (1e keus) | `signumcore` |
| Vastgelegde afwijkingen | Instagram `signumcore_io` · Reddit `SignumCoreio` · X `signumcore_io` (zie §7) |
| Website | https://signumcore.io |
| Voordeur (enige) | https://signumcore.io/webinar |
| Tweede link (nooit als CTA) | https://signumcore.io/scan |
| E-mail | info@signumcore.io (algemeen) · support@signumcore.io (klanten) |
| Oprichter | Mink Helwig — https://www.linkedin.com/in/boeliebamba/ |
| Opgericht | 2025 |
| Plaats | Wageningen, Nederland (alleen plaats, geen straat) |
| KVK / BTW | 93077149 / NL004998843B56 |
| Rechtsvorm | Eenmanszaak (HGVC), handelsnaam SignumCore |
| Bedrijfsgrootte | 1 (zelfstandig) |
| Branche | Advertising Services · Marketing |
| Talen | Nederlands (primair), Engels |
| Avatar | `uit/avatar-wit-<maat>.png` |
| Woordmerk | `uit/woordmerk-zwart-transparant-2400x600.png` |
| Linkvoorbeeld | `uit/og-linkvoorbeeld-1200x630.png` |

## 2. Kernzinnen (letterlijk uit de code, niet herschrijven)

- **Belofte** (`BELOFTE_KOP`): `Ben jij de baas over jouw bedrijf?`
- **Accent** (`BELOFTE_KOP_ACCENT`): `Dan wil je weten wat een aanvraag je kost.`
- **Titelzin** (`BELOFTE_TITEL`): `Wat kost een aanvraag je? Adverteren in Google, met het cijfer erbij`
- **Sub** (`BELOFTE_SUB`): `Eén bedrag per maand. Niets verandert zonder jouw akkoord.`
- **Maatstaf** (`MAATSTAF`): `wat een aanvraag je kost`
- **Micro** (`BELOFTE_MICRO_DELEN`): `vaste prijs · geen percentage over je advertentiebudget`
- **Sessie-kop** (`/webinar`): `Ben jij de baas over jouw bedrijf?` — `Dan wil je weten wat een aanvraag je kost.` (het woord wisselt: aanvraag / offerte / afspraak / telefoontje)
- **Sessie-sub**: `Een uur, live, maximaal vijf deelnemers. Eerste donderdag na aanmelding.`
- **Onder de knop** (`WACHTLIJST_ONDER_KNOP`): `Eerst een sessie van een uur, live, met maximaal vijf deelnemers. Daarna beslis je.`
- **Aanbod** (`WACHTLIJST_BELOFTE`): `De eerste 25 aanmeldingen krijgen de eerste drie maanden gratis op Groei.`
- **Termijn** (`AANBOD_TERMIJN`): `De eerste drie maanden betaal je niets. Na drie maanden kun je kosteloos stoppen. Blijf je, dan loop je mee tot en met maand zes. Daarna zeg je per maand op.`
- **Waarom zes maanden**: `Een kostprijs per aanvraag zegt pas na een paar maanden iets.`
- **Routering** (`ROUTERING`): `Klein beginnen kan met Start. Groter bedrijf of meerdere vestigingen? Plan een gesprek.`
- **Knoppen** (`lib/cta.ts`): `AANMELDEN VOOR DE SESSIE` (/webinar) · `DOE DE GRATIS SCAN` (/scan) · `PLAN EEN GESPREK` (/plan-gesprek)
- **Prijzen** (launchprijs, regulier ×1,2): Start €249 · Groei €499 · Compleet €899 · Schaal €1499 per maand
- **De sleutel** (llms.txt): `Niets verandert zonder jouw akkoord, alles is terug te draaien, er is een noodstop.`
- **Specialismen** (tag-velden): Google Ads, SEA, conversiemeting, Google Tag Manager, GA4, Consent Mode v2, bezoekersherkenning (AVG), kosten per aanvraag

**Verboden**

1. Alles wat de bureau-wereld noemt: "voor bureaus", "tracking operations", "klantportfolio", "white-label", "Looker Studio-rapporten", "server-side tagging" als aanbod, en elke URL uit §0.
2. `/wachtlijst`, "wachtlijst", "op Start of Groei", "maandelijks opzegbaar" als micro-belofte (de termijn is nu zes maanden, zie `AANBOD_TERMIJN`).
3. "Wij bouwen je website" — het systeem werkt op de site die de klant al heeft.
4. "Elke aanvraag" als absolute meetclaim. Zeg "je aanvragen" of "de aanvragen die eruit komen".
5. **Hoe het werkt.** Er is geen octrooi ingediend. Zeg wát de klant krijgt, nooit hoe het gebeurt: geen onderdelen, geen stappen, geen standen, geen architectuur.
6. Klantlogo's, klantverhalen, reviews of keurmerken. Die zijn er niet, en dat zeggen we ook.

## 3. Bio's per lengte (NL)

**Kort — 80 tekens (TikTok):**
> Weet jij wat een aanvraag je kost? Wij draaien je Google-advertenties en meten.

**Kort — 150 tekens (Instagram, Threads):**
> Wat kost een aanvraag je? Wij beheren je Google-advertenties en zetten het cijfer erbij. Eén bedrag per maand. Aanmelden voor de sessie ↓

**Kort — 160 tekens (X, GitHub-organisatie):**
> Wij draaien je Google-advertenties en meten je aanvragen. Elke maand één bedrag: wat een aanvraag je kost. Vaste prijs, geen percentage over je budget.

**Kort — 200 tekens (Reddit):**
> SignumCore draait Google-advertenties voor Nederlandse bedrijven en meet de aanvragen die eruit komen. Elke maand één bedrag: wat een aanvraag kost. Vragen over GA4, GTM en meten welkom.

**LinkedIn-tagline — 120 tekens:**
> Wat kost een aanvraag je? Wij beheren je Google-advertenties en zetten het cijfer erbij.

**Middel — 300 tekens (Pinterest, Bluesky, Mastodon, Facebook-intro):**
> Voor de directeur die betaalt voor advertenties en niet te horen krijgt wat ze opleveren. Wij draaien je campagnes in Google en meten de aanvragen die eruit komen, op de website die je al hebt. Elke maand één bedrag: wat een aanvraag je kost. Vaste prijs, geen percentage over je budget.

**Lang — tot 2000 tekens (LinkedIn "Over ons", YouTube, Facebook "Info", Crunchbase):**
> SignumCore is voor de directeur van een Nederlands bedrijf dat adverteert. Hij betaalt, anderen beslissen, en niemand zegt hem wat een aanvraag kost.
>
> Wij draaien je advertenties in Google, meten je aanvragen en sturen bij. Elke maand zie je één bedrag in plaats van een dashboard vol grafieken: wat een aanvraag je kost. Het werkt op de website die je al hebt; websites bouwen doen wij niet. Je advertentiebudget gaat rechtstreeks naar Google, en wij rekenen geen percentage daarover.
>
> Je houdt de sleutel. Niets verandert zonder jouw akkoord, alles is terug te draaien, en er is een noodstop.
>
> Eén vast bedrag per maand: Start €249, Groei €499, Compleet €899, Schaal €1499 (launchprijs). Voor de eerste 25: de eerste drie maanden betaal je niets. Na drie maanden kun je kosteloos stoppen. Blijf je, dan loop je mee tot en met maand zes. Daarna zeg je per maand op. Waarom zes maanden? Een kostprijs per aanvraag zegt pas na een paar maanden iets.
>
> Eerlijk over waar we staan: SignumCore is nieuw. We hebben nog geen klanten en dus geen klantverhalen, en je vindt hier nul verzonnen reviews of keurmerken.
>
> Er is één manier om te beginnen: een sessie van een uur, live, met maximaal vijf deelnemers, de eerste donderdag na je aanmelding. Daarna beslis je.
>
> Eigen onderzoek: de Staat van Tracking in Nederland 2026, gemeten op 589 populaire .nl-websites. Gratis tools zonder account: site-scan, ROAS-calculator, budgetcheck en een demo van bezoekersherkenning.
>
> Nederlands bedrijf, landelijk actief. AVG-veilig, data in de EU. KVK 93077149.
>
> Aanmelden: https://signumcore.io/webinar · Contact: info@signumcore.io

## 4. Bio's (EN) — Product Hunt, G2, Capterra, Crunchbase, GitHub, StackShare

**Tagline — 60 chars:**
> Google Ads, run and measured. See what a lead costs.

**Short — 160 chars:**
> We run your Google Ads and measure the leads they bring. One amount a month: what a lead costs. Fixed price, no cut of your ad budget.

**Medium — 300 chars:**
> For the director who pays for advertising and never hears what it returns. We run your Google Ads and measure the leads they bring, on the website you already have. One amount a month: what a lead costs. Fixed monthly price, and we take no percentage of your ad budget.

**Long:**
> SignumCore is for the director of a Dutch company that advertises. He pays, others decide, and nobody tells him what a lead costs.
>
> We run your Google Ads, measure the leads they bring and adjust. Every month you see one amount instead of a dashboard full of charts: what a lead costs. It works on the website you already have; we do not build websites. Your ad budget goes straight to Google, and we take no percentage of it.
>
> You keep the key. Nothing changes without your approval, everything can be undone, and there is a stop button.
>
> One fixed monthly price: Start €249, Groei €499, Compleet €899, Schaal €1499 (launch pricing). For the first 25: the first three months are free. After three months you can stop at no cost. If you stay, you run through month six. After that you cancel monthly.
>
> Honest about where we are: SignumCore is new. We have no customers yet and therefore no case studies, and you will find zero invented reviews or badges here.
>
> There is one way to start: a one-hour live session with at most five participants, the first Thursday after you sign up.
>
> Own research: State of Tracking in the Netherlands 2026, measured on 589 popular .nl websites. Dutch company, GDPR-safe, data in the EU. Chamber of Commerce 93077149.

## 5. Per platform — velden die afwijken

### LinkedIn bedrijfspagina
- Naam SignumCore · slug `signumcore` · Tagline §3 (120) · Over ons §3 lang
- Branche: Reclame en adverteerdersdiensten · 0-1 medewerkers · Zelfstandig · Opgericht 2025 · Wageningen, Gelderland
- Specialismen: Google Ads, SEA, Conversiemeting, Google Tag Manager, GA4, Consent Mode v2, Bezoekersherkenning, Kosten per aanvraag
- Knop: "Meer informatie" → https://signumcore.io/webinar
- Logo `avatar-wit-400.png` · Cover `linkedin-bedrijfscover-1128x191.png`
- Persoonlijk profiel Mink: cover `linkedin-persoonlijk-cover-1584x396.png`

### X
- Naam SignumCore · @SignumCoreio · Bio §3 (160) · Locatie Nederland · Website signumcore.io/webinar
- Avatar `avatar-wit-400.png` · Header `x-header-1500x500.png`
- Vastgezette post: de sessie

### Instagram + Threads
- Naam SignumCore · @signumcore_io · Bio §3 (150) · Categorie Marketingbureau · Zakelijk account
- Link https://signumcore.io/webinar · Avatar `avatar-wit-320.png`
- Website-veld kan alleen in de mobiele app; anders staat de URL in de bio

### Facebook-pagina
- Naam SignumCore · Categorie Marketingbureau · Gebruikersnaam @signumcore
- Intro (255): eerste twee zinnen van §3 middel · Info: §3 lang
- Profielfoto `avatar-wit-500.png` · Omslag `facebook-paginacover-1640x624.png` · Geen adres tonen

### YouTube
- Kanaalnaam SignumCore · @signumcore · Beschrijving §3 lang
- Avatar `avatar-wit-800.png` · Banner `youtube-kanaalbanner-2560x1440.png`
- Links: Aanmelden (/webinar), Website, LinkedIn, GitHub

### Reddit
- u/SignumCoreio · Weergavenaam SignumCore · Over (200) §3
- Avatar `avatar-wit-256.png` · Banner `reddit-profielbanner-1920x384.png` (handwerk, zie §7)
- Als deelnemer meedoen in r/PPC, r/GoogleAnalytics, r/SEO, r/marketing; geen zelfpromotie zonder context

### Bluesky
- Handle `@signumcore.io` (eigen domein; DNS TXT `_atproto.signumcore.io` op Vercel DNS) · Bio: eerste twee zinnen van §3 middel
- Avatar `avatar-wit-1024.png` · Banner `bluesky-mastodon-banner-1500x500.png`

### Mastodon
- @signumcore · Bio §3 middel · Website-veld = https://signumcore.io (verificatie via `rel="me"`, website-PR)
- Avatar `avatar-wit-400.png` · Header `bluesky-mastodon-banner-1500x500.png`

### GitHub (organisatie bestaat: github.com/SignumCore)
- Beschrijving (160) §3 · Website https://signumcore.io · E-mail info@signumcore.io · Locatie Nederland
- Avatar `avatar-wit-500.png` · Social preview per repo `github-social-preview-1280x640.png`

### Pinterest · TikTok
- Pinterest zakelijk: naam SignumCore, over §3 middel, site claimen via metatag
- TikTok: @signumcore_io, bio §3 (80), weblink vereist zakelijk account

### Gidsen (Product Hunt, G2, Capterra, Crunchbase, Trustpilot, Sortlist)
- Naam SignumCore · Categorie Marketing Analytics / PPC · Beschrijving §4
- Prijs waar verplicht: "vanaf €249 per maand (launchprijs)"
- Logo `avatar-wit-400.png` · Oprichter Mink Helwig · HQ Wageningen, Netherlands

## 6. Eerste posts (na aanmaken, één per platform)

1. **Voorstelpost** (LinkedIn, X, Bluesky, Mastodon, Threads): "Je betaalt voor advertenties. Wat ze opleveren? Dat hoor je zelden. Wij draaien je Google-advertenties, meten je aanvragen en sturen bij — en je ziet elke maand één bedrag: wat een aanvraag je kost. signumcore.io/webinar"
2. **Sessiepost**: "Eén uur, live, maximaal vijf deelnemers. Je ziet wat een aanvraag je kost en beslist daarna. Eerste donderdag na aanmelding: signumcore.io/webinar"
3. **Onderzoekspost**: "Staat van Tracking in NL 2026: GA4 draait op 45% van 589 gemeten .nl-sites, 66% zonder herkende cookiebanner. Methode en cijfers: signumcore.io/staat-van-tracking-2026"
4. **Toolpost**: "Wil je eerst zien wat je site nu al doet? De scan kijkt naar meting, privacy en toegankelijkheid. Zonder account: signumcore.io/scan"

AI Act art. 50: profielteksten zijn door mensen vastgesteld. Zodra posts door BULA gegenereerd worden, komt de disclosure-zin er automatisch bij (BULA PR #178).

## 7. Handles en wat handwerk blijft

`signumcore` is niet overal vrij:

- **Instagram** `signumcore_io` — eerste keus bezet door een privé-account
- **Reddit** `SignumCoreio` — eerste én tweede keus bezet
- **X** `SignumCoreio` — `signumcore` is een beschermd account uit 2011 met nul posts; `signumcore_io` was ook bezet

Reddit-avatar en -banner blijven handwerk: er is geen `input type=file` in de DOM, ook niet in shadow roots. Reddit maakt het veld pas aan bij de klik en opent direct een systeem-bestandskiezer. Uploads die wél lukken: LinkedIn, YouTube, Instagram, GitHub.
