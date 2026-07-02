"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

const chips: {
  style: React.CSSProperties;
  depth: number;
  content: JSX.Element;
  className?: string;
}[] = [
  {
    style: { left: "2%", top: "6%", transform: "rotate(-4deg)" },
    depth: 18,
    className: "chip gold",
    content: (
      <>
        <div className="tag">🏆 1st place</div>
        <div className="body">
          Rajasthan Police Hackathon 1.0 — ReportEase, OCR-based FIR analysis
          at 98% accuracy.
        </div>
      </>
    ),
  },
  {
    style: { right: "4%", top: "2%", transform: "rotate(3deg)" },
    depth: 26,
    className: "chip mono",
    content: (
      <>
        <span className="k">fn</span> find_arb(pool: &amp;Pool) {"{"}
        <br />
        &nbsp;&nbsp;bellman_ford(graph)
        <br />
        &nbsp;&nbsp;.simulate(revm)
        <br />
        &nbsp;&nbsp;.bundle(flashbots)
        <br />
        {"}"}
      </>
    ),
  },
  {
    style: { left: "8%", bottom: "10%", transform: "rotate(2deg)" },
    depth: 30,
    className: "chip",
    content: (
      <>
        <div className="tag">ETHIndia</div>
        <div className="body">
          Track winner — plus Layer 2.0, ETHGlobal Delhi &amp; New Delhi
          builds.
        </div>
      </>
    ),
  },
  {
    style: { right: "2%", bottom: "16%", transform: "rotate(-3deg)" },
    depth: 22,
    className: "chip",
    content: (
      <>
        <div className="tag">Production</div>
        <div className="body">
          Full remittance product — web, backend, and React Native app —
          shipped end to end.
        </div>
        <div className="meta">US ↔ India rails</div>
      </>
    ),
  },
  {
    style: { left: "26%", top: "0%", transform: "rotate(1deg)" },
    depth: 14,
    className: "chip",
    content: (
      <>
        <div className="tag">Agentic AI</div>
        <div className="body">
          Enterprise intern-bot: Slack + GitLab agent with persistent
          markdown memory.
        </div>
      </>
    ),
  },
  {
    style: { right: "26%", bottom: "0%", transform: "rotate(2deg)" },
    depth: 16,
    className: "chip mono",
    content: (
      <>
        <span className="d">$</span> systemctl status arb
        <br />
        <span className="g">● active (running)</span>
        <br />
        <span className="d">uptime: it doesn&apos;t stop</span>
      </>
    ),
  },
];

export default function Collage() {
  const collageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const collage = collageRef.current;
    if (!collage) return;
    const motionOK = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    const wideEnough = window.matchMedia("(min-width: 821px)").matches;
    if (!motionOK || !wideEnough) return;

    const nodes = Array.from(
      collage.querySelectorAll<HTMLElement>(".chip")
    ).map((el) => ({
      el,
      base: el.style.transform,
      d: Number(el.dataset.depth) || 16,
    }));

    const onScroll = () => {
      const r = collage.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const p = (window.innerHeight / 2 - (r.top + r.height / 2)) /
        window.innerHeight;
      nodes.forEach(({ el, base, d }) => {
        el.style.transform = `${base} translateY(${(-p * d).toFixed(1)}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section">
      <Reveal className="section-head">
        <div className="kicker">The scatter</div>
        <h2>
          Hackathons, bots, rails, agents — <em>it all connects.</em>
        </h2>
      </Reveal>
      <Reveal>
        <div className="collage" ref={collageRef}>
          {chips.map((c, i) => (
            <div
              key={i}
              className={c.className}
              style={c.style}
              data-depth={c.depth}
            >
              {c.content}
            </div>
          ))}
          <div className="collage-center">
            <div className="orb">V</div>
            <p>
              One engineer connects it all —<br />
              and puts it to work.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
