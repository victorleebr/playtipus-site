# playtipus-site

The one-page website for **Playtipus** at <https://playtipusgame.com>.
It is plain HTML, CSS and a little JavaScript, with no build step. GitHub Pages hosts it straight from the `main` branch, and every push to `main` goes live within a minute or two.

```
index.html            the page (all text lives here)
css/style.css         colours, fonts, layout
js/main.js            sign-up form messages, footer year
img/                  hero, feature images, share image
fonts/                Pixelify Sans (pixel headings, OFL licence)
favicon.ico, favicon-32.png, apple-touch-icon.png
CNAME                 the custom domain for GitHub Pages (added back once DNS is set up)
```

## Changing the text

Open `index.html` and edit the words between the tags. Everything you are likely to change is marked with an `<!-- EDIT: ... -->` comment:

- **Pitch:** the line under the logo.
- **Features:** each `<article class="feature">` block has an `<h3>` title and a `<p>` paragraph.
- **Steam button:** hidden until the store page exists. There are two (hero and sign-up box). In each one, put the store URL in `href="..."` and delete the word `hidden`.
- **Contact email:** the `mailto:` link in the footer (it appears twice on that line).
- **AI disclosure:** commented out in the footer for now. Write the text and remove the `<!--` and `-->` around that line.
- **Sharing preview:** the `og:title` and `og:description` lines in `<head>`. Discord and X cache previews, so changes can take a while to show up there.

To preview locally, open `index.html` in a browser, or run `python -m http.server 8000` in this folder and open <http://localhost:8000>.

## Changing images

Replace a file in `img/`, keeping the same name. If the new image or video has a different size, update `width="..."` and `height="..."` on its `<img>` or `<video>` tag in `index.html`. The page scales images itself, so these numbers only reserve space and keep the layout from jumping.

Pixel art rules: export at 1x game pixels, or a clean whole-number multiple. Never smooth-scale. The CSS keeps edges crisp. Try to keep each GIF under about 2 MB, since mobile visitors download it.

| File | What it shows | Size | Status |
|---|---|---|---|
| `img/hero-farm.mp4` + `hero-farm-poster.jpg` | The farm, panning to the race track (15 s loop) | 960 x 404 | Done (from `full_farm_video_long.mp4`) |
| `img/taskbar.mp4` + `taskbar-poster.jpg` | The real Windows taskbar with an expedition walking along it, full width under the hero | 1916 x 90 | Done (from `videoexpeditionaskbar.mp4`) |
| `img/feature-expeditions.mp4` + poster | Close-up of a pet walking above the search box | 516 x 348 (3x) | Done (from `walking_expedition.mp4`) |
| `img/feature-breeding.gif` | Two parents, then the egg or hatch, then the hybrid with mixed parts | **480 x 270**, 1x game pixels | Placeholder |
| `img/feature-farm.png` | The collapsed farm strip | 440 x 246, 1x | Done (night strip) |
| `img/feature-coats.gif` | A pet cycling through coats | **480 x 270**, 1x | Placeholder (coats aren't in the game yet) |
| `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` | The game icon | Send a **32 x 32** transparent PNG; **180 x 180** for the Apple icon | Temporary: a striped pet cropped from an expedition GIF |
| `img/og-image.png` | The preview card on Discord, X, Slack | 1200 x 630 PNG | Done (farm banner and logo) |
| `img/footer-night.png` | The night scenery strip above the footer | 2280 x 240 | Done |

Videos are MP4 (H.264, no sound) because they are many times smaller than GIFs. To make one from a recording, with [ffmpeg](https://ffmpeg.org):

```
ffmpeg -i recording.mp4 -t 15 -an -vf "scale=960:-2:flags=area,format=yuv420p" -c:v libx264 -crf 22 -movflags +faststart img/hero-farm.mp4
ffmpeg -i recording.mp4 -frames:v 1 -vf "scale=960:-2:flags=area" img/hero-farm-poster.jpg
```

Use `flags=neighbor` and a whole-number size (2x, 3x) when scaling small pixel-art clips **up**.

## Email sign-up

The form posts to Buttondown (newsletter `playtipusgame`) and opens Buttondown in a new tab. Buttondown handles CAPTCHA and sends the double opt-in confirmation email. Subscribers, the confirmation email text and newsletters are all managed at <https://buttondown.com>.

## Hosting

GitHub Pages, from the `main` branch and the repository root, with the custom domain set in `CNAME`. DNS for `playtipusgame.com` is managed at Cloudflare:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | victorleebr.github.io |

DNS for the domain is on Cloudflare. Set all of these records to **DNS only** (grey cloud, not proxied), or GitHub can't issue the certificate.

HTTPS is a free certificate from GitHub, turned on with "Enforce HTTPS" in the repository's Settings > Pages.
