"use client";

import { useEffect, useRef, useState } from "react";

/** Wraps a section; fades it in the first time it scrolls into view. */
export default function Reveal({
  id,
  className = "",
  children,
  as: Tag = "section",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      id={id}
      ref={ref as React.RefObject<HTMLElement & HTMLDivElement>}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
