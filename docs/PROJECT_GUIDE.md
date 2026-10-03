# Print-it-JS-main — project guide

Print It printing-company landing page with a four-slide JavaScript carousel.

## Scope and source

This guide describes the default branch `main` reviewed on 3 October 2026. Commands were checked against committed manifests and configuration; applications and external integrations were not executed as part of this documentation update.

## Repository map

- `index.html`
- `assets/script.js`
- `assets/style.css`
- `assets/images/slideshow`

## Prerequisites and local use

Clone the repository and enter its root directory:

```sh
git clone https://github.com/sarabranco92/Print-it-JS-main.git
cd Print-it-JS-main
```

Use a modern browser. No npm install is required for the static frontend. With Python installed, serve the site locally:

```sh
python -m http.server 8000
```

On Windows, use `py -m http.server 8000` if `python` is unavailable. Open http://localhost:8000/. This is a local preview server, not production hosting.

## Configuration and implementation notes

Slide images and captions are configured in the `slides` array in `assets/script.js`. The script expects the banner, arrows and dots in the existing HTML. The quote link opens an email client; there is no quote API.

## Verification checklist

Click both arrows and each dot. Check that the last slide wraps to the first, the first wraps to the last, and image, caption and selected dot stay synchronized.

No dedicated automated test/spec files were found in the reviewed application tree. Where a test script exists, its presence alone does not establish test coverage.

## Maintenance

Keep this guide in sync when routes, commands, environment variables or hosting paths change. Use development databases/accounts for integration checks. Keep private credentials in server-side environment configuration and out of documentation. No new license or ownership terms are introduced by this guide; retain existing repository notices.
