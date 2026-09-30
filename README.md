# jestertrinidad.com

Personal portfolio of Jester Trinidad. Plain HTML, CSS, and JavaScript. No build step.

## Structure
```
index.html          Homepage
projects/           One page per project (uses css/project.css)
css/base.css        Tokens, reset, typography
css/components.css  Nav, buttons, stickers, name box, tabs, cards
css/pages.css       Homepage section layouts
css/project.css     Project page layout
js/main.js          Dragging, project tabs, copy email, Manila clock
assets/             Favicon, resume, images
DESIGN.md           Design rules
```

## Run locally
Open the folder in VS Code and use the Live Server extension, or just open `index.html` in a browser.

## Deploy (Vercel)
1. Push this folder to a GitHub repository.
2. On vercel.com, choose Add New > Project and import the repository. No settings needed.
3. In Project > Settings > Domains, add `jestertrinidad.com` and `www.jestertrinidad.com`.
4. Copy the DNS records Vercel shows into your domain registrar.

Every push to `main` redeploys the site.

## To do
- [ ] Add `assets/og-image.png` (1200x630) for link previews
- [ ] Add screenshots for Just Elias and 4 Siblings (they use text covers for now)

## Adding or editing a project
1. Put the screenshot in `assets/images/projects/` (about 1600px wide, JPG).
2. On the homepage, copy one `stack__tab` button and one `stack__panel` article in `index.html`, and bump the numbers.
3. Copy an existing page in `projects/`, rename it, and update the text, image, links, and the "next project" link.
