# WEB4 notes (2026-11-23): the helicase cuts the DNA open

Job: `JOB_WEB4_fable.md`. Only the root `index.html` changed (`concept_B/` not touched). `reference/` is in `.gitignore`; the two reference GIFs were not opened or copied (the animation is built from the job's description of them).

## What changed

- **The helicase is the fork now.** Wherever it sits, the helix is open above it and closed below it. Above: two strands apart, each rung split into two half-rungs. Below: the normal closed helix.
- **It works as a wedge.** The strands part right under its feet, bend out round its body, then spread to the full width. Just under it the closed helix is squeezed a little, so it looks pushed.
- **Each rung it cuts:** a flash at the fork, the flying bits (the same ones as before), and the helicase bites: a quick squash with its eyes shut (one extra frame of the same face, drawn in code). It also tilts a few degrees left and right with the turn of the helix.
- **First screen:** it starts on the very top of the helix, cuts 4 rungs by itself (about 3 seconds), then waits with "Click the helicase to unzip".
- **Click:** the page glides to the next section and the helicase cuts down the rest of the helix on the way. The glide from a click is a little slower than before, so the cutting can be seen.
- **Scrolling by hand does the same:** the helicase rides down a closed stretch as it passes the middle of the screen. Scrolling back up zips it shut again.
- **Between sections:** it waits at the top of each twist ("Unzip the next gene"), with the strands of the section above bending round it. At the last twist: "Zip it all back up", as before.
- **Pause button / reduced motion:** the first screen shows the end state at once (4 rungs cut, helicase waiting); no bites, no sparks, no tilt.
- **Look kept:** even tubes with shading only, no beads, no ink rings, straight hero helix on desktop. The sections still open by scrolling exactly as before.
- **One layout change:** on desktop the two parent pets sit lower beside the helix (the platypus was under the helicase's label).
- The label hides while the helicase is cutting, so it never covers the fork.

## Stills and GIFs (`shots/`)

- `web4_desktop_mid_cut.png`: desktop, mid-cut on the first screen.
- `web4_phone_mid_cut.png`: phone (390 px), mid-cut.
- `web4_helicase_desktop.gif`, `web4_helicase_phone.gif`: load, the 4 cuts, the wait, then a click.

## Checks

- No console errors at 1440, 390, 360, 320 and 1920 px (light and dark).
- No horizontal scroll at 360 px or 320 px, checked down the whole page.
- Pause during the opening and reduced motion: the helicase is at its waiting spot at once and does not move (checked by position, twice, 0.8 s apart).
- Click from the first screen, scroll back to the top, the end of the page, and "Zip it all back up": all land in the right place.
- One helper pass on 8 screenshots (no GIFs). It found the first-screen fork too short and narrow, and the label touching the platypus. Both fixed in the one redo (the arms now spread sooner; the pets moved down). The redo was checked by me only, not by a second helper pass.

## For the director's opinion

1. The label ("Click the helicase to unzip") sits right under the fork and covers the first closed turn. On phones the "Pair 01 / 26" tag is under it too. Moving the label to the side works on wide screens only.
2. A twist that has been cut stays open as a narrow "waist" between two sections (before, it stayed twisted). This follows "above it, open". Say if passed twists should twist again.
3. A section below a twist still opens by scrolling a moment before the helicase has cut that twist (the fork for sections is at the bottom edge of the screen, as before).
4. In the dark theme the half-rungs beside the helicase are dim on the first screen.

## How to test

1. Open https://playtipusgame.com (or double-click `index.html`). Wait 1 second: the yellow helicase drops onto the top of the helix and cuts 4 rungs, one bite each, then waits with its label.
2. Click it: the page glides down and it cuts the rest of the first helix on the way.
3. Scroll on by hand: at each twist it waits; as the twist passes the middle of the screen it cuts through. Scroll up: it zips shut.
4. Reload, press the pause button (top right) during the opening: it jumps to the waiting state.
5. Same on a phone.
