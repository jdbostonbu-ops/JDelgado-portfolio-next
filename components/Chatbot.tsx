export default function Chatbot() {
  return (
    <section className="section section--cloud">
      <div className="chatbot-head">
        <div className="chatbot-head-copy">
          <span className="eyebrow mono">{"// live embed"}</span>
          <h2>
            Need a Chatbot?
            <br />
            Radical, I know.
          </h2>
          <p>
            I coded the RAG system behind GrumpyBot, then turned it into a no-code iframe embed so new coders can add a grounded chatbot to their own site. This demo answers from a mock dog walking business&apos;s very funny handbook.
          </p>
          <p>
            <strong>
              <em>Ask about clown day. Then ask about the stock market.</em>
            </strong>
          </p>
        </div>
        <div className="chatbot-mascot">
          <img src="/grumpybot-logo.svg" alt="" aria-hidden="true" />
        </div>
      </div>
      <div className="browser-mockup chatbot-frame-wrap">
        <div className="browser-topbar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <iframe
          title="GrumpyBot demo — dog walking business handbook chatbot"
          src="https://www.grumpybot.fyi/embed/jacqueline-website?t=eyJib3RJZCI6ImNtcjQyMzY3bDAwMDFqdjA0eXc0Z2dhb2ciLCJsb2NrZWRPcmlnaW4iOiJodHRwczovL2phY3F1ZWxpbmVkZWxnYWRvLmNvbSJ9.M2zBBclUSiz4PWXOqV17mzCMRQt5YW8b8E2qVF3-fFU"
        />
      </div>
      <a
        className="powered-by"
        href="https://www.grumpybot.fyi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/grumpybot-logo.svg" alt="" width="22" height="22" />
        Powered by <strong>GrumpyBot</strong> — the no-code chatbot platform I built
      </a>
    </section>
  );
}
