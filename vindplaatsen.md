# SignumCore — vindplaatsen: social, profielen, gidsen en linkpagina's

Doel: overal aanwezig zijn waar dat gratis kan, voor (a) linkwaarde en merkvermeldingen, (b) ouderwetse doorklik-vindbaarheid, (c) AI-citaties. Basis: `docs/LISTINGS-DOSSIER-2026-07.md` (adres-vrij) + `docs/NAP-CITATIES-DOSSIER-2026-07.md` (wacht op adres/telefoon). Teksten en beelden: `profiel-teksten.md` en `uit/`.

Kolom "Menselijk": wat alleen jij kunt (account aanmaken, e-mail/sms-verificatie, captcha, akkoord op voorwaarden). Daarna kan ik met Chrome de velden invullen en beelden uploaden. Kolom "Dofollow" is een verwachting; per gids na plaatsing controleren (dossier-regel 3). Nofollow is nog steeds nuttig voor vermeldingen en AI-citaties.

## A. Social media (profiel + cover) — allemaal in één ronde

| # | Platform | Aanmelden | Handle | Beelden (uit `uit/`) | Menselijk | Dofollow |
|---|---|---|---|---|---|---|
| A1 | LinkedIn bedrijfspagina | LIVE: https://www.linkedin.com/company/signumcore | /company/signumcore | avatar-wit-400 · linkedin-bedrijfscover-1128x191 | inloggen als Mink, pagina aanmaken, verificatie | nofollow |
| A2 | LinkedIn servicepagina (onder A1) | Pagina → Services toevoegen | — | — | **gedaan 10 sep**: 5 diensten (Adverteren, Marketingstrategie, Digitale marketing, Zoekmachinemarketing, Zoekmachineoptimalisatie), beschrijving, prijsvorm "Contact voor prijzen" | nofollow |
| A3 | X | https://x.com/i/flow/signup | @signumcore_io (eerste keus bezet) | avatar-wit-400 · x-header-1500x500 | account, e-mail/sms, captcha | nofollow |
| A4 | Instagram (zakelijk) | LIVE: https://www.instagram.com/signumcore_io/ | @signumcore_io (eerste keus bezet) | avatar-wit-320 · instagram-post-1080x1080 | account, verificatie, omzetten naar zakelijk | nofollow |
| A5 | Threads | via A4, threads.com | @signumcore_io | avatar-wit-320 | inloggen met Instagram | nofollow |
| A6 | Facebook-pagina | https://www.facebook.com/pages/create | @signumcore | avatar-wit-500 · facebook-paginacover-1640x624 | persoonlijk account nodig, pagina aanmaken | nofollow |
| A7 | YouTube-kanaal | LIVE: https://www.youtube.com/@signumcore | @signumcore | avatar-wit-800 · youtube-kanaalbanner-2560x1440 | Google-account, merkaccount kiezen | nofollow |
| A8 | TikTok | https://www.tiktok.com/signup | @signumcore | avatar-wit-200 | account, verificatie; zakelijk account voor weblink | nofollow |
| A9 | Pinterest (zakelijk) | https://www.pinterest.com/business/create/ | @signumcore | avatar-wit-400 | account; site claimen via metatag (website-PR) | nofollow |
| A10 | Bluesky | https://bsky.app | @signumcore.io (domein als handle) | avatar-wit-1024 · bluesky-mastodon-banner-1500x500 | account; daarna DNS TXT `_atproto` op Vercel DNS | nofollow |
| A11 | Mastodon | https://mastodon.social/auth/sign_up (of mastodon.nl) | @signumcore | avatar-wit-400 · bluesky-mastodon-banner-1500x500 | account, e-mailverificatie | rel=me-verificatie: vinkje bij website (website-PR) |
| A12 | Reddit | LIVE: https://www.reddit.com/user/SignumCoreio/ | u/SignumCoreio (eerste én tweede keus bezet) | avatar-wit-256 · reddit-profielbanner-1920x384 | account, e-mail; eventueel r/signumcore (reddit-communitybanner-4000x256) | nofollow |

Regels: (1) overal `signumcore`; is dat bezet, dan `signumcore_io`, daarna `signumcoreio`, en dat noteren in de log onderaan. (2) Op elk profiel de site-URL en waar het kan e-mail. (3) Eerste post per platform staat in `profiel-teksten.md` §6.

## B. Ontwikkelaars- en techprofielen — routes nagemeten op 10 sep 2026

Dit is het **tweede publiek**: marketeers en techneuten. Ze zijn niet de doelgroep (zie `content-kalender.md` §1), maar ze delen het onderzoek en ze citeren de blog. Alles hier draagt de EN-teksten uit `profiel-teksten.md` §4.

| # | Platform | Werkende route | Wat het vraagt | Waarde |
|---|---|---|---|---|
| B1 | GitHub-organisatie | https://github.com/SignumCore | **klaar**: beschrijving, website naar /webinar, e-mail, locatie, monogram-avatar, vier social links, profiel-README (5c85c99) | nofollow |
| B2 | Dev.to | https://dev.to/enter | inloggen via GitHub, Google, Apple, Facebook of X — geen e-mailregistratie meer. Daarna blogartikelen syndiceren mét `canonical_url` naar signumcore.io | nofollow, canonical telt |
| B3 | Medium | https://medium.com/m/signin | account; publicatie "SignumCore" en import met canonical | nofollow, canonical telt |
| B4 | Hashnode | https://hashnode.com/onboard | account; blog op subdomein | canonical |
| B5 | StackShare | https://stackshare.io → "Sign in" | account. **Let op**: `stackshare.io/signup` is géén registratiepagina maar de productpagina van een tool die "SignUp" heet | verifiëren |
| B6 | Hacker News | https://news.ycombinator.com/login | account; profiel met `about` en URL. Later eventueel een "Show HN" voor een gratis tool | nofollow |
| B7 | Indie Hackers | https://www.indiehackers.com/sign-up | account; productprofiel | nofollow |
| B8 | Gravatar | https://gravatar.com | account (WordPress.com); avatar en geverifieerde links aan info@signumcore.io | verifiëren |
| B9 | About.me | https://about.me/signup | account; profielpagina met link | nofollow |

Alle negen behalve B1 vragen een account of een OAuth-koppeling, dus dat zijn stappen voor Mink.

## C. SaaS- en productgidsen — routes nagemeten op 10 sep 2026

De URL's uit het juli-dossier zijn deels verlopen. Hieronder staat wat er op 10 september werkelijk opende, gemeten in een echte browser. Een 403 bij `curl` is meestal een botblokkade en geen dode pagina; die zijn per regel apart nagekeken.

| # | Gids | Werkende route | Wat het vraagt | Waarde |
|---|---|---|---|---|
| C1 | Product Hunt | https://www.producthunt.com | account; eerst maker-profiel en productpagina, nog niet lanceren | dofollow bij feature |
| C2 | **Capterra + GetApp + Software Advice** | https://app.g2digitalmarkets.com/get-listed/start | kort formulier: zakelijk e-mailadres, productnaam, product-URL. **Eén aanvraag dekt alle drie** — Gartner Digital Markets loopt nu via G2. De oude `capterra.com/vendors/sign-up` geeft 404 | hoogste van de lijst |
| C3 | G2 (reviews) | https://www.g2.com, via "For Vendors" | account op bedrijfsdomein | profiel-elementen dofollow |
| C4 | SaaSworthy | https://www.saasworthy.com, via "List your product" | formulier | verifiëren na plaatsing |
| C5 | SaaSHub | https://www.saashub.com/submit | gratis, vraagt Register of Login. De dossier-URL `/submit-service` geeft 404 | verifiëren |
| C6 | AlternativeTo | via "Sign In" en dan een nieuw item; `alternativeto.net/manage/new-item/` geeft **404** | account | nofollow |
| C7 | Crozdesk | https://vendor.crozdesk.com/ | vendor-account | verifiëren |
| C8 | BetaList | https://betalist.com/submit | account; wachtrij of betaald versnellen | dofollow |
| C9 | Crunchbase | https://www.crunchbase.com/add-new leidt naar inloggen | account verplicht vóór een profiel | nofollow, hoge autoriteit |
| C10 | Wellfound | https://wellfound.com/company/new | account | nofollow |
| C11 | F6S | https://www.f6s.com/ | account | nofollow |
| C12 | Techleap Finder (NL) | https://finder.techleap.nl | opent; claim via het formulier | NL-relevant |
| C13 | Appwiki.nl | https://appwiki.nl | leveranciersaanmelding | NL-relevant |
| C14 | ~~Softwarevergelijken.nl~~ | **site ligt eruit**: "Deze website is tijdelijk in onderhoud" | — | overslaan tot hij terug is |
| C15 | Trustpilot (gratis profiel) | https://business.trustpilot.com | account, domeinverificatie | nofollow |

### Klaar om te plakken — C2, de hoogste waarde

Op https://app.g2digitalmarkets.com/get-listed/start:

- Business Email: `info@signumcore.io`
- Product Name: `SignumCore`
- Product Website: `https://signumcore.io`
- Laat het vinkje "I want to be contacted to learn about brand building and lead generation" **uit**: dat is een verkoopgesprek, geen vermelding.

Beschrijving en categorie volgen in een tweede stap. Gebruik `profiel-teksten.md` §4 (EN) en de categorie Marketing Analytics of PPC.

## D. Bureaugidsen — routes nagemeten op 10 sep 2026

SignumCore staat hier als uitvoerder (KVK 73110, "adverteren uitbesteden"), niet als leverancier vóór bureaus. Dat onderscheid is sinds de versmalling belangrijk: de teksten uit `profiel-teksten.md` §3 en §4 passen, de oude bureau-teksten niet.

| # | Gids | Werkende route | Wat het vraagt | Waarde |
|---|---|---|---|---|
| D1 | Sortlist | https://www.sortlist.com/join → kies de kant "provider" | account. De dossier-URL `sortlist.nl/agency/signup` geeft **404** ("Dit bureau bestaat niet in ons directory-systeem") | nofollow |
| D2 | Clutch | https://clutch.co/get-listed | account; reviews komen van klanten, die zijn er nog niet | nofollow |
| D3 | GoodFirms | https://www.goodfirms.co/get-listed | account | verifiëren na plaatsing |
| D4 | DesignRush | https://www.designrush.com/submit/agency | account. De dossier-URL `/agency/register` geeft **404** | verifiëren |

Let op bij alle vier: ze vragen om klantreferenties en reviews. Die zijn er niet, en verzinnen mag niet (zie de eerlijkheidsregel). Vul in wat waar is en laat de rest leeg.

## E. Ouderwetse linkpagina's — grotendeels vervallen

Dit was de zwakste categorie van het juli-dossier en dat blijkt te kloppen.

| # | Plek | Stand op 10 sep | Advies |
|---|---|---|---|
| E1 | Startpagina-dochters | De dochterpagina's bestaan nog (`online-marketing`, `marketing`, `reclame`, `seo`, `webdesign`, `internetmarketing`, `zoekmachinemarketing` op `.startpagina.nl`), maar `adverteren.startpagina.nl` bestaat niet en de enige aanmeldknop wijst naar `panel.startpagina.nl` — **die leidt zelf naar "thema-not-found"**. Er is geen werkende route meer om een link aan te melden | overslaan |
| E2 | Jouwpagina.nl | Leeft; heeft "Submit link" en "Exchange link" in de navigatie | lage waarde, maar gratis en werkt |
| E3 | Bedrijvenpagina.nl | Leeft; NL-bedrijvengids met categorieën, vraagt inloggen | account nodig; categorie Advies & Consultancy |
| E4 | Quora | Leeft | profiel met link, dán antwoorden. Nooit andersom |

Waarde-oordeel: E1 is dood, E2 is een linkfarm met weinig gewicht, E3 is een gewone NL-gids. Zet hier weinig tijd in; C2 (G2 Digital Markets) is meer waard dan E1 tot en met E4 samen.

## F. Geparkeerd tot adres + telefoon bestaan (NAP-dossier)

Google Bedrijfsprofiel (voor dit bedrijf niet beschikbaar zonder bezoekadres; servicegebied-variant alleen bij echte klantbezoeken), Bing Places, Apple Business Connect, Telefoonboek.nl, Openingstijden.nl, Cylex, Hotfrog, Yelp, Foursquare, Kiyoh/Klantenvertellen (betaald). Niets hiervan met een halve NAP aanmaken: een inconsistent adres of telefoonnummer vergiftigt alle vermeldingen.

## G. On-site (website-PR, doe ik)

1. ~~`lib/schema.ts` → `sameAs`~~ **klaar**: LinkedIn, YouTube, Instagram, Reddit, GitHub en de oprichter staan live op prod (PR #563, gemerged 10 sep).
2. Footer: `rel="me"`-links naar Mastodon — wacht tot dat account bestaat.
3. Pinterest-metatag en domeinverificaties (Bluesky via DNS `_atproto`) — wacht op die accounts.
4. **Open besluit voor Mink.** `schema.logo` wijst nog naar `https://signumcore.io/logo-512.png`: het oude teal-logo van 87 kB. Dát bestand trekken gidsen en AI-assistenten. Het monogram staat sinds PR #563 live op `https://signumcore.io/brand/signumcore-monogram-512.png` (14 kB). De wissel is een merkkeuze, dus niet eigenmachtig gedaan.
5. **Open punt.** `llms.txt` sluit af met "Laatste update: augustus 2026" terwijl de inhoud op 10 september is herschreven. Dat bestand is precies wat AI-assistenten citeren.

## H. Volgorde

1. **Vandaag (jij, menselijk):** A1, A3, A4/A5, A6, A7, A12, B1-avatar. Alles met `signumcore`.
2. **Daarna (ik, Chrome):** velden vullen, beelden uploaden, eerste post plaatsen, URL's loggen.
3. **Week 1–3 (2 à 3 per week):** C1 (profiel, geen launch), C2, C3, C9, B2, B8; dan C4–C8, D1, C12–C15.
4. **Na elke ronde:** website-PR met nieuwe `sameAs`-URL's.

## I. Log

**10 sep, tweede helft — propositie versmald.** Twee merges op signum-website hebben alles wat hieronder staat veranderd: #565 haalde de bureau-wereld van de site (45 pagina's, 308 naar de home) en #564 verving de wachtlijst door `/webinar`. Alle profielen zijn daarop herschreven. Zie `profiel-teksten.md` §0.

| Datum | Platform | Handle/URL | Status | Dofollow |
|---|---|---|---|---|
| 2026-09-10 | LinkedIn bedrijfspagina | https://www.linkedin.com/company/signumcore | **bij**: tagline, overzicht (sleutel + eerlijkheid + termijn), specialismen zonder bureau-termen, knop "Aanmelden" → /webinar, nieuwe cover | nofollow |
| 2026-09-10 | YouTube | https://www.youtube.com/@signumcore | **bij**: beschrijving, banner, link "Aanmelden voor de sessie" → /webinar | nofollow |
| 2026-09-10 | GitHub-organisatie | https://github.com/SignumCore | **bij**: beschrijving (160), website → /webinar, profiel-README herschreven (5c85c99); brand-repo 5171993 | nofollow |
| 2026-09-10 | Instagram | https://www.instagram.com/signumcore_io/ | **bij**: bio met /webinar. Handle `signumcore` bezet | nofollow |
| 2026-09-10 | Reddit | https://www.reddit.com/user/SignumCoreio/ | **bij**: About-beschrijving zonder bureau-taal. Avatar en banner blijven handwerk | nofollow |
| 2026-09-10 | X | in aanvraag | SMS-code + naam + handle resteren; handle wordt `signumcore_io` (`signumcore` is een beschermd account uit 2011) | — |
| 2026-09-10 | Threads | — | één klik via threads.com ("Join with Instagram — signumcore_io"); die knop is het akkoord op de voorwaarden, dus die zet Mink zelf | — |
| 2026-09-10 | Facebook-pagina | — | **geblokkeerd**: "We noticed suspicious activity — Finish SMS verification on mobile app before creating a new page." Vier pogingen, ook na installatie van de Meta-app. Formulier stond compleet (naam, categorie Marketingbureau, bio). Mink: SMS-verificatie ín de app afronden | — |

### Herhaalde pogingen op 10 sep (avond)

- **Facebook** — vijfde poging, formulier compleet, zelfde blokkade: "We noticed suspicious activity — Finish SMS verification on mobile app before creating a new page." Er is geen omweg via Business Suite. Wacht op Minks SMS-verificatie in de Meta-app.
- **X** — `x.com/signumcore_io` geeft "This account doesn't exist": de registratie is niet afgerond. Wacht op de SMS-code.
- **Threads** — `threads.com/@signumcore_io` leidt naar de aanmeldpagina. De knop "Use your Instagram account" is tegelijk het akkoord op de voorwaarden; die zet Mink.
- **Reddit avatar en banner** — nu preciezer gemeten dan eerder: het `input[type=file]` bestáát wél (accept `image/x-png,image/jpeg,image/png`), maar pas nadat de Banner-dialoog geopend is, en het staat niet in de toegankelijkheidsboom. `find` vindt het daardoor niet en `file_upload` kan er geen ref voor krijgen. Blijft handwerk.

### Twee dingen op de site zelf die hierop wachten

- **`schema.logo` wijst nog naar `/logo-512.png`** — het oude teal-logo (87 kB). Gidsen en AI-assistenten trekken juist dát bestand. Het monogram staat sinds PR #563 live op `/brand/signumcore-monogram-512.png` (14 kB). De wissel is een merkbesluit van Mink, dus niet eigenmachtig gedaan.
- **`llms.txt` sluit af met "Laatste update: augustus 2026"** terwijl de inhoud op 10 september is herschreven. Dat bestand is precies wat AI-assistenten citeren.

### Vallen bij het bijwerken

- **LinkedIn laadt het Overzicht-veld leeg.** Op de tab Details staat `Overzicht` op 0/2.000 terwijl de pagina publiek wél een tekst toont. Opslaan zonder het veld opnieuw te vullen wist de tekst. Vul hem dus altijd opnieuw vóór je op die tab opslaat.
- **Navigeer nooit direct na Opslaan.** LinkedIn toont daarna een "deel je wijziging"-dialoog; wie meteen wegnavigeert krijgt "Leave site?" en verliest de opslag. Eerst "Nee, bedankt", dan pas weg.
- **Specialisme-chips verspringen.** Na elke verwijdering herschikt de rij. Verwijder er één per keer en maak tussendoor een schermafdruk; anders raak je de verkeerde kwijt (dat gebeurde met "Conversiemeting").
- **YouTube Studio gebruikt contenteditable-divs.** `form_input` weigert ze ("Element type DIV is not a supported form input"): klik erin, `cmd+a`, dan typen. Publiceren vraagt soms twee klikken; de knoppen worden grijs als het gelukt is.
- **Reddit-dialoog: klik in het veld, niet via een ref.** Een `find` op "About description textarea" leverde een verborgen token-veld op; het echte veld bereik je met een klik op de zichtbare tekst.

### Oudere regels (vóór de versmalling)


| Datum | Platform | Handle/URL | Status | Dofollow gecontroleerd |
|---|---|---|---|---|
| 2026-09-09 | GitHub-organisatie | https://github.com/SignumCore | beschrijving, website, e-mail, locatie, monogram-avatar; vier social links (LinkedIn, YouTube, Instagram, Reddit); repo `brand` heeft social preview | nofollow |
| 2026-09-10 | LinkedIn bedrijfspagina | https://www.linkedin.com/company/signumcore | compleet: logo, cover, tagline, overzicht, branche, 0-1 medewerkers, eigen bedrijf, opgericht 2025, 10 specialismen, Wageningen zonder straat, knop naar /wachtlijst | nofollow |
| 2026-09-10 | YouTube | https://www.youtube.com/@signumcore | kanaal live: banner, monogram, beschrijving (949/1000), 4 links (site, wachtlijst, LinkedIn, GitHub), contact-e-mail | nofollow |
| 2026-09-10 | Instagram | https://www.instagram.com/signumcore_io/ | account live: naam SignumCore, monogram, bio met wachtlijst-link. Handle `signumcore` bezet, tweede keus. Website-veld kan alleen in de mobiele app, daarom staat de URL in de bio | nofollow |
| 2026-09-10 | Reddit | https://www.reddit.com/user/SignumCoreio/ | account live: displaynaam SignumCore, beschrijving, twee social links (website, LinkedIn). Handle `signumcore` en `signumcore_io` beide bezet, **derde keus**. Avatar en banner blijven handwerk, zie hieronder | nofollow |
| 2026-09-10 | Threads | — | staat klaar op één klik: threads.com toont "Join with Instagram — signumcore_io". Die knop is tegelijk het akkoord op de voorwaarden, dus die zet Mink zelf | nofollow |
| 2026-09-10 | X | https://x.com/SignumCoreio | account live: naam SignumCore, monogram, header, bio, locatie Nederland, wachtlijst-link. Registratie liep via telefoon (e-mailroute bestaat niet meer). **Derde keus**: `signumcore` is bezet door een beschermd account uit juni 2011, `signumcore_io` was ook niet vrij | nofollow |
| 2026-09-10 | Facebook-pagina | — | geblokkeerd: "We noticed suspicious activity: Finish SMS verification on mobile app before creating a new page". Drie pogingen, identieke melding, ook nadat de Meta-app was geïnstalleerd: de verificatie moet ín de app worden afgerond, installeren alleen is niet genoeg. Business Suite biedt geen uitweg | — |

### Handle-afwijkingen (NAP-regel)

`signumcore` is lang niet overal vrij. Vastgelegde afwijkingen:

- **Instagram**: `signumcore_io` (eerste keus bezet)
- **Reddit**: `SignumCoreio` (eerste en tweede keus bezet)
- **X**: `SignumCoreio` (eerste en tweede keus bezet)

Noteer elke verdere afwijking hier, zodat `sameAs` en de profielen niet uit de pas lopen.

### GitHub-organisatie heeft maar vier plekken

De org-instellingen bieden precies vier velden voor social links; die zitten vol met LinkedIn, YouTube, Instagram en Reddit. X past er niet meer bij. Dat is geen verlies: `lib/schema.ts` op de website draagt álle profielen in `sameAs` en dat is de bron die zoekmachines lezen.

### Wat een bestandskiezer blokkeert

Reddit (avatar, banner) heeft **geen** `input type=file` in de DOM, ook niet in shadow roots — gemeten met een recursieve `querySelectorAll`-walk over alle shadowRoots, resultaat lege lijst. Reddit maakt het veld pas aan bij de klik en opent direct een systeem-bestandskiezer. Die twee blijven dus handwerk. Uploads die wél lukken via een bereikbaar veld: LinkedIn (logo, cover), YouTube (banner, foto), Instagram (avatar), GitHub (org-avatar, repo social preview).
