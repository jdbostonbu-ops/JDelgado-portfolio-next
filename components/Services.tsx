import Reveal from "./Reveal";

const services = [
  { icon: "🤖", tag: "Featured", title: "AI & Chatbot Tools", body: "Embedded chatbots, RAG assistants, AI-powered workflows, and custom tools that answer from your content and support real operations.", tags: ["GrumpyBot", "RAG", "OpenAI"], slot: "feature" },
  { icon: "📨", tag: "Lead Capture", title: "Lead Capture", body: "Contact form submissions, ad platform leads, routing logic, notifications, and data capture that keeps every inquiry traceable.", tags: ["Forms", "Ad Leads", "CRM Flow"], slot: "blue" },
  { icon: "📅", tag: "Bookings", title: "Booking Systems", body: "Cal.com booking pages, calendar booking flows, intake questions, confirmations, and handoffs to the tools your business already uses.", tags: ["Cal.com", "Calendars", "Intake"], slot: "magenta" },
  { icon: "🌐", tag: "Launch", title: "Landing Pages", body: "Focused pages for launches, services, portfolios, and local businesses with responsive layouts and clear conversion paths.", tags: ["HTML/CSS/JS", "Next.js", "Vercel"], slot: "amber" },
  { icon: "⚡", tag: "Workflow", title: "Automation", body: "Zapier and workflow automation that connects forms, bookings, emails, spreadsheets, databases, and follow-up actions.", tags: ["Zapier", "N8n", "APIs"], slot: "cyan" },
  { icon: "📲", tag: "Apps", title: "Mobile & Web Apps", body: "Mobile-first PWAs, React Native builds, dashboards, portals, and internal systems that turn repeated tasks into usable software.", tags: ["PWA", "React Native", "Next.js"], slot: "gold" },
  { icon: "🗂️", tag: "Custom", title: "Custom Builds", body: "Static directories, resource lists, service catalogs, documentation hubs, and organized public information built for speed and clarity.", tags: ["Static Sites", "Directories", "SEO"], slot: "ink" },
];

export default function Services() {
  return (
    <Reveal id="services" className="section section--cloud">
      <div className="section-head section-head--left">
        <span className="eyebrow mono">{"// services"}</span>
        <h2 className="section-title">What I can build for you.</h2>
        <p className="section-subtitle">
          Websites, bookings, and automations that run your small business while you do the
          actual work.
        </p>
      </div>
      <div className="bento">
        {services.map((s) => (
          <article
            key={s.title}
            className={`service-card service-bento-card slot-${s.slot}`}
          >
            <div className="service-card-top">
              <span className="service-icon" aria-hidden="true">{s.icon}</span>
              <span className="service-number mono">{s.tag}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <div className="service-tags">
              {s.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
