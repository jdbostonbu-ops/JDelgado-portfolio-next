DESIGN BRIEF — jacquelinedelgado.com, rebuilt on the Nymbl layout system

Build a single-page portfolio in Next.js 14 (App Router) + TypeScript.
Do NOT reuse the old portfolio's layout. The layout, section shapes, and
component patterns come from the Nymbl landing page
(https://chat-gpt-nymbl-landing-page.vercel.app/). The CONTENT comes from the
data below. Static export compatible (output: 'export').


1. DESIGN TOKENS (exact — do not adjust)

css:root {
  --blue: #063bff;        /* primary */
  --deep-blue: #031b8e;
  --cyan: #00d7e8;
  --pink: #ff0a78;
  --yellow: #ffc400;
  --orange: #ff7a00;
  --ink: #06111f;         /* near-black navy */
  --white: #ffffff;
  --cloud: #f3f8ff;       /* blue-tinted off-white */
  --muted: #526071;
  --shadow: 0 24px 70px rgba(6, 17, 31, 0.18);
}


Card radius 18px, button radius 10px, icon-box radius 14px.
Buttons: min-height 54px, padding 0 28px, font-weight 900,
hover = translateY(-2px) + var(--shadow).
Section padding: 76px 6vw. Marquee band: 18px 0. Final CTA: 54px 6vw.


2. TYPE


One family: Inter (weights 400/500/700/800/900). Optional utility face:
JetBrains Mono for //-style eyebrow labels (my code-comment voice).
Hero headline: clamp(56px, 8vw, 118px), weight 900, line-height ~0.98,
letter-spacing -0.03em.
Section titles: clamp(34px, 4vw, 56px), weight 900.
Eyebrows: 14px, weight 900, uppercase, letter-spacing 0.09em. Color-coded:
cyan on dark bands, blue on light, pink/yellow as accents.
Big, confident, tight. When in doubt, larger and bolder.


3. COMPONENT VOCABULARY (Nymbl patterns to reproduce)


Glass nav — sticky, rgba(255,255,255,0.94) + backdrop-blur(16px),
logo left, links right, yellow CTA button "Let's Connect".
Orb hero — background: 135° gradient var(--blue) → var(--deep-blue)
with 4 radial-gradient orbs (yellow, cyan, orange, pink) clustered right
of center. White text. Two buttons: yellow primary + white ghost.
Signature gradient — 9px strip pinned to hero's bottom edge,
linear-gradient(90deg, cyan, yellow, orange, pink, blue),
background-size 260% 100%, animated position shift ~5.8s alternate.
MARQUEE (ticker) — full-bleed cyan band directly under the hero.
Ink text, 14px, weight 900, UPPERCASE, items padded 0 22px, separated by
"·". Track duplicated twice for a seamless loop, CSS animation
translateX(0 → -50%) linear ~24s infinite. Pause on hover; static row
under prefers-reduced-motion.
Automation grid — small cards in a dense grid (7-across on desktop,
4 / 2 / 1 as it shrinks): white, 1px rgba(6,17,31,0.1) border, 18px
radius, shadow. Each has an icon-box: 60×60, radius 14,
linear-gradient(135deg, blue, pink, orange), white glyph.
Pink band section — full-bleed var(--pink), white text, left-aligned,
generous padding. Yellow band section — full-bleed var(--yellow), ink
text, left-aligned. These are the loud storytelling slabs.
Browser-mockup frame — media sits in an ink panel with a 6px white
border, 18px radius, heavy shadow, and a topbar strip with three 10px
dots: yellow, cyan, pink.
Glass cards on ink — rgba(255,255,255,0.08) bg,
rgba(255,255,255,0.22) border, for content on dark bands.
Final CTA band — 135° gradient blue → deep-blue, centered white
headline, yellow button.
Footer — ink background, white text, yellow links.


Band rhythm top to bottom: gradient hero → cyan marquee → white → pink →
cloud → ink → yellow → white → gradient CTA → ink footer. Full-bleed color
changes are the design's pulse — never stack two same-color sections.

4. PAGE STRUCTURE — Nymbl layout, my content

4.1 Nav

Logo: // JD  const dev = true (JetBrains Mono; "const dev =" in blue,
"true" in pink, blinking cyan cursor). Links: About, Skills, Services,
Testimonials, Projects, Education, Journey. CTA: "Let's Connect" → #contact.

HERO — exact spec (replaces any earlier hero description; copy this CSS verbatim)

Structure:
<section id="top" class="hero">
  <div class="hero-copy">
    <p class="eyebrow cyan-text">// AI Collaborative Software Engineer</p>
    <h1>Hi, I'm Jacqueline.</h1>
    <p class="hero-subhead">I build websites, booking systems, and automations
      for small businesses.</p>
    <div class="action-row">
      <a class="button button-yellow" href="#contact">Let's Connect</a>
      <a class="button button-outline" href="https://github.com/jdbostonbu-ops">View GitHub</a>
    </div>
    <p class="trust-line">★★★★★ Founder & Developer of GrumpyBot · 25+ years of systems thinking</p>
  </div>
  <div class="signature-gradient" aria-hidden="true"></div>
</section>

CSS (verbatim):
.hero {
  background:
    radial-gradient(circle at 82% 42%, rgba(255,196,0,.92), transparent 9%),
    radial-gradient(circle at 78% 32%, rgba(0,215,232,.95), transparent 13%),
    radial-gradient(circle at 88% 48%, rgba(255,122,0,.72), transparent 11%),
    radial-gradient(circle at 88% 48%, rgba(255,10,120,.92), transparent 19%),
    linear-gradient(135deg, var(--blue) 0%, var(--deep-blue) 72%);
  color: var(--white);
  display: grid;
  min-height: 640px;
  padding: 72px 6vw;
  position: relative;
}
/* THE MOVING LINES */
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(116deg, transparent 0 18px, rgba(255,255,255,.18) 19px 21px),
    linear-gradient(112deg, transparent 0 43%, rgba(0,215,232,.85) 47%, rgba(255,10,120,.86) 62%, transparent 82%);
  background-size: 160% 160%;
  animation: signatureSweep 8s ease-in-out infinite alternate;
  mask-image: linear-gradient(90deg, transparent 0 42%, black 54%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0 42%, black 54%);
  opacity: .8;
}
.hero-copy { max-width: 720px; position: relative; z-index: 2; }
h1 { color: var(--white); font-size: clamp(56px, 8vw, 118px);
     font-weight: 950; letter-spacing: .018em; line-height: .88; margin: 0; }
/* The headline is WHITE — no gradient text anywhere in the hero. */
.hero-subhead { font-size: clamp(18px, 2vw, 26px); line-height: 1.3; max-width: 660px; }
.eyebrow { font-size: 14px; font-weight: 950; letter-spacing: .09em;
           text-transform: uppercase; margin: 0 0 16px; }
.cyan-text { color: var(--cyan); }
.trust-line { font-size: 16px; font-weight: 850; }
.action-row { display: flex; flex-wrap: wrap; gap: 16px; margin: 32px 0 24px; }
.signature-gradient { position: absolute; left: 0; right: 0; bottom: 0; height: 9px;
  background: linear-gradient(90deg, var(--cyan), var(--yellow), var(--orange), var(--pink), var(--blue));
  background-size: 260% 100%; animation: signaturePulse 5.8s ease-in-out infinite alternate; z-index: 3; }
@keyframes signatureSweep { from { background-position: 0% 50%; } to { background-position: 100% 50%; } }
@keyframes signaturePulse { to { background-position: 100% 50%; } }
@media (prefers-reduced-motion: reduce) {
  .hero::after, .signature-gradient { animation: none; }
}


4.3 MARQUEE — "currently building with"

Cyan band. Items (uppercase, · separated, loop):
REACT · NEXT.JS · TYPESCRIPT · THREE.JS · REACT NATIVE · PWAS · FIREBASE ·
SQLITE · NEON POSTGRES · POSTGRESQL · MAPBOX GL · ZAPIER · N8N · RAG
CHATBOTS · PYTHON · FASTAPI · EXPRESS · NODE.JS · GIT & GITHUB · GSAP · TDD ·
INDEXEDDB · WEB SPEECH API · OPENAI · GEMINI · MCP

4.4 Skills — automation grid (white section)

Eyebrow (blue): // SKILLS. Title: "What I'm building with."
8 icon-box mini-cards: Full-Stack Development ⚛️ · AI Integration 🤖 ·
Cloud & DevOps ☁️ · Backend & Databases 🗄️ · Python & Logic 🐍 ·
Cybersecurity 🔐 · Geospatial Engineering 🌍 · Workflow Automation ⚡.
One line of body each (reuse existing copy), 2–3 pill tags per card.

4.5 About — PINK band section

Eyebrow (yellow): // A DIFFERENT PATH. Title: "25 years of systems
thinking. New syntax." Left column: the story paragraph (agency owner 12 yrs
→ DHS behavior detection & analysis → Next Chapter apprenticeship). Right
column: three stacked mini-cards (white on pink, ink text) — 01 Entrepreneur
2012–2024 · 02 Behavior Detection & Analysis, DHS · 03 AI Software Engineer,
Next Chapter — each with its one-sentence "how it shaped my engineering"
line. Keep it scannable; no flip interaction needed.

4.6 Services (cloud section)

Eyebrow (blue): // SERVICES. Title: "What I can build for you."
Subtitle: "Websites, bookings, and automations that run your small business
while you do the actual work."
BENTO GRID SECTION (pattern from claude-nymbl.vercel.app "The whole gamut")

Layout: a bento grid — one CSS grid, cards spanning different column/row counts.
.grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1.1rem; }
.card { border-radius: 20px; padding: 1.7rem;
        transition: transform .2s ease, box-shadow .2s ease; }
.card:hover { transform: translateY(-5px); box-shadow: 0 24px 60px -22px rgba(30,107,255,.4); }
.card .tag { font-size: .68rem; font-weight: 700; letter-spacing: .14em;
             text-transform: uppercase; display: block; margin-bottom: .7rem; opacity: .9; }

Size roles:
.card.feature { grid-column: span 3; grid-row: span 2;
  background: linear-gradient(100deg, #00d4e0 0%, #ff2d95 52%, #ff8a00 100%);
  color: #fff; display: flex; flex-direction: column; justify-content: space-between;
  box-shadow: 0 24px 60px -20px rgba(255,45,149,.5); }
.card.feature h3 { font-size: 2rem; }
.card.third { grid-column: span 2; }
.card.wide  { grid-column: span 3; }

Color-blocked variants (text flips for contrast):
.c-blue    { background: #1e6bff; color: #fff; }
.c-magenta { background: #ff2d95; color: #fff; }
.c-amber   { background: #ff8a00; color: #0a1030; }
.c-cyan    { background: #00d4e0; color: #0a1030; }
.c-gold    { background: #ffd400; color: #0a1030; }
.c-ink     { background: #0a1030; color: #fff; }

Card anatomy: uppercase TAG → h3 title → one-sentence body.
Render order: feature + four thirds in one grid, then the two wides in a
second grid row below. Collapse: 6 cols → 2 → 1; feature loses row-span on mobile.

MY CONTENT for this bento (services):
feature  → "AI & Chatbot Tools" tag "Showcase" — GrumpyBot: embedded RAG
           chatbots that answer only from your content. (spectrum gradient)
third    → "Landing Pages" tag "Web" (c-blue)
third    → "Booking Systems" tag "Bookings" (c-magenta)
third    → "Lead Capture" tag "Leads" (c-amber)
third    → "Automation" tag "Zapier · N8n" (c-cyan)
wide     → "Mobile & Web Apps" tag "Full-stack" (c-gold)
wide     → "Custom builds" tag "Built for you" — tell me the task you dread. (c-ink)

4.7 Live automation demo

Eyebrow (cyan): // LIVE AUTOMATION DEMO. The daily quote, huge
(clamp 24–40px, weight 900), yellow quote marks. Fetched client-side from
the Google Apps Script endpoint (in the old repo's main.js — carry it over
exactly). Below: "Updated daily through a Zapier + Google Apps Script
workflow. No manual site update required." + glass flow chips:
Zapier trigger → Google Apps Script API → Portfolio UI.


4.71

LIGHT TESTIMONIAL BAND — place DIRECTLY AFTER the dark live-automation section.
The dark→light background flip is the section separator. Do not add dividers.

.testi { background: #f2f6ff; color: #0a1030; padding: clamp(3.5rem,8vw,6rem) 2rem; }
.testi .eyebrow { text-transform: uppercase; letter-spacing: .24em; font-size: .8rem;
                  font-weight: 700; color: #0a1030; opacity: .75; text-align: center; }
.testi h2 { text-align: center; font-size: clamp(2.2rem, 5.4vw, 3.8rem);
            line-height: 1.02; margin: .6rem auto 2.5rem; max-width: 20ch; }

.quotes { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.3rem;
          max-width: 1150px; margin: 0 auto; }
.quote  { background: #fff; color: #0a1030; border-radius: 20px; padding: 1.9rem;
          border: 1px solid #dbe4ff; box-shadow: 0 12px 34px -20px rgba(30,107,255,.25); }
/* Option A (Nymbl look): .quote .stars { color:#ff8a00; letter-spacing:.14em; font-size:.95rem; } */
/* Option B (honest default): colored quote glyph */
.quote .glyph { font-size: 1.6rem; font-weight: 900; line-height: 1; }
.g-cyan { color:#00d4e0; } .g-magenta { color:#ff2d95; } .g-amber { color:#ff8a00; }
.quote blockquote { font-size: 1.1rem; line-height: 1.55; margin: .8rem 0 1.2rem; }
.quote .who { display: flex; align-items: center; gap: .75rem; }
.quote .avatar { width: 42px; height: 42px; border-radius: 50%; display: grid;
                 place-items: center; font-weight: 800; color: #fff; font-size: .95rem; }
.a1 { background:#ff2d95; } .a2 { background:#00d4e0; color:#0a1030; }
.a3 { background:#ff8a00; color:#0a1030; }
.a6 { background:linear-gradient(100deg,#00d4e0 0%,#ff2d95 52%,#ff8a00 100%); }
.quote .name { font-weight: 700; font-size: .95rem; }
.quote .role { font-size: .85rem; opacity: .7; }
@media (max-width: 860px) { .quotes { grid-template-columns: 1fr; } }

CONTENT (my real testimonials — 2×2 grid, 4th slot is a CTA card):
eyebrow: FROM REAL USERS & CLIENTS
h2: "Demos get forgotten. / These get used weekly."
card 1 — glyph g-cyan   — John quote (AnglerCast accuracy, fishes weekly)
          avatar a2 "J" — John — Weekly angler · AnglerCast user
card 2 — glyph g-magenta — Heri quote (family app, intuitive interface)
          avatar a1 "H" — Heri — Family app client
card 3 — glyph g-amber  — Terry quote (AnglerCast testing, AI integration)
          avatar a3 "T" — Terry — AnglerCast tester
card 4 — CTA card: avatar a6 "+" — headline "Your project could be here."
          one line: "Tell me the task you dread." — button → #contact

4.8 Projects — YELLOW band section

Eyebrow (ink): // THINGS I'VE SHIPPED. Three projects, alternating
media/copy sides, each GIF inside a browser-mockup frame:


Story Pot — Mobile-First Memory Archive (storypot.gif,
story-pot.vercel.app)
The Sky Is Falling — 3D browser game (theskyisfalling.gif,
the-sky-falling.vercel.app)
GrumpyBot — No-Code RAG Chatbot Platform (grumpybot.gif,
grumpybot.fyi/signup)
Keep each project's existing copy, tech-stack pills, and "What I learned"
line (style it with a thick ink left border on yellow). Blue "Live link"
buttons.


4.9 By the numbers (white section)

Four huge stat counters (count-up on scroll): 25+ Years Experience ·
16 Projects Shipped · 4+ Credentials Earned & Active · 1 Apprenticeship In
Progress. Numbers colored cyan / yellow→use orange on white / pink / blue.

4.10 Education + Journey (cloud section)

EDUCATION SECTION — "How I got here" → spectrum band + icon-card row
(Journey/timeline section after it keeps its current background — the
rainbow→plain flip IS the separation. No dividers.)

.edu-band { background: linear-gradient(100deg,#00d4e0 0%,#ff2d95 52%,#ff8a00 100%);
            color: #fff; padding: clamp(3.5rem,8vw,6rem) 2rem; }
.edu-band .eyebrow { text-transform: uppercase; letter-spacing: .24em;
                     font-size: .8rem; font-weight: 700; text-align: center;
                     color: #fff; opacity: .92; }
.edu-band h2 { text-align: center; color: #fff;
               font-size: clamp(2.2rem, 5.4vw, 3.8rem); line-height: 1.02;
               margin: .6rem auto 2.6rem; }

.edu-row { display: grid; grid-template-columns: repeat(7, minmax(0,1fr));
           gap: 18px; max-width: 1400px; margin: 0 auto; }
.mini-card { background: #fff; color: #0a1030; border-radius: 18px;
             padding: 20px 16px; text-align: center;
             border: 1px solid rgba(6,17,31,.08);
             box-shadow: 0 18px 44px -24px rgba(6,17,31,.45);
             transition: transform .2s ease, box-shadow .2s ease; }
.mini-card:hover { transform: translateY(-5px); }
.icon-tile { width: 60px; height: 60px; border-radius: 14px; margin: 0 auto 12px;
             display: grid; place-items: center; font-size: 26px; color: #fff;
             background: linear-gradient(135deg,#063bff,#ff0a78,#ff7a00); }
.mini-card h3 { font-size: 15px; font-weight: 900; line-height: 1.15; margin: 0 0 6px; }
.mini-card p  { font-size: 12.5px; line-height: 1.4; opacity: .75; margin: 0; }
@media (max-width:1150px){ .edu-row { grid-template-columns: repeat(4,1fr); } }
@media (max-width:720px) { .edu-row { grid-template-columns: repeat(2,1fr); } }

Keep the existing hover-expand ink overlay on each card if desired
(absolute inset-0 panel) — but trim overlay body text to ~2 short lines
at this card size.

HEADER (the "More results. Less busywork." pattern, adapted):
eyebrow: // HOW I GOT HERE
h2: "Always studying. Always shipping."
       (alt: "More credentials. More shipped work." — pick what sounds like you)

THE 7 CARDS (in this order):
🎓 Next Chapter Apprenticeship — Full-stack + AI, in progress
🔐 (ISC)² CC — Certified · valid 2026–2029
🌐 W3Schools Path — JS · Python, active
💻 LaunchCode — JS fundamentals, independent study
🔍 Google & Mozilla MDN — Web dev badges, Apr 2026
🏛️ Boston University — MS Criminal Justice, 2010–2012
⚓ Mitchell College — BA Professional Studies, 2003–2006

Eyebrow: // THE PATH THAT GOT ME HERE (b) vertical timeline with
a rainbow gradient fill line (cyan→yellow→orange→pink→blue): 1998 Human
Services → 2003 Mitchell → 2010 BU → 2012 Agency Owner → 2015 DHS → 2026
ISC² CC → Now: AI Collaborator · Software Engineer (yellow "← I am here"
badge). Stagger-reveal on scroll.

4.11 Community build (white section)

Eyebrow (pink): // HUM LLC GIVES BACK. Title: "Useful apps for real
communities." Copy left; right: AnglerCast card as a blue→deep-blue gradient
card, white text, ⚓ mark, data-source chips (GBIF, OBIS, Open-Meteo &
Forecast, USGS, NOAA, OpenAI), "Join AnglerCast" → anglercast.fyi/signup.

4.12 Chatbot embed (cloud section)

Title: "Need a Chatbot? Ask me about clown day below." Sub: "This is a chat
bot for a Dog Walking business based on their funny Handbook." GrumpyBot
iframe inside a browser-mockup frame (iframe src in the old index.html —
origin-locked to jacquelinedelgado.com, expect it blank on localhost).

4.13 Contact — final CTA gradient band

Eyebrow (cyan): // HUM LLC. Title: "Let's build something great together."
Glass info cards: hum@jacquelinedelgado.com · (860) 235-9365 ·
github.com/jdbostonbu-ops · g.dev/jd-software-eng · New London, CT.
Yellow button: "Email me".

4.14 Footer (ink)

© 2026 Jacqueline Delgado. Yellow links.

5. MOTION & QUALITY FLOOR


Marquee scroll, signature-gradient pulse, count-up stats, timeline stagger,
card hover lift (translateY(-2px→-6px) + shadow). One orchestrated feel —
no scroll-jacking, no parallax.
ALL animation disabled under prefers-reduced-motion: reduce (marquee
renders as a static wrapping row; counters show final values).
Visible :focus-visible (3px cyan outline), semantic landmarks, alt text on
GIFs, iframe title. Responsive: 1150px and 720px breakpoints; automation
grid 7→4→2→1.
GitHub Pages ready: output: 'export', keep public/CNAME
(jacquelinedelgado.com) and public/.nojekyll.


6. DO NOT


Do not reuse the old portfolio's section layout or its big 4-column card
wall as the primary pattern.
No cream/terracotta/serif "AI default" palette. No colors outside the
token list. No stock imagery. No new copy claims — content above is the
source of truth. 

7. Coding constraints

no var, no any, closure based functions, prevent XSS in forms so apply in user input textContent if you can, use ID in any form labels if any.