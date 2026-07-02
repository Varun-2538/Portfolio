"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { scatter } from "@/lib/content";

const chips: {
  style: React.CSSProperties;
  variant?: "gold" | "mono";
  content: JSX.Element;
}[] = [
  {
    style: { left: "2%", top: "6%" },
    variant: "gold",
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
    style: { right: "4%", top: "2%" },
    variant: "mono",
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
    style: { left: "8%", bottom: "10%" },
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
    style: { right: "2%", bottom: "16%" },
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
    style: { left: "26%", top: "0%" },
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
    style: { right: "26%", bottom: "0%" },
    variant: "mono",
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

    let nodes: { el: HTMLElement; offX: number; offY: number }[] = [];

    const measure = () => {
      const cRect = collage.getBoundingClientRect();
      const cx = cRect.left + cRect.width / 2;
      const cy = cRect.top + cRect.height / 2;
      nodes = Array.from(collage.querySelectorAll<HTMLElement>(".chip")).map(
        (el) => {
          el.style.transform = "translate(0px,0px)";
          const r = el.getBoundingClientRect();
          return {
            el,
            offX: r.left + r.width / 2 - cx,
            offY: r.top + r.height / 2 - cy,
          };
        }
      );
    };

    let ticking = false;

    const update = () => {
      ticking = false;
      const r = collage.getBoundingClientRect();
      const start = window.innerHeight * 0.95;
      const end = window.innerHeight * 0.25;
      const raw = (start - r.top) / (start - end);
      const progress = Math.min(1, Math.max(0, raw));
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      nodes.forEach(({ el, offX, offY }) => {
        const tx = -offX * eased * 0.9;
        const ty = -offY * eased * 0.9;
        el.style.transform = `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) scale(${(1 - eased * 0.1).toFixed(3)})`;
        el.style.opacity = `${(1 - eased * 0.55).toFixed(2)}`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="section" id="scatter">
      <Reveal className="section-head">
        <div className="kicker">{scatter.kicker}</div>
        <h2>{scatter.heading}</h2>
      </Reveal>

      {/* Desktop: floating chips that converge toward the orb on scroll */}
      <div className="collage-desktop" ref={collageRef}>
        {chips.map((c, i) => (
          <div
            key={i}
            className={`chip${c.variant ? " " + c.variant : ""}`}
            style={c.style}
          >
            {c.content}
          </div>
        ))}
        <div className="collage-center">
          <div className="orb">V</div>
          <p>{scatter.centerLine}</p>
        </div>
      </div>

      {/* Phone: horizontal swipe carousel, native to touch scrolling */}
      <div className="collage-mobile">
        <div className="cm-track">
          <div className="cm-card cm-orb">
            <div className="orb">V</div>
            <p>{scatter.centerLine}</p>
          </div>
          {chips.map((c, i) => (
            <div
              key={i}
              className={`cm-card${c.variant ? " " + c.variant : ""}`}
            >
              {c.content}
            </div>
          ))}
        </div>
        <div className="cm-hint">Swipe to see more →</div>
      </div>
    </section>
  );
}
