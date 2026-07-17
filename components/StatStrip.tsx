"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 25, suffix: "+", top: "Years", bot: "Experience" },
  { target: 53, suffix: "", top: "Projects", bot: "Shipped" },
  { target: 4, suffix: "+", top: "Credentials", bot: "Earned & Active" },
  { target: 1, suffix: "", top: "Apprenticeship", bot: "In Progress" },
];

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function StatStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState(stats.map(() => "0"));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const showFinal = () =>
      setValues(stats.map((s) => `${s.target}${s.suffix}`));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showFinal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          stats.forEach((s, i) => {
            setTimeout(() => {
              const start = performance.now();
              const duration = 1800;
              const tick = (now: number) => {
                const p = Math.min((now - start) / duration, 1);
                setValues((prev) => {
                  const next = [...prev];
                  next[i] =
                    Math.round(easeOut(p) * s.target) + (p === 1 ? s.suffix : "");
                  return next;
                });
                if (p < 1) requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            }, i * 120);
          });
          observer.disconnect();
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section--white stat-strip" ref={ref}>
      <span className="eyebrow mono">{"// by the numbers"}</span>
      <div className="stat-grid">
        {stats.map((s, i) => (
          <div key={s.top} className="stat-item">
            <span className="stat-num">{values[i]}</span>
            <div className="stat-top">{s.top}</div>
            <div className="stat-bot">{s.bot}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
