# Design system

The single source for the site's look. `src/styles/global.css` holds these values as custom properties; nothing in the site uses a colour, size or duration that is not listed here.

## Theses

**Visual thesis.** A full redesign as a test report: a light, cool-grey ground with navy ink and the logo's blue as the only accent (green is reserved for a pass in data), set in Anek Latin and Anek Bangla, one family drawn for both scripts so the Bangla pages carry the same voice as the English ones, with its condensed widths for the measured figures; airy vertical rhythm on an 8px base with dense tables; flat, square-cornered components divided by rules instead of cards or shadows.

**Interaction thesis.** Fast and dry (120–180ms, ease-out); hover changes colour or underline only, never scale; two data plays run once when scrolled into view (the benchmark bars draw to their measured length, the 1,000-kill grid fills) and nothing else reveals; no parallax, loops, glow, bounce or gradient text.

**Allowed patterns:** hairline rules on the benchmark table's rows; measured comparison bars (no track, one shared time scale, labelled in seconds); monospace for commands and file names only; the 1,000-cell kill grid; one dark band for the crash test; a real screenshot of the app's UI, labelled as demo data.

The theses were chosen under the owner's "do what you think best"; nobody validated them line by line.

## Colour

| Token | Light | Dark | Use |
|---|---|---|---|
| `--ground` | `#f4f6f9` | `#0b1120` | page |
| `--surface` | `#ffffff` | `#111a2e` | code blocks |
| `--ink` | `#0d1424` | `#e9edf6` | text, strong rules, the button |
| `--ink-2` | `#48526a` | `#a3adc6` | secondary text, competitor bars |
| `--rule` | `#d3d9e4` | `#27314c` | hairlines |
| `--accent` | `#1d5bd8` | `#7aa8ff` | link underline, hover, Whoosh bars |
| `--pass` | `#0b7a53` | `#46d19c` | reserved for pass marks in data |
| `--night` | `#0b1120` | `#060a14` | the crash-test band |
| `--night-ink`, `--night-ink-2`, `--night-rule`, `--night-cell` | `#e9edf6`, `#a3adc6`, `#27314c`, `#5d8dff` | same | text, rules and grid cells on the band |

## Type

Anek Latin Variable and Anek Bangla Variable (weight 100–800, width 75–125%), self-hosted through Fontsource. Fallback: `"Segoe UI", Roboto, system-ui`; on Bangla pages `"Nirmala UI", "Noto Sans Bengali"`. Monospace is the system stack and appears only on commands.

| Token | Size | Weight / width |
|---|---|---|
| `--t-display` | clamp(2.75rem, 7.2vw, 6rem) | 700 / 84% (Bangla 90%) |
| `--t-h2` | clamp(1.875rem, 3.6vw, 2.875rem) | 650 / 90% |
| `--t-h3` | 1.25rem | 650 |
| `--t-figure` | clamp(2.25rem, 4.4vw, 3.5rem) | 650 / 78% |
| `--t-lead` | clamp(1.125rem, 1.5vw, 1.3125rem) | 400 |
| `--t-body` | 1.0625rem | 400 |
| `--t-small` | 0.9375rem | 400–500 |

Line height: display 0.98 (Bangla 1.18), body 1.55 (Bangla 1.7). Figures are tabular.

## Space, shape

Spacing on an 8px base: `--s1` 8, `--s2` 16, `--s3` 24, `--s4` 32, `--s6` 48, `--s8` 64, `--s12` 96, `--s16` 128. Page padding `--pad` clamp(20px, 4vw, 48px); content width `--max` 1200px. Radius: none. Shadows: none. Borders: 1px `--rule`; 2px `--ink` above the ledger, the table head and the footer.

## Motion

`--fast` 120ms (colour, underline), `--base` 180ms, `--draw` 600ms (bars), grid fill 1400ms; easing `--ease` cubic-bezier(0.2, 0.7, 0.2, 1). With reduced motion, or without JavaScript, both data plays show their final state.

## Components

Button (ink block, square; hover accent; active ink with accent border; focus 3px accent outline), text link (accent underline), ledger, comparison bars, kill grid, specification list, table, disclosure.
