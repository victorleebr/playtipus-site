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
CNAME                 the custom domain for GitHub Pages (do not delete)
```

## Changing the text

Open `index.html` and edit the words between the tags. Everything you are likely to change is marked with an `<!-- EDIT: ... -->` comment:

- **Pitch:** the line under the logo.
- **Features:** each `<article class="feature">` block has an `<h3>` title and a `<p>` paragraph.
- **Steam button:** there are two (hero and sign-up box). In each one, put the store URL in `href="..."` and delete the word `hidden`.
- **Contact email:** replace both copies of `CONTACT_EMAIL` in the footer.
- **AI disclosure:** replace `AI_DISCLOSURE_TEXT` in the footer.
- **Sharing preview:** the `og:title` and `og:description` lines in `<head>`. Discord and X cache previews, so changes can take a while to show up there.

To preview locally, run `python -m http.server 8000` in this folder and open <http://localhost:8000>. Opening the file by double-clicking won't work, because the paths start with `/`.

## Changing images

Replace a file in `img/`, keeping the same name. If the new image has a different size, update `width="..."` and `height="..."` on its `<img>` tag in `index.html`. The page scales images itself, so these numbers only reserve space and keep the layout from jumping.

Pixel art rules: export at 1x game pixels, or a clean whole-number multiple. Never smooth-scale. The CSS keeps edges crisp. Try to keep each GIF under about 2 MB, since mobile visitors download it.

| File | What it shows | Size | Status |
|---|---|---|---|
| `img/hero.gif` | The farm docked on a **real Windows taskbar**, with the Start button and a few app icons visible, so people instantly see where the game lives. A loop of 8 to 15 s. | **880 x 400** screen pixels (any height from 250 to 500 works), under 3 MB | Placeholder: the farm strip without the taskbar (440 x 246, shown at 2x) |
| `img/feature-breeding.gif` | Two parents, then the egg or hatch, then the hybrid with mixed parts | **480 x 270**, 1x game pixels | Placeholder |
| `img/feature-farm.png` | The farm strip (a still or a short GIF) | **440 x 246**, 1x | Done (night strip). Rename it if you swap in a GIF |
| `img/feature-expeditions.gif` | A party walking the expedition band | **640 x 70**, 1x | Done (downscaled from the 1280 x 140 recording) |
| `img/feature-coats.gif` | A pet cycling through coats | **480 x 270**, 1x | Placeholder (coats aren't in the game yet; the race GIF could stand in once it's re-recorded without the debug bar) |
| `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` | The game icon | Send a **32 x 32** (plus 16 x 16 if you have one) transparent PNG; **180 x 180** for the Apple icon | Temporary: a striped pet cropped from the expedition GIF |
| `img/og-image.png` | The preview card on Discord, X, Slack | **1200 x 630** PNG | Done (farm banner and logo) |
| `img/footer-night.png` | The night scenery strip above the footer | 2280 x 240 | Done (from the night banner) |

## Email sign-up

The form in `index.html` (`<form ... data-signup>`) has no provider yet. Until one is set, submitting it shows "Sign-ups open very soon". To connect a provider, set the form's `action` to the provider's form URL and rename the email field to the name the provider expects (`email`, `fields[email]`, etc.). Each provider's "embed form, HTML" snippet shows both.

## Hosting

GitHub Pages, from the `main` branch and the repository root, with the custom domain set in `CNAME`. DNS for `playtipusgame.com` is managed at the domain registrar:

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

HTTPS is a free certificate from GitHub, turned on with "Enforce HTTPS" in the repository's Settings > Pages.
