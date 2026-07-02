export default function Marquee() {
  const text = (
    <>
      <span>
        Your idea lives everywhere — <b>scattered, disconnected</b> — until
        someone ships it.
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
