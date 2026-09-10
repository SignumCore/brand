# SignumCore social-kit

Alle profielbeelden en covers op exacte pixelmaat, in de huisstijl van signumcore.io (wit vlak, Switzer-kop, blauw accentblok `#2B47D6`, lime merkpunt `#C9F227`, IBM Plex Mono-bijschriften). Gerenderd met `build/render.mjs` (Playwright); opnieuw draaien: `cd build && node render.mjs`.

## Bestanden in `uit/`

| Bestand | Maat | Voor |
|---|---|---|
| avatar-wit-{1024,800,500,400,320,256,240,200,180,128}.png | vierkant | profielfoto overal (wit = standaard) |
| avatar-blauw-{1024,500,400,256}.png | vierkant | alternatief waar wit wegvalt |
| avatar-zwart-{1024,500,400}.png | vierkant | alternatief donker |
| avatar-wit-rond-preview-400.png | rond | controle hoe het monogram in een cirkel valt |
| woordmerk-zwart-transparant-2400x600.png | transparant | horizontaal logo voor gidsen |
| woordmerk-wit-transparant-2400x600.png | transparant | idem, op donker |
| og-linkvoorbeeld-1200x630.png | 1200×630 | statisch linkvoorbeeld voor gidsen die een beeld vragen |
| github-social-preview-1280x640.png | 1280×640 | GitHub repo social preview |
| producthunt-galerij-1270x760.png | 1270×760 | Product Hunt galerij (ondernemers) |
| producthunt-galerij-bureaus-1270x760.png | 1270×760 | Product Hunt galerij (bureaus) |
| instagram-post-1080x1080.png | 1080×1080 | eerste Instagram/Threads/LinkedIn-post |
| instagram-story-1080x1920.png | 1080×1920 | story; boven en onder 250px vrijgehouden |
| facebook-paginacover-1640x624.png | 1640×624 | Facebook; mobiel snijdt zijkanten af, tekst staat in de veilige kern |
| youtube-kanaalbanner-2560x1440.png | 2560×1440 | YouTube; alles in de 1546×423-kern |
| linkedin-bedrijfscover-1128x191.png | 1128×191 | LinkedIn bedrijfspagina |
| linkedin-persoonlijk-cover-1584x396.png | 1584×396 | LinkedIn-profiel Mink; links 400px vrij voor de profielfoto |
| x-header-1500x500.png | 1500×500 | X; linksonder vrij voor de avatar |
| bluesky-mastodon-banner-1500x500.png | 1500×500 | Bluesky en Mastodon |
| reddit-profielbanner-1920x384.png | 1920×384 | Reddit u/-profiel |
| reddit-communitybanner-4000x256.png | 4000×256 | Reddit r/-community |

Teksten per platform: `profiel-teksten.md`. Waar aanmelden en in welke volgorde: `vindplaatsen.md`.
