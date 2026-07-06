import Reveal from "./Reveal";

const quotes = [
  {
    glyph: "g-cyan",
    avatar: "a2",
    initials: "J",
    body: "AnglerCast is very accurate on fish historical sightings. As a fisherman who fishes weekly, I rely on it for practical insight before heading out. I asked Jacqueline to add another feature, and she was happy to make new improvements.",
    author: "John",
    role: "Weekly angler · AnglerCast user",
  },
  {
    glyph: "g-magenta",
    avatar: "a1",
    initials: "H",
    body: "The ease of use and how it addresses elements that I didn't think about until I used the app that Jacqueline created for me and my family. It is not overly complicated, and people can put it to use just by following the very intuitive interface.",
    author: "Heri",
    role: "Family app client",
  },
  {
    glyph: "g-amber",
    avatar: "a3",
    initials: "T",
    body: "I had the opportunity to test Jacqueline's AnglerCast application and was genuinely impressed. The application was easy to navigate, thoughtfully designed, and showed a strong understanding of AI integration, real-world data, and user experience. It's clear she builds practical software with attention to detail, and I look forward to seeing what she creates next.",
    author: "Terry",
    role: "AnglerCast tester",
  },
];

export default function Testimonials() {
  return (
    <Reveal id="testimonials" className="testi">
      <p className="eyebrow mono">From real users &amp; clients</p>
      <h2>
        Demos get forgotten.
        <br />
        These get used weekly.
      </h2>
      <div className="quotes">
        {quotes.map((q) => (
          <article key={q.author} className="quote">
            <blockquote>
              <span className={`qmark ${q.glyph}`}>&ldquo;</span>
              {q.body}
              <span className={`qmark ${q.glyph}`}>&rdquo;</span>
            </blockquote>
            <div className="who">
              <span className={`avatar ${q.avatar}`} aria-hidden="true">{q.initials}</span>
              <div>
                <div className="name">{q.author}</div>
                <div className="role">{q.role}</div>
              </div>
            </div>
          </article>
        ))}
        <article className="quote quote-cta">
          <div className="who">
            <span className="avatar a6" aria-hidden="true">+</span>
            <div>
              <h3>Confess your most boring chore. I find them delicious.</h3>
            </div>
          </div>
          <a href="#contact" className="button button--blue">Let&apos;s Connect</a>
        </article>
      </div>
    </Reveal>
  );
}
