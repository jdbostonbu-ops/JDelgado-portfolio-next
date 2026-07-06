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
          <h2 className="section-title">
            I notice everything. I&apos;ve stopped apologizing for it.
          </h2>
          <p className="about-lede">
            Federal behavior-detection training does not come with an off switch. At the
            farmers market I know which vendor runs out of tomatoes first. In line at the
            bank I&apos;ve solved a crime that hasn&apos;t happened yet. This was becoming a
            problem — so I aimed it at software, the one industry where noticing everything
            is billable. Now I catch the workflow that fails silently, the dashboard
            that&apos;s green and lying, the &quot;quick task&quot; that eats your Tuesday. Your
            Tuesday called. It wants a robot.
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
