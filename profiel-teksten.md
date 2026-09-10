# SignumCore — profielteksten voor social media en vindplaatsen

Bron van waarheid: `lib/belofte.ts`, `lib/brand.ts`, `lib/cta.ts`, `lib/offboarding.ts`, `lib/schema.ts` en `lib/pricing.ts` op **origin/main** van signum-website, gecontroleerd tegen de live site (stand 10 september 2026). Overal exact dezelfde naam, handle, URL en logo (NAP-regel uit `docs/NAP-CITATIES-DOSSIER-2026-07.md`). Geen adres, geen telefoon: die bestaan nog niet. Eerlijk over de fase: alleen Google Ads als advertentiekanaal, geen websites bouwen, geen klantlogo's of klantverhalen tot een klant drie maanden draait en schriftelijk toestemt.

## 1. Stamgegevens (overal identiek)

| Veld | Waarde |
|---|---|
| Naam | SignumCore |
| Handle (1e keus) | `signumcore` |
| Handle (2e keus, als bezet) | `signumcore_io` → daarna `signumcoreio` |
| Website | https://signumcore.io |
| Voordeur ondernemers | https://signumcore.io/wachtlijst |
| Voordeur bureaus | https://signumcore.io/plan-gesprek |
| E-mail | info@signumcore.io |
| Oprichter | Mink Helwig — https://www.linkedin.com/in/boeliebamba/ |
| Opgericht | 2025 |
| Plaats | Wageningen, Nederland (alleen plaats, geen straat) |
| KVK / BTW | 93077149 / NL004998843B56 |
| Rechtsvorm | Eenmanszaak (HGVC), handelsnaam SignumCore |
| Bedrijfsgrootte | 1 (zelfstandig) |
| Branche / categorie | Advertising Services · Marketing · Software (martech, analytics) |
| Talen | Nederlands (primair), Engels |
| Avatar | `uit/avatar-wit-<maat>.png` (wit) — blauw/zwart alleen als wit niet mag |
| Woordmerk | `uit/woordmerk-zwart-transparant-2400x600.png` |
| Linkvoorbeeld | `uit/og-linkvoorbeeld-1200x630.png` |

## 2. Kernzinnen (letterlijk uit de code, niet herschrijven)

- **Titelzin** (`BELOFTE_TITEL`): `Adverteren in Google uitbesteden — en zien wat het oplevert`
- **Belofte** (`BELOFTE_KOP`): `Alles voor je aanvragen in één systeem.`
- **Accent** (`BELOFTE_KOP_ACCENT`): `Je ziet wat het oplevert.`
- **Sub** (`BELOFTE_SUB`): `Wij draaien je advertenties, meten je aanvragen en sturen bij.`
- **Zin** (`BELOFTE_ZIN`): `Je advertenties en je meting in één systeem: wij draaien je campagnes in Google en meten de aanvragen die eruit komen.`
- **Maatstaf** (`MAATSTAF`): `wat een aanvraag je kost`
- **Micro**: `vaste prijs · maandelijks opzegbaar · je gegevens gaan mee als je stopt` (`MICRO` = `Je gegevens gaan mee als je stopt.`)
- **Wachtlijst** (`WACHTLIJST_BELOFTE`): `De eerste 25 aanmeldingen krijgen de eerste drie maanden gratis op Start of Groei.`
- **Onder de knop** (`WACHTLIJST_ONDER_KNOP`): `We gaan open met een vaste eerste groep. Zet je naam op de wachtlijst.`
- **Routering** (`ROUTERING`): `Klein beginnen kan met Start. Groter bedrijf of meerdere vestigingen? Plan een gesprek.`
- **Bureaus** (`BUREAU_BELOFTE_KOP` + `STAART`): `Tracking voor al je klanten: gezet, bewaakt en gerepareerd. En jij ziet het eerst — niet je klant.`
- **Bureaus onder de knop** (`BUREAU_ONDER_KNOP`): `Zelf aanmelden kan op dit moment niet. Plan een gesprek, dan kijken we samen wat past.`
- **Tagline** (`TAGLINE`): `Een klantenmotor. Cijfers die laten zien wat werkt. Eén systeem: SignumCore.`
- **Knoppen** (`lib/cta.ts`): `▶ ZET ME OP DE WACHTLIJST` (/wachtlijst) · `DOE DE GRATIS SCAN` (/scan) · `PLAN EEN GESPREK` (/plan-gesprek) · `VRAAG DE GRATIS AUDIT AAN` (/gratis-audit)
- **Prijzen** (launchprijs, regulier ×1,2): Start €249 · Groei €499 (ons advies) · Compleet €899 · Schaal €1499 per maand
- **Specialismen** (tag-velden): Google Ads, SEA, conversiemeting, Google Tag Manager, GA4, Consent Mode v2, server-side tagging, Looker Studio, bezoekersherkenning (AVG), tracking operations

**Verboden** (door main teruggetrokken, zie #398, #518, #543, #549): "wij bouwen je website", "je site gaat mee als je stopt", "elke aanvraag" (absolute meetclaim; zeg "je aanvragen" of "de aanvragen die eruit komen"), "proefperiode" of "14 dagen", "aanvraag en preview zijn gratis", een instapprijs onder €249, klantcijfers zonder toestemming, keurmerken of reviews die er niet zijn.

## 3. Bio's per lengte (NL)

**Kort — 80 tekens (TikTok):**
> Google-advertenties + meting in één systeem. Je ziet wat een aanvraag kost.

**Kort — 150 tekens (Instagram, Threads):**
> Adverteren in Google uitbesteden — en zien wat het oplevert. Eén cijfer per maand: wat een aanvraag je kost. Vaste prijs, maandelijks opzegbaar.

**Kort — 160 tekens (X, GitHub-organisatie):**
> Wij draaien je Google-advertenties, meten je aanvragen en sturen bij. Eén cijfer per maand: wat een aanvraag je kost. Vaste prijs, maandelijks opzegbaar.

**Kort — 200 tekens (Reddit):**
> SignumCore draait Google-advertenties voor ondernemers en meet de aanvragen die eruit komen. Voor bureaus: tracking per klant gezet, bewaakt en gerepareerd. Vragen over GA4 en GTM welkom.

**LinkedIn-tagline — 120 tekens:**
> Adverteren in Google uitbesteden — en zien wat het oplevert. Voor ondernemers; bureaus via een gesprek.

**Middel — 300 tekens (Facebook-intro, Pinterest, Bluesky, Mastodon):**
> SignumCore draait je advertenties in Google en meet de aanvragen die eruit komen, op de website die je al hebt. Elke maand één cijfer: wat een aanvraag je kost. Vaste prijs, maandelijks opzegbaar; je gegevens gaan mee als je stopt. Voor bureaus: tracking per klant gezet, bewaakt en gerepareerd.

**Lang — tot 2000 tekens (LinkedIn "Over ons", YouTube, Facebook "Info", Crunchbase):**
> SignumCore is één systeem voor je aanvragen: wij draaien je advertenties in Google, meten je aanvragen en sturen bij. Je ziet elke maand één cijfer in plaats van een dashboard vol grafieken: wat een aanvraag je kost.
>
> Voor ondernemers en MKB. Het systeem werkt op de website die je al hebt; websites bouwen doen wij niet. Klikken en aanvragen worden geteld voor zover de bezoeker het toestaat, en wij bewaken dat dat zo blijft. Je advertentiebudget gaat rechtstreeks naar Google. Eén vaste prijs per maand, maandelijks opzegbaar, en je aanvragen en je meetgegevens gaan mee als je stopt. We gaan open met een vaste eerste groep: de eerste 25 aanmeldingen krijgen de eerste drie maanden gratis op Start of Groei.
>
> Voor marketingbureaus. Tracking operations voor je hele klantportfolio: Google Tag Manager en GA4 per klant gezet, Consent Mode v2 gevalideerd, server-side tagging en white-label rapporten in Looker Studio. Jij ziet het eerst als de meting breekt, niet je klant. Zelf aanmelden kan op dit moment niet; plan een gesprek.
>
> Eigen onderzoek: de Staat van Tracking in Nederland 2026, gemeten op 589 populaire .nl-websites. Gratis tools zonder account: site-scan, ROAS-calculator, budgetcheck, bezoekersherkenning-demo en AVG-check.
>
> Nederlands bedrijf, landelijk actief. AVG-veilig, NL-data. Nul verzonnen reviews of keurmerken. KVK 93077149.
>
> Website: https://signumcore.io · Wachtlijst: https://signumcore.io/wachtlijst · Contact: info@signumcore.io

## 4. Bio's (EN) — voor Product Hunt, G2, Capterra, Crunchbase, GitHub, StackShare

**Tagline — 60 chars:**
> Google Ads and measurement in one system.

**Short — 160 chars:**
> We run your Google Ads and measure the leads they bring. One number a month: what a lead costs. Fixed price, cancel monthly.

**Medium — 300 chars:**
> SignumCore runs your Google Ads and measures the leads they bring, on the website you already have. One number a month: what a lead costs. Fixed monthly price, cancel any month, your data goes with you if you leave. For agencies: tracking per client set up, monitored and repaired.

**Long:**
> SignumCore is one system for your leads: we run your Google Ads, measure the leads they bring and adjust. Every month you see one number instead of a dashboard full of charts: what a lead costs you.
>
> For SMEs: it works on the website you already have; we do not build websites. Ad budget goes straight to Google. One fixed monthly price, cancel any month, and your leads and measurement data go with you if you leave. We open with a fixed first group: the first 25 sign-ups get their first three months free on Start or Groei.
>
> For marketing agencies: tracking operations across your whole client portfolio. Google Tag Manager and GA4 set up per client, Consent Mode v2 validated, server-side tagging, white-label Looker Studio reports. You see it first when measurement breaks, not your client. No self-service yet; book a call.
>
> Own research: State of Tracking in the Netherlands 2026, measured on 589 popular .nl websites. Free tools without an account: site scan, ROAS calculator, ad-budget check, visitor-recognition demo.
>
> Dutch company, GDPR-safe, NL data. No invented reviews or badges. Chamber of Commerce 93077149.

## 5. Per platform — velden die afwijken

### LinkedIn bedrijfspagina
- Naam: SignumCore · URL-slug: `signumcore`
- Tagline: zie §3 (120) · Over ons: zie §3 lang
- Branche: Advertising Services · Bedrijfsgrootte: 1 werknemer · Type: Zelfstandig
- Opgericht: 2025 · Locatie: Wageningen, Nederland (alleen plaats invullen)
- Specialismen: Google Ads, SEA, conversiemeting, Google Tag Manager, GA4, Consent Mode v2, server-side tagging, Looker Studio, bezoekersherkenning, tracking operations
- Knop: "Website bezoeken" → https://signumcore.io/wachtlijst
- Logo: `avatar-wit-400.png` · Cover: `linkedin-bedrijfscover-1128x191.png`
- Daarna: LinkedIn-productpagina "SignumCore" (gratis, onder de bedrijfspagina)
- Persoonlijk profiel Mink: cover `linkedin-persoonlijk-cover-1584x396.png`

### X
- Naam: SignumCore · Handle: @signumcore · Bio §3 (160) · Locatie: Nederland · Website: signumcore.io
- Avatar `avatar-wit-400.png` · Header `x-header-1500x500.png`
- Vastgezette post: de wachtlijst (https://signumcore.io/wachtlijst)

### Instagram + Threads
- Naam: SignumCore · @signumcore · Bio §3 (150) · Categorie: Marketingbureau · Zakelijk account
- Link: https://signumcore.io/wachtlijst · Avatar `avatar-wit-320.png`
- Eerste post: `instagram-post-1080x1080.png` · Story: `instagram-story-1080x1920.png`

### Facebook-pagina
- Naam: SignumCore · Categorie: Marketingbureau · Gebruikersnaam: @signumcore
- Intro (255): §3 middel, ingekort tot de eerste twee zinnen · Info: §3 lang
- Profielfoto `avatar-wit-500.png` · Omslag `facebook-paginacover-1640x624.png`
- Geen adres invullen; "Geen adres tonen" kiezen

### YouTube
- Kanaalnaam: SignumCore · Handle: @signumcore · Beschrijving: §3 lang
- Avatar `avatar-wit-800.png` · Banner `youtube-kanaalbanner-2560x1440.png`
- Links: signumcore.io, wachtlijst, LinkedIn, GitHub

### TikTok
- @signumcore · Bio §3 (80) · Avatar `avatar-wit-200.png` · Website-link vereist zakelijk account

### Pinterest (zakelijk)
- Naam SignumCore · @signumcore · Over: §3 middel · Website claimen via HTML-metatag (later via website-PR)
- Avatar `avatar-wit-400.png`

### Bluesky
- Handle: `@signumcore.io` (eigen domein als handle; DNS TXT `_atproto.signumcore.io` op Vercel DNS) · Bio: eerste twee zinnen van §3 middel (256 max)
- Avatar `avatar-wit-1024.png` · Banner `bluesky-mastodon-banner-1500x500.png`

### Mastodon (mastodon.social of mastodon.nl)
- @signumcore · Bio §3 middel · Profielvelden: Website = https://signumcore.io (verificatie via `rel="me"` op de site, website-PR)
- Avatar `avatar-wit-400.png` · Header `bluesky-mastodon-banner-1500x500.png`

### Reddit
- u/signumcore · Weergavenaam SignumCore · Over (200) §3
- Avatar `avatar-wit-256.png` · Profielbanner `reddit-profielbanner-1920x384.png`
- Eventueel r/signumcore: icoon `avatar-wit-256.png`, banner `reddit-communitybanner-4000x256.png`
- Als deelnemer meedoen in r/marketing, r/PPC, r/GoogleAnalytics, r/SEO; geen zelfpromotie zonder context

### GitHub (organisatie bestaat al: github.com/SignumCore)
- Beschrijving (160) §3 · Website https://signumcore.io · E-mail info@signumcore.io · Locatie Nederland
- Avatar `avatar-wit-500.png` (handmatig uploaden onder Organization settings → Profile)
- Social preview per repo: `github-social-preview-1280x640.png`

### Product Hunt
- Productnaam SignumCore · Tagline §4 (60) · Beschrijving §4 middel · Topics: Marketing, Analytics, SaaS, Advertising
- Thumbnail `avatar-wit-240.png` · Galerij `producthunt-galerij-1270x760.png` + `producthunt-galerij-bureaus-1270x760.png`
- Nog niet lanceren; eerst maker-profiel en productpagina aanmaken (één sterke launch, later)

### G2 / Capterra / GetApp / Software Advice / SaaSworthy / Crozdesk / SaaSHub / AlternativeTo
- Productnaam SignumCore · Categorie: Marketing Analytics, Tag Management, PPC / Google Ads Management
- Beschrijving §4 middel of lang · Logo `avatar-wit-400.png` · Screenshots: later, van het dashboard
- Prijs: "vanaf €249 per maand (launchprijs)" alleen waar een prijs verplicht is; anders "zie website"

### Crunchbase / Wellfound / F6S / Techleap Finder
- Organisatie SignumCore · Type: For profit · Opgericht 2025 · HQ: Wageningen, Netherlands · Oprichter Mink Helwig · Beschrijving §4 lang
- Logo `avatar-wit-500.png`

### Clutch / Sortlist / GoodFirms / DesignRush (bureaugidsen)
- Bedrijf SignumCore · Diensten: PPC / Google Ads, Analytics & Tracking
- Minimumproject: geen · Uurtarief: n.v.t. (abonnement) · Beschrijving §3 lang (NL op Sortlist, EN op de rest)

### Trustpilot (gratis bedrijfsprofiel)
- Domein signumcore.io claimen · Beschrijving §3 middel · Categorie: Marketingbureau

### Gravatar / About.me
- Gravatar aan info@signumcore.io koppelen: `avatar-wit-1024.png` · Profiel met website + LinkedIn + GitHub
- About.me: naam SignumCore, bio §3 middel, link naar site

## 6. Eerste posts (na aanmaken, per platform één)

1. **Voorstelpost** (LinkedIn, X, Facebook, Threads, Bluesky, Mastodon): "SignumCore draait je advertenties in Google, meet je aanvragen en stuurt bij. Eén cijfer per maand: wat een aanvraag je kost. Kijk eerst wat je site nu al doet: signumcore.io/scan" + `og-linkvoorbeeld-1200x630.png` of alleen de link.
2. **Wachtlijstpost**: "We gaan open met een vaste eerste groep. De eerste 25 aanmeldingen krijgen de eerste drie maanden gratis op Start of Groei. signumcore.io/wachtlijst"
3. **Onderzoekspost**: "Staat van Tracking in NL 2026: GA4 draait op 45% van 589 gemeten .nl-sites, 66% zonder herkende cookiebanner. Methode en cijfers: signumcore.io/staat-van-tracking-2026"
4. **Bureaupost** (LinkedIn): "Tracking voor al je klanten: gezet, bewaakt en gerepareerd. En jij ziet het eerst, niet je klant. Plan een gesprek: signumcore.io/plan-gesprek"

AI Act art. 50: profielteksten zijn door mensen vastgesteld. Zodra posts door BULA gegenereerd worden, komt de disclosure-zin er automatisch bij (BULA PR #178).
