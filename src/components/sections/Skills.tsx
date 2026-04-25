"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  Megaphone,
  Sparkles,
  Camera,
  Globe2,
  Target,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const groups = [
  {
    icon: TrendingUp,
    title: "Growth & Performance",
    skills: [
      "Growth Marketing",
      "SEO / SEM Strategy",
      "Google Ads & Meta Ads (PPC)",
      "Campaign Planning & Optimization",
      "Customer Acquisition & Retention",
    ],
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    skills: [
      "AI Generative Video",
      "AI Generative Image",
      "AI Content Pipelines",
      "Workflow Automation",
      "Prompt Engineering",
    ],
  },
  {
    icon: Megaphone,
    title: "Brand & PR",
    skills: [
      "Brand Strategy & Positioning",
      "Media Relations & Press",
      "Go-to-Market Strategy",
      "KOL / Influencer Campaigns",
      "Event Marketing & Activations",
    ],
  },
  {
    icon: Camera,
    title: "Content & Social",
    skills: [
      "Content Strategy & Production",
      "Food Photography",
      "Video Production & Editing",
      "Instagram, TikTok, LINE",
      "Social Community Management",
    ],
  },
  {
    icon: Globe2,
    title: "Web & Platforms",
    skills: [
      "Wix & WordPress",
      "Website Optimization",
      "Delivery Platform Ops",
      "GrabFood, ShopeeFood, Lineman",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Target,
    title: "F&B Expertise",
    skills: [
      "Restaurant Marketing",
      "Catering & Events Development",
      "Multi-location Operations",
      "Asia Market Expansion",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cap-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="bg-bg-light py-32 md:py-40 border-t border-border"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
              03 — Capabilities
            </p>
            <h2 className="font-display font-black text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-tight text-fg">
              What I do.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, i) => {
            const Icon = group.icon;
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={group.title}
                className="cap-card group relative overflow-hidden rounded-2xl border border-border bg-bg-light p-7 cursor-default transition-all duration-500 hover:border-accent hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(19,24,27,0.25)]"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient sweep on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(253,137,115,0.08), transparent 40%)",
                  }}
                />

                {/* Header */}
                <div className="relative flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-fg transition-colors duration-500 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/5">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-muted">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="relative font-display font-bold text-2xl md:text-[26px] text-fg mb-5 leading-tight transition-transform duration-500 group-hover:-translate-y-0.5">
                  {group.title}
                </h3>

                {/* Skill list */}
                <ul className="relative space-y-2">
                  {group.skills.map((skill, j) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-sm text-fg-muted transition-all duration-500"
                      style={{
                        transform: isHovered
                          ? "translateX(6px)"
                          : "translateX(0)",
                        transitionDelay: isHovered
                          ? `${j * 40}ms`
                          : `${(group.skills.length - j) * 20}ms`,
                      }}
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      <span className="transition-colors duration-300 group-hover:text-fg">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
