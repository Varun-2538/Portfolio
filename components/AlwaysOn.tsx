import Reveal from "./Reveal";

export default function AlwaysOn() {
  return (
    <section className="section" id="alwayson">
      <Reveal className="alwayson">
        <div>
          <div className="kicker">Always on</div>
          <h2>
            The work doesn&apos;t stop, <em>even when I do.</em>
          </h2>
          <p className="section-sub">
            My systems run in the cloud around the clock — scanning mempools,
            simulating trades, filing tickets, delivering briefings. I
            don&apos;t have to be online for the work to move forward.
          </p>
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
