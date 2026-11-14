# Design system

The single source for the site's look. `src/styles/global.css` holds these values as custom properties.

## Theses

**Visual thesis.** Direction B, chosen by the owner from three mock-ups: bright Whoosh blue as the ground of the hero and page heads, yellow as the one accent, navy for ink and outlines; Baloo Da 2 for everything, because it is one rounded, friendly family drawn for both Bangla and Latin; big type, generous space; rounded "sticker" components (pills, thick navy outlines, hard offset shadows); the logo's wind lines drawn large behind the blue bands.

**Interaction thesis.** Lively, as the owner asked ("not static"), and quick (120–200ms for hovers, 700–900ms for arrivals, ease-out, no bounce). On first paint the headline rises in and its second line fills from left to right like a download finishing, the wind lines draw themselves, and thin wind streaks keep crossing the hero. Sections rise in once as they scroll into view, with a short stagger; the 1,000 counts up; the comparison bars grow to their measured length; the power-cut bar fills, pauses at the cut and carries on. Buttons lift on hover and press down on click. No parallax, no glow, no gradient text.

**Allowed patterns:** the wind lines behind blue bands (the logo's own mark); looping wind streaks in the hero (the product's name, shown); entrance and scroll reveals; a count-up on the 1,000; pills for platforms; hard offset shadows; measured comparison bars on one shared scale; the power-cut bar; a real screenshot of the app with demo files, labelled as such; the taglines "Whoosh. It's downloaded.", "The power can go. Your download won't." and "Download anything. Lose nothing."

## Colour

| Token | Value | Use |
|---|---|---|
| `--blue` | `#2563eb` | hero, page heads, closing band, Whoosh bars |
| `--blue-deep` | `#1746b3` | pills on blue |
| `--blue-soft` | `#dfe9ff` | secondary text on blue and navy |
| `--navy` | `#10204d` | text, outlines, shadows, the power band, footer |
| `--navy-2` | `#1d2f66` | unlit segments |
| `--yellow` | `#ffd84d` | accent: buttons, highlights, the extension band |
| `--white` | `#ffffff` | page, panels |
| `--paper` | `#f4f7ff` | the speed band |
| `--ink-2` | `#4a5a85` | secondary text on light |
| `--line` | `#d6e0fa` | rules, competitor bars |
| `--sky` | `#5b93ff` | lit segments before the cut |

## Type

Baloo Da 2 Variable (400–800), self-hosted through Fontsource; fallback `"Nirmala UI", "Segoe UI", system-ui`. Monospace (system stack) only on commands.

`--t-display` clamp(3.5rem, 10.4vw, 9.5rem) / 800; `--t-page` clamp(3rem, 7vw, 6rem) / 800; `--t-h2` clamp(2.25rem, 5vw, 4rem) / 800; `--t-h3` 1.5rem / 700–800; `--t-figure` clamp(3rem, 6vw, 5rem) / 800; `--t-lead` clamp(1.25rem, 2vw, 1.6875rem); `--t-body` 1.1875rem / 500; `--t-small` 1rem. Tight line height 0.92 (Bangla 1.12); body 1.5 (Bangla 1.6).

## Space, shape

8px base: `--s1` 8 … `--s16` 128. `--pad` clamp(20px, 5vw, 72px); `--max` 1312px. Radii: `--r-pill` 999px, `--r-panel` 28px, `--r-small` 14px. Outline `--edge` 3px navy. Shadows: `--drop` 0 8px 0 navy (panels, the screenshot), `--drop-btn` 0 6px 0 navy (buttons).

## Motion

`--fast` 120ms, `--base` 200ms, `--draw` 700ms; `--ease` cubic-bezier(0.2, 0.8, 0.2, 1). Power bar: 28ms per segment, 700ms pause at the cut. Entrances `rise` 700ms with a 90ms stagger, `fill` 900ms, `draw` 1800ms; streaks 6–9s linear, looping; reveals 700ms with an 80ms stagger; count-up 1200ms. With reduced motion or without JavaScript nothing moves and everything is shown in its final state.

## Icons

`src/components/Icon.astro`: the site's own line icons on a 24px grid, 2.2px stroke, round caps, like the logo's wind lines. They sit in buttons and pills, and in "tiles" (a yellow, sky or white square with a navy outline and a hard shadow) beside features, results and list rows. Platforms use generic marks (four panes, a laptop, a terminal prompt, a globe), not the vendors' logos.

## Signature motion

Added at the owner's request for motion that belongs to Whoosh:

- **Gust.** Section headings arrive from the left with a skew (`whoosh`, 800ms), and a short streak then draws under them (`gust`, 600ms). The screenshot arrives from the right (`whoosh-right`, 900ms).
- **Wind.** Five streaks of different lengths cross the hero on a loop.
- **Power cut.** The download bar fills to the cut; the lit part dims and a bolt strikes (`strike`, 500ms); after 900ms the bar carries on in yellow.
- **The page's download bar.** A thin yellow bar at the top fills as you scroll.
- **Ticker.** The three taglines run across a navy strip (28s loop, pauses on hover).
- **Icons at work.** On hover the download arrow drops into its tray, the heart beats, the chart grows, arrows step forward, tiles tilt.

Allowed patterns, in addition to the list above: the ticker loop; the scroll progress bar; icon tiles. With reduced motion or without JavaScript none of this runs and everything is shown in place.
