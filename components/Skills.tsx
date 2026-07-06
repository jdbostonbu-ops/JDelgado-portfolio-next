import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const skills = [
  { icon: "⚛️", title: "Full-Stack Development", body: "Building accessible, modern interfaces with HTML, CSS, and JavaScript wired to robust API-driven backends.", tags: ["React", "Next.js", "HTML5", "CSS3"] },
  { icon: "🤖", title: "AI Integration", body: "Integrating large language models into professional workflows to build intelligent, decision-supporting tools.", tags: ["Anthropic", "Gemini", "MCP"] },
  { icon: "☁️", title: "Cloud & DevOps", body: "Deploying scalable services with cloud-native architecture and automated CI/CD pipelines.", tags: ["AWS", "CI/CD", "GitHub"] },
  { icon: "🗄️", title: "Backend & Databases", body: "Designing API-driven data flows and managing real-time synchronization across distributed systems.", tags: ["SQL", "Firebase", "REST APIs"] },
  { icon: "🐍", title: "Python & Logic", body: "Foundational work in data structures, automation scripting, and computational thinking for AI workflows.", tags: ["Python", "JavaScript", "ES6+"] },
  { icon: "🔐", title: "Cybersecurity", body: "(ISC)² Certified in Cybersecurity (CC) — applying security-first thinking to every system I build.", tags: ["ISC2 CC", "Risk Analysis"] },
  { icon: "🌍", title: "Geospatial Engineering", body: "Building dynamic mapping interfaces with custom 3D globe visualizations and logic-driven markers.", tags: ["Mapbox GL", "Geo APIs"] },
  { icon: "⚡", title: "Workflow Automation", body: "Connecting third-party tools and APIs to streamline operations through low-code automation platforms.", tags: ["N8n", "Zapier", "MCP"] },
];

export default function Skills() {
  return (
    <Reveal id="skills" className="section section--white">
      <div className="section-head section-head--left">
        <span className="eyebrow mono">{"// skills"}</span>
        <h2 className="section-title">What I&apos;m building with.</h2>
      </div>
      <div className="automation-grid skills-grid">
        {skills.map((s) => (
          <TiltCard key={s.title}>
            <div className="icon-box" aria-hidden="true">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <div className="tags">
              {s.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </Reveal>
  );
}
