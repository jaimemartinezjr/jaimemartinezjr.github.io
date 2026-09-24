# Jaime Martinez Jr. Portfolio — Build Plan

## Site

- Root-level Jekyll site for `jaimemartinezjr.github.io`, published from `main` and `/`.
- Pages: Home, About, Work Experience, and Contact.
- Responsive single-column layout with semantic HTML, accessible contrast, keyboard-friendly navigation, and a persistent footer.
- Light-only visual direction with a confident editorial/technical mix: readable sans-serif body text paired with a restrained display accent and subtle military/operations-inspired structure, without decorative clutter.
- Public contact link: `mailto:jaime_martinez@berkeley.edu`, with a note that it is publicly visible.

## Content

- Use the supplied biography exactly as the source for the Home and About page messaging.
- Use clearly labeled placeholders for employers, titles, dates, assignments, projects, achievements, metrics, and any other experience details not supplied.
- Do not fetch or infer content from the LinkedIn URL.

## Technical choices

- Jekyll with Markdown pages, YAML front matter, reusable layouts/includes, plain HTML/CSS, and minimal JavaScript only if needed.
- URL filters throughout so the empty `baseurl` works correctly on a GitHub user site.
- Include SEO metadata, canonical URLs, sitemap, favicon, README instructions for editing/local preview/Lighthouse, and GitHub Pages-compatible configuration.
- No backend, database, form handler, blog, CMS, framework app, tracker, package manifest, or unnecessary dependency.

## Assumptions

- GitHub username is `jaimemartinezjr`.
- The supplied email is approved for public display.
- No work-history facts beyond the supplied summary are available yet, so the experience page will remain visibly marked for completion.
