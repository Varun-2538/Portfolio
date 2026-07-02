import { hero, links } from "@/lib/content";

function Pine({
  x,
  baseY,
  height,
  color,
}: {
  x: number;
  baseY: number;
  height: number;
  color: string;
}) {
  const w1 = height * 0.32;
  const w2 = height * 0.26;
  const w3 = height * 0.19;
  return (
    <g transform={`translate(${x},${baseY})`}>
      <rect x={-height * 0.03} y={0} width={height * 0.06} height={height * 0.1} fill="#3a2a1d" />
      <polygon points={`0,${-height * 0.42} ${-w1},0 ${w1},0`} fill={color} />
      <polygon points={`0,${-height * 0.72} ${-w2},${-height * 0.28} ${w2},${-height * 0.28}`} fill={color} />
      <polygon points={`0,${-height} ${-w3},${-height * 0.55} ${w3},${-height * 0.55}`} fill={color} />
    </g>
  );
}

function CabinCluster() {
  return (
    <svg
      viewBox="0 0 600 420"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      {/* back, hazier trees for depth */}
      <Pine x={130} baseY={380} height={190} color="#9fb0a0" />
      <Pine x={560} baseY={375} height={175} color="#9fb0a0" />
      <Pine x={400} baseY={350} height={160} color="#9fb0a0" />

      {/* front trees flanking the cabin */}
      <Pine x={40} baseY={405} height={290} color="#123a20" />
      <Pine x={175} baseY={408} height={250} color="#0f3319" />
      <Pine x={470} baseY={406} height={275} color="#123a20" />
      <Pine x={580} baseY={398} height={230} color="#0f3319" />

      {/* cabin */}
      <g transform="translate(310,402)">
        <polygon points="-78,-95 0,-170 78,-95" fill="#2c2018" />
        <rect x="-70" y="-95" width="140" height="95" fill="#6b4a34" />
        <rect x="20" y="-158" width="15" height="42" fill="#2c2018" />
        <rect x="-24" y="-68" width="30" height="30" rx="2" fill="url(#cabinGlow)" />
        <rect x="28" y="-48" width="22" height="48" fill="#241a13" />
      </g>

      {/* shoreline */}
      <ellipse cx="150" cy="412" rx="70" ry="8" fill="#8a8478" opacity=".55" />
      <ellipse cx="430" cy="414" rx="100" ry="8" fill="#8a8478" opacity=".5" />
      <ellipse cx="580" cy="410" rx="45" ry="7" fill="#8a8478" opacity=".5" />

      <defs>
        <radialGradient id="cabinGlow" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#ffe4a8" />
          <stop offset="100%" stopColor="#f2b078" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function Bird({
  style,
  size = 24,
  flapDuration = "0.7s",
}: {
  style: React.CSSProperties;
  size?: number;
  flapDuration?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 12"
      width={size}
      height={size / 2}
      style={style}
    >
      <path
        d="M1,8 Q6,1 12,8 Q18,1 23,8"
        fill="none"
        style={{ stroke: "rgba(var(--ink-rgb),.45)" }}
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          values="M1,8 Q6,1 12,8 Q18,1 23,8;M1,8 Q6,9 12,8 Q18,9 23,8;M1,8 Q6,1 12,8 Q18,1 23,8"
          dur={flapDuration}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}

const birds = [
  { top: "18%", size: 24, duration: "38s", delay: "0s", flap: "0.65s" },
  { top: "28%", size: 18, duration: "46s", delay: "-14s", flap: "0.8s" },
  { top: "12%", size: 15, duration: "52s", delay: "-28s", flap: "0.55s" },
  { top: "34%", size: 20, duration: "42s", delay: "-6s", flap: "0.72s" },
];

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-birds">
        {birds.map((b, i) => (
          <Bird
            key={i}
            size={b.size}
            flapDuration={b.flap}
            style={{
              top: b.top,
              animationDuration: b.duration,
              animationDelay: b.delay,
            }}
          />
        ))}
      </div>

      <div
        className="cloud"
        style={{ width: 340, height: 100, top: "16%", animationDuration: "85s" }}
      />
      <div
        className="cloud"
        style={{
          width: 240,
          height: 80,
          top: "30%",
          animationDuration: "110s",
          animationDelay: "-40s",
        }}
      />

      <div className="hero-cabin-scene" aria-hidden="true">
        <CabinCluster />
        <div className="hero-cabin-reflection">
          <CabinCluster />
        </div>
        <div className="smoke" />
        <div className="smoke" />
        <div className="smoke" />
        <div className="smoke" />
      </div>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="pulse" />
          {hero.eyebrow}
          <span className="eyebrow-caret" />
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
