"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { tx, projectsData } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { t } = useLang();

  const projects = useMemo(
    () =>
      projectsData.map((p) => ({
        id: p.id,
        title: p.title,
        image: p.image,
        overlayImage: p.overlayImage,
        video: p.video,
        links: p.links,
        gallery: p.gallery,
        tag: t(p.tag),
        role: t(p.role),
        period: t(p.period),
        location: t(p.location),
        subtitle: t(p.subtitle),
        summary: t(p.summary),
        highlights: p.highlights.map((h) => t(h)),
        responsibilities: p.responsibilities.map((r) => t(r)),
        results: p.results.map((r) => t(r)),
      })),
    [t]
  );

  const checkScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const scroll = (dir: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".carousel-card");
    const cardWidth = card?.offsetWidth || 380;
    const gap = 24;
    el.scrollBy({
      left: dir === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  const current = active !== null ? projects[active] : null;

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="bg-bg-dark py-32 md:py-40"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="project-header flex items-end justify-between mb-14">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
                {t(tx.projects.eyebrow)}
              </p>
              <h2 className="font-display font-black text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-tight text-fg-light">
                {t(tx.projects.title)}
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label={t(tx.projects.prevAria)}
                className="w-11 h-11 rounded-full border border-border-dark flex items-center justify-center text-fg-light hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label={t(tx.projects.nextAria)}
                className="w-11 h-11 rounded-full border border-border-dark flex items-center justify-center text-fg-light hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {canScrollRight && (
              <div className="md:hidden flex items-center gap-2 text-accent">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                  {t(tx.projects.swipe)}
                </span>
                <ChevronRight size={14} className="animate-nudge" />
              </div>
            )}
          </div>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, i) => (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                className="carousel-card flex-none w-[85vw] md:w-[400px] snap-start text-left group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border-dark mb-5 bg-bg-dark">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/85 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 bg-bg-dark/70 backdrop-blur-sm text-fg-light text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-border-dark font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {project.tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl md:text-[28px] text-fg-light group-hover:text-accent transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-fg-muted-dark leading-relaxed">
                  {project.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail overlay */}
      {current && (
        <div
          className="fixed inset-0 z-[100] bg-bg-dark/96 backdrop-blur-xl overflow-y-auto overflow-x-hidden"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} ${t(tx.projects.dialogAriaSuffix)}`}
        >
          <div
            className="max-w-[960px] mx-auto px-6 py-20 md:py-28"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
              {current.tag}
            </p>
            <h2 className="font-display font-black text-[clamp(40px,6vw,88px)] leading-[0.9] tracking-tight text-fg-light mb-4">
              {current.title}
            </h2>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted-dark">
              <span>{current.role}</span>
              <span className="w-1 h-1 rounded-full bg-fg-muted-dark/60" />
              <span>{current.period}</span>
              <span className="w-1 h-1 rounded-full bg-fg-muted-dark/60" />
              <span>{current.location}</span>
            </div>

            {current.video ? (
              <video
                controls
                playsInline
                preload="none"
                poster={current.overlayImage}
                className="w-full rounded-xl border border-border-dark mb-12 bg-bg-dark"
              >
                <source src={current.video} type="video/webm" />
              </video>
            ) : current.overlayImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={current.overlayImage}
                alt={current.title}
                className="w-full rounded-xl border border-border-dark mb-12"
              />
            ) : null}

            <p className="text-lg md:text-xl text-fg-light leading-relaxed mb-10 max-w-2xl">
              {current.summary}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-14">
              {current.highlights.map((h) => (
                <div
                  key={h}
                  className="p-4 rounded-xl border border-border-dark text-sm text-fg-light leading-relaxed"
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Responsibilities */}
            <div className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-5">
                {t(tx.projects.keyResponsibilities)}
              </p>
              <ul className="space-y-3 max-w-3xl">
                {current.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-fg-light text-base leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-5">
                {t(tx.projects.results)}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.results.map((r) => (
                  <div
                    key={r}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border-dark"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-2 shrink-0" />
                    <span className="text-sm text-fg-light font-medium">
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Some of my work — marquee gallery */}
            {current.gallery && current.gallery.length > 0 && (
              <div className="mb-14 -mx-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-5 px-6">
                  {t(tx.projects.someOfMyWork)}
                </p>
                <div
                  className="relative overflow-hidden"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                  }}
                >
                  <div
                    className="marquee-track gap-5 pr-5"
                    style={{ animationDuration: `${current.gallery.length * 6}s` }}
                  >
                    {[...current.gallery, ...current.gallery].map((src, i) => (
                      <div
                        key={`${src}-${i}`}
                        className="relative h-[320px] md:h-[400px] aspect-[4/5] rounded-xl overflow-hidden border border-border-dark bg-bg-dark shrink-0"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {current.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-bg-dark px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-2 transition-colors"
                >
                  <ExternalLink size={14} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {current && (
        <button
          onClick={() => setActive(null)}
          aria-label={t(tx.projects.closeAria)}
          className="fixed top-6 right-6 z-[110] w-11 h-11 flex items-center justify-center rounded-full border border-border-dark text-fg-light hover:border-accent hover:text-accent transition-colors bg-bg-dark/70 backdrop-blur"
        >
          <X size={18} />
        </button>
      )}
    </>
  );
}
