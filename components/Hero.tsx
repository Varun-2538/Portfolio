import { hero, links } from "@/lib/content";

const BACK_TREES =
  "M0,400 L0,216.9 L36,221.2 L72,208.7 L108,223.2 L144,211.6 L180,215.9 L216,223.6 L252,212.3 L288,224.1 L324,214.2 L360,223.3 L396,222.7 L432,214.4 L468,204.3 L504,221.9 L540,219.4 L576,209.3 L612,201.3 L648,210.6 L684,215.1 L720,200.6 L756,223.8 L792,203.5 L828,217.8 L864,221.4 L900,222.1 L936,217.3 L972,204.6 L1008,220.5 L1044,210.5 L1080,209.0 L1116,215.7 L1152,211.3 L1188,223.4 L1224,223.5 L1260,219.9 L1296,208.0 L1332,214.3 L1368,217.1 L1404,210.4 L1440,213.7 L1440,400 Z";

const FRONT_TREES =
  "M0,400 L0,161.9 L36,145.1 L72,154.7 L108,141.8 L144,140.6 L180,171.4 L216,174.3 L252,128.9 L288,160.7 L324,162.1 L360,120.2 L396,149.1 L432,129.0 L468,148.8 L504,139.9 L540,166.7 L576,140.1 L612,127.3 L648,146.2 L684,134.2 L720,138.1 L756,171.5 L792,133.3 L828,142.5 L864,158.4 L900,265 L936,265 L972,265 L1008,265 L1044,265 L1080,265 L1116,265 L1152,265 L1188,265 L1224,173.3 L1260,127.4 L1296,149.0 L1332,135.5 L1368,126.7 L1404,135.7 L1440,124.3 L1440,265 L1440,400 Z";

function Bird({ style }: { style: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 12"
      width="24"
      height="12"
      style={{ position: "absolute", ...style }}
    >
      <path
        d="M1,8 Q6,1 12,8 Q18,1 23,8"
        fill="none"
        stroke="rgba(23,24,20,.4)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CabinScene() {
  return (
    <svg
      viewBox="0 0 1440 400"
      preserveAspectRatio="none"
      style={{ position: "absolute", bottom: 0, width: "100%", height: "100%" }}
    >
      <path d={BACK_TREES} fill="#9fae9d" opacity=".55" />
      <path d={FRONT_TREES} fill="#0f3a22" />
      {/* cabin, sitting in the clearing carved into the front treeline */}
      <polygon points="970,265 1040,203 1110,265" fill="#2c2018" />
      <rect x="978" y="265" width="124" height="58" fill="#6b4a34" />
      <rect x="1057" y="212" width="15" height="38" fill="#2c2018" />
      <rect
        x="1017"
        y="280"
        width="26"
        height="26"
        rx="2"
        fill="url(#glow)"
      />
      <rect x="1063" y="291" width="20" height="32" fill="#241a13" />
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#ffe4a8" />
          <stop offset="100%" stopColor="#f2b078" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-birds">
        <Bird style={{ top: "16%", left: "22%" }} />
        <Bird style={{ top: "12%", left: "58%", transform: "scale(0.8)" }} />
        <Bird style={{ top: "20%", left: "70%", transform: "scale(0.65)" }} />
      </div>

      <div
        className="cloud"
        style={{ width: 340, height: 100, top: "18%", animationDuration: "85s" }}
      />
      <div
        className="cloud"
        style={{
          width: 240,
          height: 80,
          top: "10%",
          animationDuration: "110s",
          animationDelay: "-40s",
        }}
      />

      <div className="hero-scene" aria-hidden="true">
        <CabinScene />
      </div>
      <div className="hero-reflection" aria-hidden="true">
        <CabinScene />
      </div>
      <div className="hero-glow-warm" />
      <div className="smoke" />
      <div className="smoke" />
      <div className="smoke" />
      <div className="hero-water" />

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="pulse" />
          {hero.eyebrow}
        </div>
        <h1>
          Introducing Varun, the engineer who <em>never idles.</em>
        </h1>
        <p className="hero-sub">{hero.sub}</p>
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
