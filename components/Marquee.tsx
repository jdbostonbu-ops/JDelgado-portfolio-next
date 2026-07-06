const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Three.js",
  "React Native",
  "PWAs",
  "Firebase",
  "SQLite",
  "Neon Postgres",
  "PostgreSQL",
  "Mapbox GL",
  "Zapier",
  "N8n",
  "RAG Chatbots",
  "Python",
  "FastAPI",
  "Express",
  "Node.js",
  "Git & GitHub",
  "GSAP",
  "TDD",
  "IndexedDB",
  "Web Speech API",
  "OpenAI",
  "Gemini",
  "MCP",
];

function MarqueeTrack() {
  return (
    <>
      {marqueeItems.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <section className="marquee-band" aria-label="Currently building with">
      <div className="marquee-track">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </section>
  );
}
