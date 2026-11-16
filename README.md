# Lovsky UX Studio · medical ventures landing page

Hebrew (right-to-left) landing page for accelerators, innovation programs and medical founders.
Plain HTML, CSS and a few lines of JavaScript. No build step, no dependencies.

## Files

- `index.html` : all page content and copy
- `styles.css` : all styling (colors and spacing follow the Lovsky UX Design System)
- `script.js` : adds the page address to the "forward to a venture" WhatsApp messages. The page works without it.
- `favicon.svg`, `assets/` : icon, fonts (Heebo, SIL Open Font License), images

## Preview on your computer

Double-click `index.html`. It opens in the browser.

## Status

- Hebrew only for now. An English toggle is planned after the Hebrew version is approved.
- The page is marked `noindex` (search engines are asked not to list it) until launch is approved.
  To allow search engines, remove the `<meta name="robots" ...>` line in `index.html`.

## Rules for editing copy

- Experience descriptions must stay accurate (see BRIEF.md in the parent project folder, outside this repository).
- No prices on the page until all four services are priced.
- Never commit internal documents (pricing, client notes) to this repository. It is public.
