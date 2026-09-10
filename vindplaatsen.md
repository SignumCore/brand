# SignumCore — vindplaatsen: social, profielen, gidsen en linkpagina's

Doel: overal aanwezig zijn waar dat gratis kan, voor (a) linkwaarde en merkvermeldingen, (b) ouderwetse doorklik-vindbaarheid, (c) AI-citaties. Basis: `docs/LISTINGS-DOSSIER-2026-07.md` (adres-vrij) + `docs/NAP-CITATIES-DOSSIER-2026-07.md` (wacht op adres/telefoon). Teksten en beelden: `profiel-teksten.md` en `uit/`.

Kolom "Menselijk": wat alleen jij kunt (account aanmaken, e-mail/sms-verificatie, captcha, akkoord op voorwaarden). Daarna kan ik met Chrome de velden invullen en beelden uploaden. Kolom "Dofollow" is een verwachting; per gids na plaatsing controleren (dossier-regel 3). Nofollow is nog steeds nuttig voor vermeldingen en AI-citaties.

## A. Social media (profiel + cover) — allemaal in één ronde

| # | Platform | Aanmelden | Handle | Beelden (uit `uit/`) | Menselijk | Dofollow |
|---|---|---|---|---|---|---|
| A1 | LinkedIn bedrijfspagina | https://www.linkedin.com/company/setup/new/ | /company/signumcore | avatar-wit-400 · linkedin-bedrijfscover-1128x191 | inloggen als Mink, pagina aanmaken, verificatie | nofollow |
| A2 | LinkedIn productpagina (onder A1) | Pagina → Producten → Product toevoegen | — | avatar-wit-400 · producthunt-galerij-1270x760 | goedkeuring LinkedIn (dagen) | nofollow |
| A3 | X | https://x.com/i/flow/signup | @signumcore | avatar-wit-400 · x-header-1500x500 | account, e-mail/sms, captcha | nofollow |
| A4 | Instagram (zakelijk) | https://www.instagram.com/accounts/emailsignup/ | @signumcore | avatar-wit-320 · instagram-post-1080x1080 | account, verificatie, omzetten naar zakelijk | nofollow |
| A5 | Threads | via A4 (app of threads.net) | @signumcore | avatar-wit-320 | inloggen met Instagram | nofollow |
| A6 | Facebook-pagina | https://www.facebook.com/pages/create | @signumcore | avatar-wit-500 · facebook-paginacover-1640x624 | persoonlijk account nodig, pagina aanmaken | nofollow |
| A7 | YouTube-kanaal | https://www.youtube.com/create_channel | @signumcore | avatar-wit-800 · youtube-kanaalbanner-2560x1440 | Google-account, merkaccount kiezen | nofollow |
| A8 | TikTok | https://www.tiktok.com/signup | @signumcore | avatar-wit-200 | account, verificatie; zakelijk account voor weblink | nofollow |
| A9 | Pinterest (zakelijk) | https://www.pinterest.com/business/create/ | @signumcore | avatar-wit-400 | account; site claimen via metatag (website-PR) | nofollow |
| A10 | Bluesky | https://bsky.app | @signumcore.io (domein als handle) | avatar-wit-1024 · bluesky-mastodon-banner-1500x500 | account; daarna DNS TXT `_atproto` op Vercel DNS | nofollow |
| A11 | Mastodon | https://mastodon.social/auth/sign_up (of mastodon.nl) | @signumcore | avatar-wit-400 · bluesky-mastodon-banner-1500x500 | account, e-mailverificatie | rel=me-verificatie: vinkje bij website (website-PR) |
| A12 | Reddit | https://www.reddit.com/register/ | u/signumcore | avatar-wit-256 · reddit-profielbanner-1920x384 | account, e-mail; eventueel r/signumcore (reddit-communitybanner-4000x256) | nofollow |

Regels: (1) overal `signumcore`; is dat bezet, dan `signumcore_io`, daarna `signumcoreio`, en dat noteren in de log onderaan. (2) Op elk profiel de site-URL en waar het kan e-mail. (3) Eerste post per platform staat in `profiel-teksten.md` §6.

## B. Ontwikkelaars- en techprofielen

| # | Platform | Aanmelden | Wat | Menselijk | Dofollow |
|---|---|---|---|---|---|
| B1 | GitHub-organisatie | https://github.com/SignumCore (bestaat, jij bent admin) | beschrijving/website/e-mail/locatie: gezet via gh; profiel-README-repo `.github` en repo `brand`: via gh | avatar uploaden: Settings → Profile → Upload (`avatar-wit-500.png`); social preview per repo (`github-social-preview-1280x640.png`) | nofollow |
| B2 | Dev.to | https://dev.to/enter?state=new-user | organisatieprofiel + syndicatie van blogartikelen met `canonical_url` naar signumcore.io | account (via GitHub) | nofollow, canonical telt |
| B3 | Medium | https://medium.com/m/signin | publicatie "SignumCore" + import van blog met canonical | account | nofollow, canonical telt |
| B4 | Hashnode | https://hashnode.com/onboard | blog op subdomein; `@signumcore` gaf HTTP 200 (controleren of bezet) | account | canonical |
| B5 | StackShare | https://stackshare.io/signup | bedrijfsstack (Next.js, Vercel, Postgres, GTM, GA4) | account | verifiëren |
| B6 | Hacker News | https://news.ycombinator.com/login | profiel met `about` + URL; later "Show HN" voor een tool | account | nofollow |
| B7 | Indie Hackers | https://www.indiehackers.com/sign-up | productprofiel | account | nofollow |
| B8 | Gravatar | https://gravatar.com | avatar + profiel aan info@signumcore.io (geverifieerde links) | account (WordPress.com) | verifiëren |
| B9 | About.me | https://about.me/signup | profielpagina met link | account | nofollow |

## C. SaaS- en productgidsen (adres-vrij) — 2 à 3 per week spreiden

| # | Gids | Aanmelden | Product/categorie | Menselijk | Dofollow |
|---|---|---|---|---|---|
| C1 | Product Hunt | https://www.producthunt.com | maker-profiel + productpagina (nog niet lanceren) | account | dofollow bij feature |
| C2 | Gartner Digital Markets (Capterra + GetApp + Software Advice) | https://www.capterra.com/vendors/sign-up | Marketing Analytics · Tag Management · PPC | vendor-account, telefonische check mogelijk | dofollow (DR ~93) |
| C3 | G2 | https://www.g2.com/products/new | Marketing Analytics · Tag Management | account, e-mail op bedrijfsdomein | profiel-elementen dofollow |
| C4 | SaaSworthy | https://www.saasworthy.com/ (List your product) | Marketing Analytics | formulier | verifiëren |
| C5 | SaaSHub | https://www.saashub.com/submit-service | Marketing | formulier | verifiëren |
| C6 | AlternativeTo | https://alternativeto.net/manage/new-item/ | "alternatief voor Trackingplan / Elevar" | account | nofollow |
| C7 | Crozdesk | https://vendor.crozdesk.com/ | Web Analytics | vendor-account | verifiëren |
| C8 | BetaList | https://betalist.com/submit | private beta (past bij de fase) | account; wachtrij of betaald versnellen | dofollow |
| C9 | Crunchbase | https://www.crunchbase.com/add-new | organisatie SignumCore | persoonlijk account | nofollow, hoge autoriteit |
| C10 | Wellfound | https://wellfound.com/company/new | bedrijfsprofiel | account | nofollow |
| C11 | F6S | https://www.f6s.com/ | startupprofiel | account | nofollow |
| C12 | Techleap Finder (NL) | https://finder.techleap.nl | NL-startupdatabase | claim via formulier | verifiëren |
| C13 | Appwiki.nl | https://appwiki.nl | NL bedrijfssoftware | leveranciersaanmelding | NL-relevant |
| C14 | Softwarevergelijken.nl | https://www.softwarevergelijken.nl | NL | aanmelding | verifiëren |
| C15 | Trustpilot (gratis bedrijfsprofiel) | https://business.trustpilot.com | domein claimen | account, domeinverificatie | nofollow |

## D. Bureaugidsen (past bij KVK-activiteit 73110 en "adverteren uitbesteden")

| # | Gids | Aanmelden | Menselijk | Dofollow |
|---|---|---|---|---|
| D1 | Sortlist (NL/EU) | https://www.sortlist.nl/agency/signup | account; profiel wordt gescreend | nofollow |
| D2 | Clutch | https://clutch.co/get-listed | account; reviews via klanten | nofollow |
| D3 | GoodFirms | https://www.goodfirms.co/get-listed | account | verifiëren |
| D4 | DesignRush | https://www.designrush.com/agency/register | account | verifiëren |

## E. Ouderwetse linkpagina's en NL-gidsen zonder adres

| # | Plek | Hoe | Opmerking |
|---|---|---|---|
| E1 | Startpagina-dochters | zoek de dochterpagina's "google-ads", "adverteren", "online-marketing", "webdesign" op startpagina.nl; "link aanmelden" per pagina | gratis, wachttijd, dofollow wisselt |
| E2 | Jouwpagina.nl / Uwpagina.nl-familie | zelfde werkwijze | controleren of nog actief |
| E3 | Bedrijvenpagina.nl | https://www.bedrijvenpagina.nl | vraagt meestal plaats, niet altijd straat |
| E4 | Quora (NL-vragen over Google Ads) | profiel met link; antwoorden, geen spam | nofollow, doorklik |

## F. Geparkeerd tot adres + telefoon bestaan (NAP-dossier)

Google Bedrijfsprofiel (voor dit bedrijf niet beschikbaar zonder bezoekadres; servicegebied-variant alleen bij echte klantbezoeken), Bing Places, Apple Business Connect, Telefoonboek.nl, Openingstijden.nl, Cylex, Hotfrog, Yelp, Foursquare, Kiyoh/Klantenvertellen (betaald). Niets hiervan met een halve NAP aanmaken: een inconsistent adres of telefoonnummer vergiftigt alle vermeldingen.

## G. On-site (website-PR, doe ik)

1. `lib/schema.ts` → `sameAs` uitbreiden met elk aangemaakt profiel (nu: LinkedIn-oprichter + GitHub-organisatie; de rest zodra de URL bestaat).
2. Footer: `rel="me"`-links naar Mastodon en de belangrijkste profielen (Mastodon-verificatie).
3. Pinterest-metatag en eventuele domeinverificaties (X, Bluesky via DNS).
4. Logo-URL voor gidsen: `https://signumcore.io/logo-512.png` is nog het oude teal-logo; vervangen door het monogram uit deze kit.

## H. Volgorde

1. **Vandaag (jij, menselijk):** A1, A3, A4/A5, A6, A7, A12, B1-avatar. Alles met `signumcore`.
2. **Daarna (ik, Chrome):** velden vullen, beelden uploaden, eerste post plaatsen, URL's loggen.
3. **Week 1–3 (2 à 3 per week):** C1 (profiel, geen launch), C2, C3, C9, B2, B8; dan C4–C8, D1, C12–C15.
4. **Na elke ronde:** website-PR met nieuwe `sameAs`-URL's.

## I. Log

| Datum | Platform | Handle/URL | Status | Dofollow gecontroleerd |
|---|---|---|---|---|
| 2026-09-09 | GitHub-organisatie | https://github.com/SignumCore | beschrijving, website, e-mail, locatie gezet via gh; avatar nog uploaden | nofollow |
| 2026-09-10 | LinkedIn bedrijfspagina | https://www.linkedin.com/company/signumcore | compleet: logo, cover, tagline, overzicht, branche, 0-1, eigen bedrijf, 2025, 10 specialismen, Wageningen (zonder straat) | nofollow |
| 2026-09-10 | GitHub-organisatie | https://github.com/SignumCore | avatar geüpload (monogram) | nofollow |
