import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Reveal id="contact" className="section section--gradient">
      <div className="section-head">
        <span className="eyebrow mono">{"// Hum LLC"}</span>
        <h2 className="section-title">
          I did behavior detection for the federal government.
        </h2>
        <p className="section-subtitle">
          I already know you&apos;re going to email me. Save us both the suspense.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-item">
          <div className="contact-label mono">Email</div>
          <div className="contact-value">
            <a href="mailto:hum@jacquelinedelgado.com">hum@jacquelinedelgado.com</a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-label mono">Phone</div>
          <div className="contact-value">
            <a href="tel:+18602359365">(860) 235-9365</a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-label mono">GitHub</div>
          <div className="contact-value">
            <a href="https://github.com/jdbostonbu-ops" target="_blank" rel="noopener noreferrer">
              jdbostonbu-ops
            </a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-label mono">Portfolio</div>
          <div className="contact-value">
            <a href="https://g.dev/jd-software-eng" target="_blank" rel="noopener noreferrer">
              g.dev/jd-software-eng
            </a>
          </div>
        </div>
        <div className="contact-item contact-item--wide">
          <div className="contact-label mono">Location</div>
          <div className="contact-value">New London, CT</div>
        </div>
      </div>
      <div className="contact-action">
        <a className="button button-yellow" href="mailto:hum@jacquelinedelgado.com">
          Email me
        </a>
      </div>
    </Reveal>
  );
}
