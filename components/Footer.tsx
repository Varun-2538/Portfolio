import { links } from "@/lib/content";

export default function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Varun Singh · varun5.vercel.app</span>
      <div className="foot-links">
        <a href={links.resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={links.x} target="_blank" rel="noopener noreferrer">
          X
        </a>
        <a href={`mailto:${links.email}`}>Email</a>
      </div>
    </footer>
  );
}
