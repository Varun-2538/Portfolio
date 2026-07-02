import { faqs } from "@/lib/content";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section className="section" id="faq" style={{ background: "var(--canvas)" }}>
      <Reveal className="section-head">
        <div className="kicker">FAQ</div>
        <h2>
          Questions, <em>answered.</em>
        </h2>
      </Reveal>
      <Reveal className="faq">
        {faqs.map((f) => (
          <details key={f.q} open={f.open}>
            <summary>{f.q}</summary>
            <div className="a">{f.a}</div>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
