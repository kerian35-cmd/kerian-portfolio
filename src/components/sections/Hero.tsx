"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLang } from "@/lib/i18n";
import { tx } from "@/lib/translations";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          ".hero-headline",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1 },
          "-=0.5"
        )
        .fromTo(
          ".hero-sub",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.6"
        )
        .fromTo(
          ".hero-meta-item",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          "-=0.4"
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const meta = [
    { label: t(tx.hero.metaLocation), value: t(tx.hero.metaLocationValue) },
    { label: t(tx.hero.metaExperience), value: t(tx.hero.metaExperienceValue) },
    { label: t(tx.hero.metaFocus), value: t(tx.hero.metaFocusValue) },
    { label: t(tx.hero.metaStatus), value: t(tx.hero.metaStatusValue) },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col"
    >
      {/* Background layer */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/elements/artisan_overlay_hero.jpg"
        >
          <source src="/elements/video_header_loop_good.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-bg-dark/60" />
        <div className="grain-overlay" />
      </div>

      {/* Content — flex column so meta sits above the fold reliably */}
      <div className="relative z-10 flex-1 flex flex-col max-w-[1280px] w-full mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-12">
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          <p className="hero-eyebrow font-mono text-xs uppercase tracking-[0.22em] text-accent mb-6">
            {t(tx.hero.eyebrow)}
          </p>

          <h1 className="hero-headline font-display font-black text-[clamp(40px,6.5vw,96px)] leading-[0.95] tracking-tight text-fg-light mb-8">
            {t(tx.hero.headlineLine1)}
            <br />
            {t(tx.hero.headlineLine2)}
            <br />
            <span className="text-accent">{t(tx.hero.headlineLine3)}</span>
          </h1>

          <p className="hero-sub text-fg-muted-dark text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            {t(tx.hero.sub)}
          </p>

          <button
            onClick={scrollToContact}
            className="hero-cta self-start inline-flex items-center gap-3 bg-accent text-bg-dark px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-accent-2 transition-colors mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-bg-dark" />
            {t(tx.hero.cta)}
          </button>
        </div>

        {/* Metadata strip — part of flex column, no absolute, always visible */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-8 border-t border-fg-light/20">
          {meta.map((item) => (
            <div key={item.label} className="hero-meta-item">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-1.5">
                {item.label}
              </p>
              <p className="text-fg-light text-sm md:text-base font-semibold">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
