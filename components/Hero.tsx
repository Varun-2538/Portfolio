export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="sun" />
      <div
        className="cloud"
        style={{ width: 340, height: 110, top: "14%", animationDuration: "80s" }}
      />
      <div
        className="cloud"
        style={{
          width: 260,
          height: 90,
          top: "28%",
          animationDuration: "105s",
          animationDelay: "-40s",
        }}
      />
      <div
        className="cloud"
        style={{
          width: 420,
          height: 130,
          top: "8%",
          animationDuration: "130s",
          animationDelay: "-70s",
          opacity: 0.7,
        }}
      />
      <div
        className="cloud"
        style={{
          width: 220,
          height: 80,
          top: "38%",
          animationDuration: "95s",
          animationDelay: "-20s",
          opacity: 0.6,
        }}
      />

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="pulse" />
          arb.service — running · SDE @ HyperVerge
        </div>
        <h1>
          Introducing Varun, the engineer who <em>never idles.</em>
        </h1>
        <p className="hero-sub">
          I build systems that learn, remember, and act — MEV trading bots,
          fintech rails, and AI agents that keep working while everyone else
          sleeps.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-solid" href="#work">
            See the work
          </a>
          <a className="btn btn-ghost" href="mailto:hello@varun5.dev">
            Say hello →
          </a>
        </div>
      </div>

      <svg
        className="ridge back"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        style={{ height: 200 }}
      >
        <path
          d="M0,200 L0,120 Q180,70 360,110 T720,90 T1080,120 T1440,80 L1440,200 Z"
          fill="#141826"
          opacity=".8"
        />
      </svg>
      <svg
        className="ridge"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ height: 160 }}
      >
        <path
          d="M0,160 L0,90 Q240,140 480,80 T960,100 T1440,60 L1440,160 Z"
          fill="#0b0d12"
        />
      </svg>
    </header>
  );
}
