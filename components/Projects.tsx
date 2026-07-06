import Reveal from "./Reveal";

const projects = [
  {
    img: "/storypot.gif",
    alt: "Story Pot project preview",
    title: "Story Pot — Mobile-First Memory Archive",
    paras: [
      "A mobile-first PWA for families and small teams who want to capture the recipes, songs, stories, and culture rituals that vanish when the people who hold them are gone.",
      "Story Pot records audio and video directly in the browser, transcribes speech in 67 languages via the Web Speech API, and stores everything locally on your device with no account, no server, and no cloud. A two-mode Family / Team toggle switches the archive between parallel namespaces, so the same app can preserve a grandmother's recipes or a small team's culture rituals.",
    ],
    stack: ["Vanilla JavaScript", "HTML5", "CSS3", "IndexedDB", "localStorage", "Web Audio API", "MediaRecorder API", "Web Speech API", "PWA", "GitHub Pages", "Vercel"],
    learned:
      "How to architect a production PWA from five closure-based factory functions with two-tier storage, keeping lightweight metadata in localStorage and heavy media blobs in IndexedDB so the UI renders instantly while megabyte-sized recordings load only when needed.",
    link: "https://story-pot.vercel.app/",
  },
  {
    img: "/theskyisfalling.gif",
    alt: "The Sky Is Falling project preview",
    title: "The Sky Is Falling",
    paras: [
      "A relaxed 3D browser game built on a Vibe Demo Friday, for anyone curious whether I can build outside standard full-stack CRUD work.",
      "Players drag cartoon dinosaurs around a 3D world and try to catch falling geometric shapes in their baskets. The competition is in who scores highest on the leaderboard. Scores save to a persistent SQLite leaderboard through a real Express backend, demonstrating a complete full-stack round-trip from React state to a typed API and back.",
    ],
    stack: ["React 18", "TypeScript", "Three.js", "Vite", "Express", "Node.js", "SQLite", "Web Audio API"],
    learned:
      "How to combine declarative React rendering with Three.js's imperative 60fps animation loop using useRef for per-frame data and useState only for things that need to trigger re-renders.",
    link: "https://the-sky-falling.vercel.app",
  },
  {
    img: "/grumpybot.gif",
    alt: "GrumpyBot project preview",
    title: "GrumpyBot — No-Code RAG Chatbot Platform",
    paras: [
      "A no-code SaaS platform for students, new coders, and new entrepreneurs who want a real working AI chatbot for a portfolio, landing page, or first client before they have learned how to build one from scratch. I built GrumpyBot so beginners can ship a real working AI chatbot on their portfolio or landing page while they're still learning HTML, CSS, and iframe embedding. The skill they exercise is the embedding work — the bot itself just works.",
      "Users upload .md, .txt, or .json documents and get back a working bot that answers only from the uploaded content. Behind the embed, I made sure that if the answer is not in the documents, the bot says it does not know.",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Neon Postgres", "pgvector", "Prisma ORM", "OpenAI", "gpt-4o-mini", "text-embedding-3-small", "SendGrid", "Cloudflare DNS", "Vercel", "signed-cookie sessions", "bcrypt"],
    learned:
      "How to build a grounded RAG pipeline from scratch and enforce document-only answers at the architecture level.",
    link: "https://www.grumpybot.fyi/signup",
  },
];

export default function Projects() {
  return (
    <Reveal id="projects" className="section section--yellow">
      <div className="section-head section-head--left">
        <span className="eyebrow mono ink-text">{"// things i've shipped"}</span>
        <h2 className="section-title">This is the tasting menu. The kitchen is much bigger.</h2>
      </div>
      {projects.map((p, index) => (
        <div
          key={p.title}
          className={`portfolio-feature${index % 2 === 1 ? " portfolio-feature--reverse" : ""}`}
        >
          <div className="browser-mockup">
            <div className="browser-topbar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="portfolio-feature-media-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.alt} className="portfolio-feature-media" loading="lazy" />
            </div>
          </div>
          <div className="portfolio-feature-copy">
            <span className="portfolio-feature-kicker mono">Featured project</span>
            <h3>{p.title}</h3>
            {p.paras.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <div className="portfolio-tech-stack" aria-label="Tech stack">
              {p.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className="portfolio-learning">
              <strong>What I learned:</strong> {p.learned}
            </p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--blue"
            >
              Live link
            </a>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
