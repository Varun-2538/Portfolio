"use client";

import { useEffect, useState } from "react";
import { links } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a className="nav-logo" href="#top">
        varun<em>.</em>singh
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#alwayson">Always on</a>
        <a href="#stack">Stack</a>
        <a href="#journey">Journey</a>
        <a href="#faq">FAQ</a>
        <a href={links.resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
      <div className="nav-right">
        <ThemeToggle />
        <a className="nav-cta" href={`mailto:${links.email}`}>
          Get in touch
        </a>
      </div>
    </nav>
  );
}
