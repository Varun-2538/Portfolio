"use client";

import { useEffect, useRef, useState } from "react";
import { surfaces, stackSection } from "@/lib/content";
import Reveal from "./Reveal";

export default function Stack() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!items.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = surfaces[active];

  return (
    <section className="section" id="stack" style={{ background: "var(--desk)" }}>
      <Reveal className="section-head">
        <div className="kicker">{stackSection.kicker}</div>
        <h2>{stackSection.heading}</h2>
      </Reveal>

      <div className="surfaces-wrap">
        <div className="surfaces-sticky">
          <div className="surfaces-icon">{current.icon}</div>
          <h3>{current.name}</h3>
          <p>{current.desc}</p>
          <div className="stack">
            {current.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div className="surfaces-list">
          {surfaces.map((s, i) => (
            <div
              key={s.name}
              data-idx={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={`surface-item${active === i ? " active" : ""}`}
            >
              <div className="si-name">
                {s.icon} {s.name}
              </div>
              <div className="si-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
