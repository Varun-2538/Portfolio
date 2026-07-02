import Reveal from "./Reveal";
import { links, finalCta } from "@/lib/content";

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
          <div className="kicker">{finalCta.kicker}</div>
          <h2>{finalCta.heading}</h2>
          <p className="section-sub">{finalCta.sub}</p>
          <a className="btn btn-solid" href={`mailto:${links.email}`}>
            Get in touch
          </a>
        </div>
      </Reveal>
    </section>
  );
}
