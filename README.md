# Levicon Digital — React + Vite

A standalone React + Vite conversion of the Levicon Digital marketing site
(Business Online Setup, a service of Levicon Systems Ltd). This project is
fully independent — no shared code, styles, or assets with any other
Levicon project.

The design, copy, layout and functionality match the original static
HTML/CSS/JS version; only the color palette was updated on request (see
**Color palette** below) and the technology underneath changed to React.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically **http://localhost:5173**).

Other scripts:

```bash
npm run build     # production build → dist/
npm run preview   # serve the production build locally to sanity-check it
```

## Project structure

```
levicon-digital-react/
├── index.html                  Vite entry HTML (base <head> tags)
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.svg             "LD" monogram favicon
│   └── _redirects              Netlify SPA fallback (/* → /index.html)
└── src/
    ├── main.jsx                React root, BrowserRouter
    ├── App.jsx                 Route definitions
    ├── constants.js            WhatsApp number / link builder (single source of truth)
    ├── hooks/
    │   └── useDocumentHead.js  Sets per-page <title>, meta description, OG tags
    ├── styles/
    │   └── global.css          Design tokens, typography, buttons, shared layout
    ├── components/
    │   ├── Layout.jsx          Header + <Outlet/> + Footer wrapper
    │   ├── Header.jsx          Nav with mobile menu (useState)
    │   ├── Footer.jsx
    │   ├── Button.jsx          One button component for all CTA variants
    │   ├── FlowDiagram.jsx     Search → Website → WhatsApp step visual
    │   ├── BeforeAfter.jsx     Reusable two-column before/after list
    │   ├── ServiceGrid.jsx     Reusable icon+title+description card grid
    │   ├── PriceCard.jsx
    │   ├── Faq.jsx             Accordion (useState — not native <details>)
    │   ├── EnquiryForm.jsx     Controlled form + validation → WhatsApp link
    │   ├── CTASection.jsx      Reusable end-of-page banner
    │   ├── ScrollToTop.jsx     Scrolls to top on route change
    │   └── icons/              Small inline SVG icon set (no icon-font dependency)
    └── pages/
        ├── Home.jsx
        ├── BusinessOnlineSetup.jsx
        ├── Pricing.jsx
        ├── About.jsx
        ├── Contact.jsx
        └── NotFound.jsx
```

## Dependencies

Kept intentionally minimal:

- `react`, `react-dom` — the framework
- `react-router-dom` — client-side routing for the 5 pages + 404
- `vite`, `@vitejs/plugin-react` — build tooling (dev only)

No CSS framework, icon library, or form library was added. Icons are
inline SVG components; styling is plain CSS using CSS Modules (built into
Vite, zero extra dependency) plus one small global stylesheet for shared
tokens, typography and buttons.

## Color palette (as requested for this conversion)

| Token       | Hex       | Use                                  |
|-------------|-----------|---------------------------------------|
| Rich Black  | `#0A0A0A` | Primary brand — headings, nav, primary buttons |
| Digital Lime| `#B8F23D` | Primary accent + CTA color            |
| Soft White  | `#F7F8F5` | Main background                       |
| Pure White  | `#FFFFFF` | Cards and content sections            |
| Dark Text   | `#111111` | Body text                             |
| Slate Grey  | `#667085` | Secondary / muted text                |

All tokens live in `src/styles/global.css` under `:root` — change a value
there and it updates everywhere.

Note: the original build brief for this site said not to change the color
palette during the conversion, but this message also specified a new,
different palette by exact hex value. I applied the new palette as given,
since it was the more specific, explicit instruction — flagging it here in
case that's not what was intended.

## SEO / accessibility carried over

- Per-page `<title>`, meta description and Open Graph tags via
  `useDocumentHead` (runs on every route change — this is an SPA, so these
  are set client-side rather than baked into static HTML per page).
- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>` via labelled
  lists, `<h1>`–`<h4>` hierarchy preserved per page).
- Accessible nav: `aria-expanded`/`aria-controls` on the mobile menu
  toggle, `aria-current`-equivalent active-link styling via `NavLink`.
- Form fields have associated `<label>`s, `aria-invalid` and
  `aria-describedby` wired to inline error text.
- Decorative icons are `aria-hidden`; there are no photographic images in
  this site (all visuals are original inline SVG/CSS), so there was no
  `alt` text to carry over — the favicon is the only raster/vector asset.
- `public/_redirects` is included so a static host with SPA fallback
  (Netlify, and equivalents on Vercel/other hosts) correctly serves
  `/pricing`, `/about`, etc. on a direct link or refresh rather than 404s.

## Manual review before launch

- **WhatsApp number**: `08149455870` → `https://wa.me/2348149455870`,
  centralized in `src/constants.js` and used in the nav, hero, footer,
  pricing and contact pages. Confirm it's correct.
- **Pricing**: ₦50,000 (₦35,000 upfront / ₦15,000 before handover) is set
  in `src/pages/Pricing.jsx`.
- The enquiry form doesn't submit to a backend — it validates the fields,
  then opens a pre-filled WhatsApp chat with the details, matching the
  "conversion happens through WhatsApp" requirement from the original
  brief.
- `npm audit` currently reports a few moderate/high advisories, all in
  `vite`'s own dev-time dependency tree (not shipped in the production
  build). Safe to leave for now; run `npm audit` periodically and update
  `vite` when a fix is available.

## What I verified after building

- `npm install` completed cleanly (66 packages, standard React + Vite
  tree).
- `npm run build` compiles with no errors.
- `npm run preview` (production build) returns HTTP 200 for `/`,
  `/business-online-setup`, `/pricing`, `/about`, `/contact`, and an
  unmatched path (correctly rendering the `NotFound` page rather than a
  server 404, since this is a client-routed SPA).
- `npm run dev` also starts and serves cleanly.
- `dist/` contains the favicon and `_redirects` file alongside the built
  JS/CSS bundle.
- The WhatsApp number is present in the built JS bundle.
- No "Solar" references anywhere in the project (checked recursively).
