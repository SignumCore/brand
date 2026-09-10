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
