# Repository Guidelines

## Project Structure & Module Organization
- Root entry point: `index.html` (dashboard UI)
- Custom code: `assets/css/main.css`, `assets/js/app.js`
- Third‑party libs: `assets/css/bootstrap*`, `assets/js/jquery*`, `assets/js/bootstrap*`, `assets/plugins/`
- Assets: `assets/images/`, `assets/fonts/`
- Additional pages live in `pages/` (link them from navigation)
- Do not modify vendored files under `assets/css/*bootstrap*`, `assets/js/*bootstrap*`, or `assets/plugins/` — extend via our custom files instead.

## Build, Test, and Development Commands
- Static site; no build step required.
- Run locally from the repo root:
  - `live-server`  (auto reload)
  - `python3 -m http.server 8000` then visit http://localhost:8000
- After changes, hard refresh to clear browser cache for CSS/JS.

## Coding Style & Naming Conventions
- Indentation: 4 spaces (HTML, CSS, JS).
- Filenames: kebab-case (e.g., `client-details.html`, `team-card.js`).
- HTML: semantic tags, double-quoted attributes, keep lines ≤120 chars.
- CSS: prefer variables defined in `:root`; put custom rules in `assets/css/main.css`; avoid editing minified vendor CSS.
- JS: jQuery is available; use standard `function () {}` callbacks for jQuery handlers; keep logic in `assets/js/app.js`; end statements with semicolons.

## Testing Guidelines
- No automated tests; perform manual QA in latest Chrome/Firefox/Safari and mobile widths (375–414px) and desktop (≥1366px).
- Sanity checks: header/nav behavior, search toggle, slider, scroll effects, “Back to Top”, and dropdowns.
- Validate HTML/CSS where feasible; watch console for JS errors.

## Commit & Pull Request Guidelines
- Use Conventional Commits:
  - Examples: `feat: add team member card`, `fix: correct header z-index`, `chore: compress gallery images`.
- PRs: include a brief description, linked issue (if any), before/after screenshots or short clip, and manual test notes.
- Keep diffs focused on `assets/css/main.css`, `assets/js/app.js`, and new files under `pages/`.

## Security & Maintenance Tips
- Do not commit secrets or large raw media; compress images in `assets/images/`.
- Preserve vendor sources under `assets/plugins/`; upgrade in a separate PR when needed.
