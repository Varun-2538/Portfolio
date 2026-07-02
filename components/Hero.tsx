import { hero, links } from "@/lib/content";

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
