import { hero, links } from "@/lib/content";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div
        className="cloud"
        style={{ width: 340, height: 110, top: "14%", animationDuration: "80s" }}
      />
      <div
        className="cloud"
        style={{
          width: 260,
          height: 90,
          top: "26%",
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
      <div className="hero-lake" />

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
