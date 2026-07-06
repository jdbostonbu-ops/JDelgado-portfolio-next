import Reveal from "./Reveal";

const shipped = [
  ["🌍", "Mapbox GL JS"],
  ["🔥", "Firebase Realtime DB"],
  ["⚡", "HTML · CSS · JS"],
  ["🐙", "Git · GitHub"],
  ["🎞️", "GSAP · ScrollTrigger"],
  ["⚛️", "React · JSX"],
  ["🗄️", "SQLite · Backend APIs"],
  ["🤖", "Gemini API · Live Crypto ticker · Google Search"],
  ["🤖", "React Native · Python · Rest APIs"],
  ["📲", "PWAs · Mobile Apps · Web APIs · IndexedDB"],
  ["🎮", "React · TSX · Three.js · 3D Game · Express · Node.js"],
  ["📲", "React Native (Expo) · Axios for API requests · Leaflet · Mobile Apps · OpenStreet Map"],
  ["📲", "React Native (Expo) · Mobile Apps · FastAPI · Live Database"],
  ["📲", "Next.js Web Framework · Node.js · Express · Web Apps"],
  ["📲", "Neon DB · PostgreSQL"],
  ["📲", "Test Driven Development (TDD) · Spec Driven Development"],
  ["📲", "RAG · Embedded iframe · Chatbot · Zapier · Cal"],
];

const studying = [
  ["☁️", "AWS Cloud Labs"],
  ["🐍", "Python Fundamentals"],
  ["⚡", "N8n · CI/CD · MCP"],
];

export default function SkillsContext() {
  return (
    <Reveal id="skills-context" className="section section--cloud">
      <div className="section-head">
        <span className="eyebrow mono">{"// skills in context"}</span>
        <h2 className="section-title">Building with vs. actively learning.</h2>
        <p className="section-subtitle">
          Honest signal of where I am right now — no fake progress bars.
        </p>
      </div>
      <div className="skills-two-col">
        <div className="skills-col-card">
          <div className="skills-col-header">
            <div className="skills-col-dot using" aria-hidden="true" />
            <span className="skills-col-title">Currently building with</span>
          </div>
          {shipped.map(([icon, name]) => (
            <div key={name} className="skill-row">
              <span className="skill-row-icon" aria-hidden="true">{icon}</span>
              <span className="skill-row-name">{name}</span>
              <span className="skill-row-tag shipped">Shipped</span>
            </div>
          ))}
          <div className="skills-col-footer mono">{"// proven in deployed projects"}</div>
        </div>
        <div className="skills-col-card">
          <div className="skills-col-header">
            <div className="skills-col-dot learning" aria-hidden="true" />
            <span className="skills-col-title">Actively studying now</span>
          </div>
          {studying.map(([icon, name]) => (
            <div key={name} className="skill-row">
              <span className="skill-row-icon" aria-hidden="true">{icon}</span>
              <span className="skill-row-name">{name}</span>
              <span className="skill-row-tag active">In progress</span>
            </div>
          ))}
          <div className="skills-col-footer mono">
            {"// Phase I · Next Chapter Apprenticeship"}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
