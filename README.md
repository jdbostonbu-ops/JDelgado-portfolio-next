<p align="center">
  <img src="public/favicon.svg" width="300" alt="JD logo" />
</p>

<h1 align="center">🏠 jacquelinedelgado.com</h1>

<p align="center">
  Portfolio of <a href="https://github.com/jdbostonbu-ops"><strong>Jacqueline Delgado</strong></a> — AI Collaborative Software Engineer.<br/>
  Websites, booking systems, and automations for small businesses. Also, once, a dinosaur game.
</p>

<p align="center">
  🌐 <strong>Live at:</strong> <a href="https://jacquelinedelgado.com">jacquelinedelgado.com</a>
</p>

---

## ✨ Features

- 🤖 **Embedded no-code chatbot** — powered by [GrumpyBot](https://www.grumpybot.fyi), the embedded-iframe chatbot platform **I built**. This one is trained on a real dog-walking handbook, answers only from its documents, and admits when it doesn't know. Ask it about clown day. Clown day is real.
- ⚡ **Self-updating quotes** — a fresh quote lands weekly through a **Zapier + Google Apps Script** workflow. No manual edits, no redeploys: part of this site maintains itself while I sleep.
- 🚢 **Four featured builds** —
  - [**Story Pot**](https://story-pot.vercel.app/) · a local-first PWA memory archive (records, transcribes in 67 languages, no cloud, no account)
  - [**The Sky Is Falling**](https://the-sky-falling.vercel.app) · a 3D browser game where dinosaurs catch falling shapes — with a real Express + SQLite leaderboard
  - [**GrumpyBot**](https://www.grumpybot.fyi) · my no-code RAG chatbot SaaS (the same one embedded below)
  - [**AnglerCast**](https://www.anglercast.fyi) · fishing insight from real public occurrence data — honest numbers, no invented catches
- 🗣️ **Real testimonials** — from real users and clients, quoted with their real words. The star ratings you won't find here were never given, so they're not shown.
- 😄 **Humor throughout the entire landing page** — every section header hides a joke, and every joke sits on a fact that survives checking.
- 🌐 **Real custom domain** — served at [jacquelinedelgado.com](https://jacquelinedelgado.com), with the CNAME riding along in `public/`.

## 🛠️ Stack

| Layer | Tech |
| --- | --- |
| Framework | Next.js 14 (App Router), static export |
| Language | TypeScript + React 18 |
| Styling | Hand-rolled CSS design tokens — no UI framework, no Tailwind |
| Typography | Inter (display + body) · JetBrains Mono (code-comment eyebrows) |
| Automation | Zapier + Google Apps Script (weekly quote feed) |
| Chatbot | GrumpyBot embed — my own platform, eating its own dog (walking) food |
| CI/CD | GitHub Actions → GitHub Pages *(or Vercel — both supported)* |

## 🚀 Build & Deploy

```bash
npm run build      # static export → ./out
```

`next.config.mjs` uses `output: 'export'`, so the build is plain HTML/CSS/JS — deployable anywhere static files go.

**Option A — GitHub Pages (custom domain, current setup):**
1. Push to the repo that serves jacquelinedelgado.com.
2. Settings → Pages → Source: **GitHub Actions**.
3. `.github/workflows/deploy.yml` builds and deploys on every push.
4. Keep `public/CNAME` and `public/.nojekyll` — the first holds the domain, the second stops GitHub from eating the `_next/` folder.

**Option B — Vercel:**
Import at [vercel.com/new](https://vercel.com/new); the framework auto-detects. Add the custom domain in the dashboard, then delete the workflow file and `.nojekyll` if you like a tidy repo.

## 📁 Where things live

- `app/globals.css` — the entire design system; color, type, and spacing tokens under `:root`.
- `components/` — one file per section; content lives inline where it's used.
- `components/DailyQuote.tsx` — the Zapier-fed quote endpoint.
- `components/StatusBar.tsx` — the "currently shipping" line: edit the `STATUS` constant, push, done.
- Every animation (marquee, counters, timeline, reveals, tilt) respects `prefers-reduced-motion`.

## ⭐ Say hi

<p align="center">
  <a href="https://github.com/jdbostonbu-ops">
    <img src="https://github.com/jdbostonbu-ops.png" width="96" alt="Jacqueline Delgado" />
  </a>
  <br/>
  <strong><a href="https://github.com/jdbostonbu-ops">@jdbostonbu-ops</a></strong>
  <br/>
  <sub>Founder, Hum LLC · New London, CT</sub>
</p>

<p align="center">
  If this page made you smile — or you also hold grudges against spreadsheets —<br/>
  <strong>⭐ star this repo.</strong> It's the only metric on this site I don't automate.
</p>