# jacquelinedelgado.com — Next.js edition

Portfolio rebuilt in **Next.js 14 (App Router) + TypeScript**, styled with the
**Nymbl design system** (tokens carried over exactly from
`chat-gpt-nymbl-landing-page`).

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Note: the GrumpyBot chatbot iframe is origin-locked to jacquelinedelgado.com,
so it may refuse to load on localhost. Everything else works locally.

## Build

```bash
npm run build      # static export → ./out
```

`next.config.mjs` uses `output: 'export'`, so the build produces plain
HTML/CSS/JS in `out/` — deployable anywhere static files go.

## Deploy — two options

**Option A — GitHub Pages (current host, keeps the custom domain):**
1. Push this project to the repo that serves jacquelinedelgado.com.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` builds and deploys on every push.
4. `public/CNAME` (jacquelinedelgado.com) and `public/.nojekyll` are already in
   place — do not delete them. `.nojekyll` stops GitHub from ignoring the
   `_next/` asset folder.

**Option B — Vercel:**
Import the repo at vercel.com/new, framework auto-detects, add the custom
domain in the Vercel dashboard. No workflow needed (you can delete
`.github/workflows/deploy.yml` and `public/.nojekyll`).

## Where things live

- `app/globals.css` — the whole design system. Colors/fonts/spacing tokens at
  the top under `:root`.
- `components/` — one file per section, content lives inline in each file.
- `components/StatusBar.tsx` — the "currently shipping" text: edit the STATUS
  constant.
- `components/DailyQuote.tsx` — the Zapier-fed daily quote endpoint.
- Timeline, stat counters, reveals, and card tilt respect
  `prefers-reduced-motion`.

## Changes from the HTML version (intentional)

- Fixed duplicate `id="tl0"` on the 1998/2003 timeline items (the 2003 stop
  never animated in the old site).
- "Entreprenuer" → "Entrepreneur" (About, card 01).
- Section eyebrows keep the `// comment` voice but drop the out-of-order
  numbers (01, 02, 02.5, 05, 06, 07, 04…).
- `aboutme.gif` was not referenced by the old index.html and is not shipped.
