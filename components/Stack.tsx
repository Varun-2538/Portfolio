"use client";

import { useRef, useState } from "react";
import { surfaces } from "@/lib/content";
import Reveal from "./Reveal";

export default function Stack() {
  const [openIndex, setOpenIndex] = useState(0);
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="section" id="stack" style={{ background: "var(--ink-2)" }}>
      <Reveal className="section-head">
        <div className="kicker">Surfaces</div>
        <h2>
          Wherever the stack is, <em>I am too.</em>
        </h2>
      </Reveal>
      <Reveal>
        <div className="surfaces">
          {surfaces.map((s, i) => {
            const isOpen = openIndex === i;
            const innerEl = bodyRefs.current[i];
            const maxHeight = isOpen
              ? `${innerEl?.scrollHeight ?? 200}px`
              : "0px";
            return (
              <div className={`surface${isOpen ? " open" : ""}`} key={s.name}>
                <button
                  className="surface-head"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="icon">{s.icon}</span>
                  <span className="name">{s.name}</span>
                  <span className="plus">+</span>
                </button>
                <div className="surface-body" style={{ maxHeight }}>
                  <div
                    className="surface-body-inner"
                    ref={(el) => {
                      bodyRefs.current[i] = el;
                    }}
                  >
                    {s.desc}
                    <div className="stack">
                      {s.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
