"use client";

import { useEffect, useRef, useState } from "react";

const stops = [
  { year: "1998", title: "Worked in Human Services", sub: "Certified Nurses Aide · HIV/AIDS Educator · Drug Treatment Advocate · Case Manager · Risk Reduction & Harm Reduction Educator & Outreach Worker · Clinical Operating Assistant · Program Coordinator & Phlebotomist" },
  { year: "2003", title: "Mitchell College", sub: "BA Professional Studies · Business concentration." },
  { year: "2010", title: "Boston University", sub: "Master of Science in Criminal Justice · Systems thinking at scale" },
  { year: "2012", title: "Agency Owner", sub: "14+ years · Risk modeling, data systems, workflow architecture. Worked with the disabled & aging populations. Developed own software solutions for business management & marketing." },
  { year: "2015", title: "Dept. of Homeland Security", sub: "Behavior Detection & Analysis Officer · Real-time anomaly detection" },
  { year: "2026", title: "ISC² CC Certified · Google MDN Badges", sub: "Cybersecurity certification" },
  { year: "Now", title: "AI Collaborator · Software Engineer & Developer", sub: "Full-Stack · AI Collaborator", badge: "← I am here" },
];

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const [fired, setFired] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFired(true);
      setVisibleCount(stops.length);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setFired(true);
          stops.forEach((_, i) => {
            setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), 200 + i * 240);
          });
          observer.disconnect();
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="section section--cloud journey-section" ref={ref}>
      <div className="journey-block">
        <p className="eyebrow mono">{"// the path that got me here"}</p>
        <h2 className="journey-title">The path that got me here.</h2>
        <div className="tl-inner">
        <div className="tl-track" aria-hidden="true" />
        <div className="tl-fill" style={{ height: fired ? "100%" : 0 }} aria-hidden="true" />
        {stops.map((s, i) => (
          <div key={s.year} className={`tl-item${i < visibleCount ? " tl-vis" : ""}`}>
            <div className="tl-year mono">{s.year}</div>
            <div className="tl-dot-wrap" aria-hidden="true">
              <div className="tl-dot" />
            </div>
            <div className="tl-content">
              <div className="tl-title">{s.title}</div>
              <div className="tl-sub">{s.sub}</div>
              {s.badge && <div className="tl-badge">{s.badge}</div>}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
