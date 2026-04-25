"use client";

import { ArrowUp, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-dark py-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-fg-light">
            Kérian Wimbée
          </span>
          <span className="text-fg-muted-dark text-sm">© 2026</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="mailto:kerian.wimbee@gmail.com"
            aria-label="Email Kérian"
            className="flex items-center gap-2 text-fg-muted-dark hover:text-accent transition-colors text-xs uppercase tracking-wider font-mono"
          >
            <Mail size={15} strokeWidth={1.6} />
            kerian.wimbee@gmail.com
          </a>
          <span className="w-1 h-1 rounded-full bg-fg-muted-dark/40" />
          <a
            href="https://wa.me/33786006880"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Kérian"
            className="flex items-center gap-2 text-fg-muted-dark hover:text-accent transition-colors text-xs uppercase tracking-wider font-mono"
          >
            <MessageCircle size={15} strokeWidth={1.6} />
            +33 7 86 00 68 80
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-fg-muted-dark hover:text-accent transition-colors text-xs uppercase tracking-wider font-mono"
        >
          Back to top
          <ArrowUp size={14} strokeWidth={1.6} />
        </button>
      </div>

      <p className="max-w-[1280px] mx-auto px-6 md:px-12 mt-6 text-fg-muted-dark/70 text-[11px] font-mono uppercase tracking-widest text-center md:text-left">
        Built with Next.js, Tailwind, GSAP &amp; AI.
      </p>
    </footer>
  );
}
