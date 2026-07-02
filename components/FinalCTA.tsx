import Reveal from "./Reveal";
import { links } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section className="final" id="contact">
      <div
        className="cloud"
        style={{ width: 300, height: 100, top: "12%", animationDuration: "90s" }}
      />
      <div
        className="cloud"
        style={{
          width: 380,
          height: 120,
          top: "26%",
          animationDuration: "120s",
          animationDelay: "-60s",
          opacity: 0.6,
        }}
      />
      <Reveal className="" as="div">
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="kicker">Let&apos;s build</div>
          <h2>
            C&apos;mon in — <em>the code&apos;s hot.</em>
          </h2>
          <p className="section-sub">
            Have a product to ship, a system to scale, or a wild idea worth a
            hackathon weekend? I&apos;m in.
          </p>
          <a className="btn btn-solid" href={`mailto:${links.email}`}>
            Get in touch
          </a>
        </div>
      </Reveal>
      <svg
        className="ridge"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        style={{ height: 140 }}
      >
        <path
          d="M0,140 L0,80 Q260,120 520,70 T1000,90 T1440,50 L1440,140 Z"
          fill="#0b0d12"
        />
      </svg>
    </section>
  );
}
