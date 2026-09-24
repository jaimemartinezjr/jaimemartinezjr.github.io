# Jaime Martinez Jr. Portfolio

This is a static Jekyll site for `jaimemartinezjr.github.io`. It is designed to publish directly from the `main` branch and the repository root on GitHub Pages.

## Update the site

- Edit `index.md`, `about.md`, `experience.md`, or `contact.md` to update page content.
- Keep YAML front matter between the opening and closing `---` markers.
- Update shared navigation or the footer in `_includes/header.html` and `_includes/footer.html`.
- Adjust the visual system in `assets/css/style.css`.
- Keep `baseurl` empty in `_config.yml` because this is a GitHub user site.

## Preview locally

Install Ruby and Bundler, then install Jekyll if it is not already available:

```sh
gem install jekyll bundler
jekyll serve --livereload
```

Open `http://127.0.0.1:4000`. Jekyll will rebuild pages when Markdown, Liquid, or CSS files change.

## Publish with GitHub Pages

1. Create or use the repository `jaimemartinezjr.github.io`.
2. Push this repository to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main`, and select `/ (root)`.
5. Save. GitHub Pages will build the site using the root-level `_config.yml`.

## Run Lighthouse

With the site running locally or published:

```sh
npx lighthouse http://127.0.0.1:4000 --view
```

Run the audit at both a narrow mobile width (375px) and a desktop width (1280px). The site uses semantic HTML, a small CSS/JS footprint, descriptive metadata, a sitemap, and no trackers to support strong Performance, Accessibility, Best Practices, and SEO scores.

## Content note

The supplied biography is used as the source of truth. Work-history specifics not supplied yet are marked as placeholders on the Experience page rather than being invented.