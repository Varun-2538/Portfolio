import Reveal from "./Reveal";
import { alwaysOn } from "@/lib/content";

export default function AlwaysOn() {
  return (
    <section className="section section-dark" id="alwayson">
      <Reveal className="alwayson">
        <div>
          <div className="kicker">{alwaysOn.kicker}</div>
          <h2>{alwaysOn.heading}</h2>
          <p className="section-sub">{alwaysOn.sub}</p>
        </div>
        <div className="terminal">
          <div className="term-bar">
            <i />
            <i />
            <i />
          </div>
          <div className="term-body">
            <span className="d">$</span> ssh droplet · tmux attach
            <br />
            <span className="g">[arb.service]</span> scanning 1,847 pools…
            <br />
            <span className="g">[arb.service]</span> path found · simulating
            in REVM
            <br />
            <span className="o">[flashbots]</span> bundle → 4 builders
            <br />
            <span className="d">03:12 IST — operator asleep. system isn&apos;t.</span>
            <br />
            <span className="d">$</span> <span className="cursor" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
