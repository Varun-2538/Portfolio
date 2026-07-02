"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { scatter } from "@/lib/content";

const chips: {
  style: React.CSSProperties;
  content: JSX.Element;
  className?: string;
}[] = [
  {
    style: { left: "2%", top: "6%" },
    className: "chip gold",
    content: (
      <>
        <div className="tag">🏆 1st in problem statement</div>
        <div className="body">
          Rajasthan Police Hackathon 1.0 — ReportEase, 2nd runner-up among
          1,665 teams.
        </div>
      </>
    ),
  },
  {
    style: { right: "4%", top: "2%" },
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
    style: { left: "8%", bottom: "10%" },
    className: "chip",
    content: (
      <>
        <div className="tag">ETH India '24</div>
        <div className="body">
          Okto Track winner ($2,500) — plus Shardeum Track winner at Layer
          2.0 Hackathon.
        </div>
      </>
    ),
  },
  {
    style: { right: "2%", bottom: "16%" },
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
    style: { left: "26%", top: "0%" },
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
    style: { left: "4%", top: "33%" },
    className: "chip gold",
    content: (
      <>
        <div className="tag">🏆 1st position</div>
        <div className="body">
          Barclays Project Expo — 1st among 400 teams.
        </div>
      </>
    ),
  },
  {
    style: { right: "26%", bottom: "0%" },
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

// Convergence only plays out in the back half of the pinned scroll range —
// chips stay put while the section is pinned/fully in view, and finish
// collapsing right as the pin releases and the next section takes over.
const COLLAPSE_START = 0.5;

export default function Collage() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const collageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const collage = collageRef.current;
    if (!track || !collage) return;
    const motionOK = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    const wideEnough = window.matchMedia("(min-width: 821px)").matches;
    if (!motionOK || !wideEnough) return;

    let nodes: { el: HTMLElement; offX: number; offY: number }[] = [];
    let target = 0;
    let smooth = 0;
    let rafId = 0;

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

    // Raw scroll progress across the pin: 0 while the track's top hasn't
    // reached the viewport top yet, 1 once its bottom reaches the viewport
    // bottom (the exact moment the pin releases).
    const computeTarget = () => {
      const rect = track.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      target = scrollable > 0
        ? Math.min(1, Math.max(0, -rect.top / scrollable))
        : 0;
    };

    const apply = (p: number) => {
      const raw = Math.min(
        1,
        Math.max(0, (p - COLLAPSE_START) / (1 - COLLAPSE_START))
      );
      const eased = raw < 0.5
        ? 2 * raw * raw
        : 1 - Math.pow(-2 * raw + 2, 2) / 2;

      // Uniform scale-toward-center: every chip's offset is reduced by the
      // same ratio, so their relative spacing just shrinks proportionally
      // instead of distorting — chips that don't overlap at rest can't
      // suddenly overlap each other, they just gather inward together.
      // Capped well short of 1 so they end up loosely gathered around the
      // orb, not stacked on top of it.
      const PULL = 0.22;
      nodes.forEach(({ el, offX, offY }) => {
        const tx = -offX * eased * PULL;
        const ty = -offY * eased * PULL;
        el.style.transform = `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) scale(${(1 - eased * 0.06).toFixed(3)})`;
        el.style.opacity = `${(1 - eased * 0.28).toFixed(2)}`;
      });
    };

    // Lag the applied value behind the scroll-derived target, like GSAP's
    // scrub — smooths out fast/jerky scroll input into a fluid motion.
    const tick = () => {
      smooth += (target - smooth) * 0.12;
      apply(smooth);
      if (Math.abs(target - smooth) > 0.0005) {
        rafId = requestAnimationFrame(tick);
      } else {
        smooth = target;
        apply(smooth);
        rafId = 0;
      }
    };

    const onScroll = () => {
      computeTarget();
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const onResize = () => {
      measure();
      computeTarget();
      apply(smooth);
    };

    measure();
    computeTarget();
    apply(target);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="scatter-track" id="scatter" ref={trackRef}>
      <div className="scatter-pin">
        <Reveal className="section-head">
          <div className="kicker">{scatter.kicker}</div>
          <h2>{scatter.heading}</h2>
        </Reveal>
        <div className="collage" ref={collageRef}>
          {chips.map((c, i) => (
            <div key={i} className={c.className} style={c.style}>
              {c.content}
            </div>
          ))}
          <div className="collage-center">
            <div className="orb">V</div>
            <p>{scatter.centerLine}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
