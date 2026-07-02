import { hero, links } from "@/lib/content";

const stars = [
  { top: "8%", left: "12%", size: 2, delay: "0s" },
  { top: "14%", left: "82%", size: 2, delay: "1.2s" },
  { top: "6%", left: "48%", size: 1.5, delay: "2s" },
  { top: "22%", left: "28%", size: 1.5, delay: "0.6s" },
  { top: "18%", left: "68%", size: 2, delay: "2.6s" },
  { top: "28%", left: "90%", size: 1.5, delay: "1.8s" },
  { top: "10%", left: "60%", size: 1.5, delay: "3.2s" },
  { top: "25%", left: "8%", size: 1.5, delay: "0.3s" },
];

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-stars">
        {stars.map((s, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      <div
        className="cloud"
        style={{ width: 340, height: 110, top: "16%", animationDuration: "80s" }}
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

      <div className="hero-glow" />

      <div className="hero-mountains" aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            d="M0,320 L0,190 L140,110 L260,175 L360,90 L480,180 L620,60 L760,170 L900,100 L1040,190 L1180,120 L1320,185 L1440,140 L1440,320 Z"
            fill="#0a2c1a"
            opacity=".9"
          />
          <path
            d="M0,320 L0,230 L160,160 L320,220 L460,140 L600,215 L760,130 L920,210 L1080,150 L1240,225 L1440,175 L1440,320 Z"
            fill="#134226"
          />
        </svg>
      </div>
      <div className="hero-reflection" aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            d="M0,320 L0,230 L160,160 L320,220 L460,140 L600,215 L760,130 L920,210 L1080,150 L1240,225 L1440,175 L1440,320 Z"
            fill="#134226"
          />
        </svg>
      </div>
      <div className="hero-lake" />

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="pulse" />
          {hero.eyebrow}
        </div>
        <h1>
          Introducing Varun, the engineer who <em>plans six moves ahead.</em>
        </h1>
        <p className="hero-sub">{hero.sub}</p>
        <div className="hero-process">
          <span>Understand the problem</span>
          <i>→</i>
          <span>Design the architecture</span>
          <i>→</i>
          <span>Ship it end to end</span>
        </div>
        <div className="hero-ctas">
          <a className="btn btn-solid" href="#work">
            See the work
          </a>
          <a className="btn btn-ghost" href={`mailto:${links.email}`}>
            Say hello →
          </a>
        </div>
      </div>
    </header>
  );
}
