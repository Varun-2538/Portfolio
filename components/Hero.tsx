import { hero, links } from "@/lib/content";

function Pine({
  x,
  y,
  scale = 1,
  color,
}: {
  x: number;
  y: number;
  scale?: number;
  color: string;
}) {
  const w = 40 * scale;
  const h = 28 * scale;
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={-3 * scale} y={0} width={6 * scale} height={9 * scale} fill="#3a2a1d" />
      <polygon points={`0,${-h * 2.15} ${-w * 0.42},${-h * 1.15} ${w * 0.42},${-h * 1.15}`} fill={color} />
      <polygon points={`0,${-h * 1.55} ${-w * 0.58},${-h * 0.55} ${w * 0.58},${-h * 0.55}`} fill={color} />
      <polygon points={`0,${-h * 0.95} ${-w * 0.72},${0} ${w * 0.72},${0}`} fill={color} />
    </g>
  );
}

function CabinCluster() {
  return (
    <svg
      viewBox="0 0 600 560"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      {/* back, hazier trees for depth */}
      <Pine x={95} y={505} scale={0.72} color="#a3b39f" />
      <Pine x={505} y={498} scale={0.66} color="#a3b39f" />
      <Pine x={365} y={478} scale={0.55} color="#a3b39f" />

      {/* front trees flanking the cabin */}
      <Pine x={38} y={548} scale={1.15} color="#123a20" />
      <Pine x={162} y={552} scale={1.0} color="#0f3319" />
      <Pine x={470} y={550} scale={1.1} color="#123a20" />
      <Pine x={558} y={540} scale={0.9} color="#0f3319" />

      {/* cabin */}
      <g transform="translate(300,500)">
        <polygon points="-66,0 0,-52 66,0" fill="#2c2018" />
        <rect x="-58" y="0" width="116" height="55" fill="#6b4a34" />
        <rect x="16" y="-42" width="13" height="32" fill="#2c2018" />
        <rect x="-19" y="14" width="24" height="24" rx="2" fill="url(#cabinGlow)" />
        <rect x="20" y="22" width="17" height="28" fill="#241a13" />
      </g>

      {/* shoreline */}
      <ellipse cx="120" cy="558" rx="60" ry="7" fill="#8a8478" opacity=".55" />
      <ellipse cx="420" cy="558" rx="90" ry="7" fill="#8a8478" opacity=".5" />
      <ellipse cx="560" cy="556" rx="40" ry="6" fill="#8a8478" opacity=".5" />

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
