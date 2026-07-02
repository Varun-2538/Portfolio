export default function Marquee() {
  const text = (
    <>
      <span>
        Ideas start scattered across repos, chains, and terminals.
      </span>
      <span>
        <b>Shipped code doesn&apos;t stay that way.</b>
      </span>
      <span>
        Rust · React · Solidity · FastAPI · <b>and everything in between.</b>
      </span>
    </>
  );

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {text}
        {text}
      </div>
    </div>
  );
}
