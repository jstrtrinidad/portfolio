# Design system: jestertrinidad.com (v2, notebook)

Read this before changing anything visual. All tokens live in `css/base.css`.

## Direction
A notebook page on a desk. The page is ruled paper sitting on a grey grid. On top of it:
sticky notes, a pixel-type name in a red box, taped polaroids, torn-paper skill chips,
index cards, and colored folder tabs for projects. Playful, but every sticker says something true.

## Color
| Token | Hex | Use |
|---|---|---|
| `--desk` | #9a9a96 | Grid behind the page |
| `--paper` | #f8f7f2 | Notebook page |
| `--ink` | #1f1e1c | Text and outlines |
| `--red` | #e5533b | Name box, index card margin line |
| `--blue` | #2c59dc | Buttons, Project 01 |
| `--butter` | #f4cd48 | Active nav, Project 02, notes |
| `--mint` | #a8dcc5 | Stickers, notes |
| `--pink` | #ff5c9e | Logo, Project 04 |
| `--green` | #2fb35c | Skill chip, toast |

## Type
- Pixelify Sans 700: the name and "Let's talk" only
- Geist 400/500/600: headings and body
- Geist Mono 500, uppercase, tracked: small labels, buttons, tabs, nav
- Kalam: handwritten notes, the about paragraph, index cards

## Interaction
- Stickers, notes, avatars, the polaroid, and the "Right now" card can be dragged. Double-click resets.
- Letters in the name hop on hover.
- Project tabs switch panels (click, or arrow keys). Each panel opens a full project page.
- Copy email button shows a toast.
- Live Manila time in the hero and footer.
- Nav highlights the section you're reading.
- Only one looping animation: the blue "open to internships" ping.
- No scroll-triggered animations.

## Never
- Purple gradients
- Fake reviews or testimonials
- Made-up metrics (every number must be on the resume and true)
- Emoji as icons (use inline SVG)
- Em dashes in copy

## Project pages
Pixel-type title, stickers for role and team, a taped browser-frame screenshot, then
The problem, What I did, feature cards, How it works, and a sticky Project facts index card.
Every page ends with a link to the next project.
