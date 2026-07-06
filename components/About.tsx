import Reveal from "./Reveal";

const chapters = [
  {
    number: "01",
    title: "Entrepreneur",
    sub: "2012-2024",
    back: "Running an agency taught me to design intake pipelines, vendor handoffs, claims workflows, and resilient systems under real business pressure.",
  },
  {
    number: "02",
    title: "Behavior Detection & Analysis",
    sub: "DHS",
    back: "DHS work shaped how I think about anomaly detection, threat modeling, precision, and decisions made from imperfect real-time signals.",
  },
  {
    number: "03",
    title: "AI Software Engineer",
    sub: "Next Chapter",
    back: "The apprenticeship gives my systems background modern syntax: full-stack development, AI integration, cloud infrastructure, and workflow automation.",
  },
];

export default function About() {
  return (
    <Reveal id="about" className="section section--pink">
      <div className="about-layout">
        <div>
          <span className="eyebrow mono yellow-text">{"// a different path"}</span>
          <h2 className="section-title">25 years of systems thinking. New syntax.</h2>
          <p className="about-lede">
            I&apos;m a results-driven engineer with a background in data-driven
            decision-making, risk analysis, and behavioral pattern recognition. After 12
            years running my own agency, behavior detection and analysis work with DHS, and
            my Next Chapter apprenticeship, I&apos;m channeling that same analytical mindset
            into building scalable, AI-powered applications for real operations.
          </p>
        </div>
        <div className="about-mini-stack">
        {chapters.map((c) => (
          <article key={c.number} className="about-mini-card" tabIndex={0}>
            <div className="about-card-inner">
              <div className="about-card-face about-card-front">
                <div className="flip-number mono">{c.number}</div>
                <h3>{c.title}</h3>
                <p className="about-mini-sub">{c.sub}</p>
              </div>
              <div className="about-card-face about-card-back">
                <p>{c.back}</p>
              </div>
            </div>
          </article>
        ))}
        </div>
      </div>
    </Reveal>
  );
}
