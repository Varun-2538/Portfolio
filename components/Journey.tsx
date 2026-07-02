import { timeline } from "@/lib/content";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section className="section" id="journey">
      <Reveal className="section-head">
        <div className="kicker">Journey</div>
        <h2>
          How I got <em>here.</em>
        </h2>
      </Reveal>
      <Reveal>
        <div className="timeline">
          {timeline.map((t) => (
            <div className="tl-item" key={t.title}>
              <div className="when">{t.when}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
