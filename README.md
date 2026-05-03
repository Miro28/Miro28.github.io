# Miro28.github.io

Portfolio site. Drop the files anywhere static and you're live.

## Deploy options (pick one)

### GitHub Pages (free, recommended)
1. Create a new public repo named **`Miro28.github.io`** (replace `Miro28` with your GitHub username if different).
2. Upload the files to the root.
3. Go to **Settings → Pages → Source: `main` branch / root** → Save.
4. Visit `https://miro28.github.io` in 1–2 minutes.

### Vercel / Netlify (also free)
- Drag-and-drop `index.html` at <https://app.netlify.com/drop> → instant URL.
- Or connect a GitHub repo on <https://vercel.com> for auto-deploys.

## Customize

| What you want to change | Where to look |
|---|---|
| Name / tagline | `<h1>` in the `<header class="hero">` |
| Bio paragraphs | `<section id="about">` → `.about-text` |
| Projects | `<section id="projects">` → `.projects-grid` (copy a `<a class="project">` block) |
| Skills | `<section id="skills">` (both the marquee and the grid) |
| Contact email / links | `<section id="contact">` |
| Colors | `:root { --accent: ...; }` at the top of the `<style>` |
| Fonts | `<link href="https://fonts.googleapis.com/...">` in `<head>` |


## Notes

- Fonts load from Google Fonts (Fraunces + Bricolage Grotesque + JetBrains Mono).
- Respects `prefers-reduced-motion`.
- Mobile-friendly down to ~360px.
