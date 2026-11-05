# SARETY Corporate Website

Editorial-style corporate website for SARETY, with EQ-T featured as its flagship equity intelligence product.

## Files
- `index.html` — semantic, responsive corporate homepage
- `styles.css` — editorial design system and responsive layout
- `script.js` — mobile navigation behavior
- `assets/sarety-logo.png` — supplied SARETY wordmark artwork

## Local preview
Open `index.html` in a browser, or run `python -m http.server 8000` from this directory.

## Deployment
This directory is deployed by the isolated `sarety-corporate` Cloudflare Worker. The Worker fetches the files from this repository; the existing SARETY application is kept separate.
