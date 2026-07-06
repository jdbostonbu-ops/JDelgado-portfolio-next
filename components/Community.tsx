import Reveal from "./Reveal";

export default function Community() {
  return (
    <Reveal id="community" className="section section--white">
      <div className="community-shell">
        <div className="community-copy">
          <p className="eyebrow mono pink-text">{"// Hum LLC gives back"}</p>
          <h2 className="section-title">Useful apps for real communities.</h2>
          <p className="section-subtitle">
            Hum LLC gives back by building tools that help people make better decisions with
            honest, practical data. AnglerCast is one example: a fishing app created for the
            angler community that turns reliable public records into clear seasonal insight.
          </p>
          <a
            href="https://www.anglercast.fyi/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--blue"
          >
            Join AnglerCast
          </a>
        </div>
        <article className="community-app-card" aria-label="AnglerCast app showcase">
          <div className="community-card-top">
            <div>
              <p className="community-app-label mono">Featured app</p>
              <h3>AnglerCast</h3>
            </div>
            <span className="community-app-mark" aria-hidden="true">⚓</span>
          </div>
          <p>
            Shows where fish have been recorded by season using real public occurrence data,
            sample sizes, confidence signals, and plain-language AI explanations that explain
            the numbers without inventing them.
          </p>
          <div className="community-data-grid">
            {["GBIF", "OBIS", "Open-Meteo & Forecast", "USGS", "NOAA", "OpenAI"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="community-proof">
            <div>
              <strong>For anglers</strong>
              <span>Historical sightings, seasonal patterns, and transparent context.</span>
            </div>
            <div>
              <strong>Built responsibly</strong>
              <span>No guarantees, no invented catches, just data-informed guidance.</span>
            </div>
          </div>
        </article>
      </div>
    </Reveal>
  );
}
