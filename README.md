# Little Drops

A single-page, fully static website with app marketing, contact information, and privacy policy sections. No Node.js, dependencies, JavaScript, server runtime, or build step is needed.

## Files to publish

- `index.html` — page content and inline SVG icons
- `styles.css` — responsive styles
- `assets/today.png` — app screenshot
- `assets/favicon.svg` — site icon
- `.nojekyll` — tells GitHub Pages to serve the files directly

## Host on GitHub Pages

1. Put these files and the `assets` folder in the root of your GitHub repository. Include `.nojekyll`.
2. Push to your publishing branch (usually `main`).
3. In the repository, open **Settings → Pages**.
4. Set **Source** to **Deploy from a branch**, choose your publishing branch, and select **/(root)**.
5. Click **Save**. GitHub shows the site URL when deployment completes.

Relative asset paths work with both `https://USERNAME.github.io/REPOSITORY/` and a custom domain. No base URL needs to be configured.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Preview and edit

Open `index.html` directly in your browser. Optionally run `python3 -m http.server 5173` from this folder and open http://localhost:5173/.

Edit content in `index.html` and appearance in `styles.css`. Changes are ready to publish immediately.
