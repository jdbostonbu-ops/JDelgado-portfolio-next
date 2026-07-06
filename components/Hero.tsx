export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow cyan-text mono">{"// AI Collaborative Software Engineer"}</p>
        <h1>Hi, I&apos;m Jacqueline.</h1>
        <p className="hero-subhead">
          I build websites, booking systems, and automations for small businesses.
        </p>
        <div className="action-row">
          <a className="button button-yellow" href="#contact">
            Let&apos;s Connect
          </a>
          <a
            className="button button-outline"
            href="https://github.com/jdbostonbu-ops"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
          <a
            className="button button-outline"
            href="https://www.linkedin.com/in/jacqueline-delgado-6a7bb7250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
              />
            </svg>
            LinkedIn
          </a>
        </div>
        <p className="trust-line">
          ★★★★★ Founder &amp; Developer of GrumpyBot
        </p>
      </div>
      <div className="signature-gradient" aria-hidden="true" />
    </section>
  );
}
