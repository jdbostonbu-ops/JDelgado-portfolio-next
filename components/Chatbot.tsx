export default function Chatbot() {
  return (
    <section className="section section--cloud">
      <div className="section-head section-head--left">
        <h2 className="section-title">
          Need a Chatbot?
          <br />
          Radical, I know. Ask about clown day.
        </h2>
        <p className="section-subtitle">
          This is a chat bot for a Dog Walking business based on their funny Handbook.
        </p>
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
    </section>
  );
}
