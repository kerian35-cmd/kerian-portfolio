"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const textColor = scrolled ? "text-fg" : "text-fg-light";
  const hoverColor = "hover:text-accent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-light/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-display font-bold tracking-tight text-lg transition-colors ${textColor} ${hoverColor}`}
        >
          Kérian Wimbée
        </button>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Work", id: "projects" },
            { label: "About", id: "about" },
            { label: "Capabilities", id: "capabilities" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-mono text-xs uppercase tracking-widest transition-colors ${textColor} ${hoverColor}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
