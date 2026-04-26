"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";
import { tx } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-fade",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-bg-light py-32 md:py-40">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section heading */}
        <div className="flex items-end justify-between mb-16 about-fade">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
              {t(tx.about.eyebrow)}
            </p>
            <h2 className="font-display font-black text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-tight text-fg">
              {t(tx.about.title)}
            </h2>
          </div>
        </div>

        <div className="about-fade max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed text-fg mb-6">
              {t(tx.about.p1)}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-fg mb-6">
              {t(tx.about.p2)}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-fg-muted mb-10">
              {t(tx.about.p3)}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-border">
              <p className="font-display font-bold text-xl text-fg">
                {t(tx.about.tagline)}
              </p>
              <a
                href="/elements/resume_kerian.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-fg text-fg px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-fg hover:text-bg-light transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {t(tx.about.cv)}
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}
