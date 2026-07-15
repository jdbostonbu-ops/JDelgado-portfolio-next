const cards = [
  {
    icon: "🎓", year: "", name: "Next Chapter Apprenticeship",
    tags: [["Active", true], ["Full-Stack", false], ["AWS", false]],
    hTag: "// paid apprenticeship", hName: "Next Chapter Software Engineering",
    hBody: "Full-stack + AI",
    summary: "",
    hSource: "",
  },
  {
    icon: "🔐", year: "", name: "(ISC)² Cybersecurity CC",
    tags: [["Certified", true], ["Risk Analysis", false]],
    hTag: "// active certification", hName: "(ISC)² Certified in Cybersecurity",
    hBody: "Valid 2026-2029",
    summary: "",
    hSource: "",
  },
  {
    icon: "🌐", year: "", name: "W3Schools Certification Path",
    tags: [["Active", true], ["JS", false], ["Python", false]],
    hTag: "// certification path", hName: "W3Schools Front-End & Logic Path",
    hBody: "JS and Python path, active",
    summary: "",
    hSource: "",
  },
  {
    icon: "💻", year: "", name: "LaunchCode — JS Fundamentals",
    tags: [["Active", true], ["Independent Study", false]],
    hTag: "// independent study", hName: "LaunchCode JavaScript Fundamentals",
    hBody: "JS fundamentals, independent study",
    summary: "",
    hSource: "",
  },
  {
    icon: "🔍", year: "APR 2026", name: "Google & Mozilla MDN",
    tags: [["Badges", true], ["Web Dev", false]],
    hTag: "// google web dev curriculum", hName: "Google & Mozilla MDN Badges",
    hBody: "",
    summary: "",
    hSource: "g.dev/jd-software-eng",
  },
  {
    icon: "🏛️", year: "2010 – 2012", name: "Boston University",
    tags: [["MS Degree", false], ["Criminal Justice", false]],
    hTag: "// graduate degree", hName: "MCJ — Criminal Justice",
    hBody: "2010-2012",
    summary: "",
  },
  {
    icon: "⚓", year: "2003 – 2006", name: "Mitchell College",
    tags: [["BA Degree", false], ["Concentration in Business", false]],
    hTag: "// undergraduate degree", hName: "Concentration in Business",
    hBody: "Magna cum laude",
    summary: "",
  },
];

export default function Education() {
  return (
    <section id="education" className="edu-band">
      <p className="eyebrow mono">{"// how i got here"}</p>
      <h2>
        Every stop taught something.
        <br />
        The receipts are below.
      </h2>
      <div className="edu-row">
        {cards.map((c) => (
          <article key={c.name} className="mini-card" tabIndex={0}>
            <div className="edu-default">
              <span className="icon-tile" aria-hidden="true">{c.icon}</span>
              <h3>{c.name}</h3>
              {c.summary && <p>{c.summary}</p>}
            </div>
            <div className="edu-hover">
              <div className="hover-tag mono">{c.hTag}</div>
              <div className="hover-name">{c.hName}</div>
              <div className="hover-body">{c.hBody}</div>
              {c.hSource && <div className="hover-source">{c.hSource}</div>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
