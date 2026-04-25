"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MessageCircle } from "lucide-react";

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "kerian.wimbee@gmail.com",
    href: "mailto:kerian.wimbee@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+33 7 86 00 68 80",
    href: "https://wa.me/33786006880",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "kerian-wimbee-asiamarketing",
    href: "https://www.linkedin.com/in/kerian-wimbee-asiamarketing/",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-bg-dark py-40 md:py-52 text-center"
    >
      <div className="max-w-[900px] mx-auto px-6 md:px-12 contact-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-6">
          05 — Contact
        </p>
        <h2 className="font-display font-black text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-tight text-fg-light mb-8">
          Let&apos;s build
          <br />
          something{" "}
          <span className="text-accent">remarkable.</span>
        </h2>

        <p className="text-fg-muted-dark text-lg md:text-xl max-w-md mx-auto mb-14">
          Currently open to full-time roles, contracts, and mission-based work
          across Asia and remotely.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 text-fg-light hover:text-accent transition-colors"
              >
                <Icon size={18} strokeWidth={1.6} />
                <span className="font-mono text-xs uppercase tracking-wider">
                  {c.label}
                </span>
              </a>
            );
          })}
        </div>

        <a
          href="mailto:kerian.wimbee@gmail.com"
          className="inline-flex items-center gap-3 bg-accent text-bg-dark px-8 py-4 rounded-full font-semibold hover:bg-accent-2 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-bg-dark" />
          Send an email
        </a>
      </div>
    </section>
  );
}
