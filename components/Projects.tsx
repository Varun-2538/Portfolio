import { projects, missionControl } from "@/lib/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section className="section" id="work" style={{ background: "var(--canvas)" }}>
      <Reveal className="section-head">
        <div className="kicker">{missionControl.kicker}</div>
        <h2>{missionControl.heading}</h2>
        <p className="section-sub">{missionControl.sub}</p>
      </Reveal>
      <div className="projects">
        {projects.map((p) => (
          <Reveal
            as="article"
            key={p.num}
            className={`proj${p.wide ? " wide" : ""}`}
          >
            <div className="proj-top">
              <span className="num">{p.num}</span>
              <span className="badge">{p.badge}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="stack">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
