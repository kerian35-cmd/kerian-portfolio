"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: string;
  tag: string;
  title: string;
  role: string;
  period: string;
  location: string;
  subtitle: string;
  image: string;
  overlayImage?: string;
  video?: string;
  summary: string;
  highlights: string[];
  responsibilities: string[];
  results: string[];
  links: { label: string; href: string }[];
  gallery?: string[];
};

const projects: Project[] = [
  {
    id: "massilia",
    tag: "Brand & Growth",
    title: "Massilia",
    role: "Marketing Manager (Full-time)",
    period: "September 2023 — June 2026",
    location: "Bangkok, Thailand",
    subtitle: "From #49 to #22 worldwide. +40% sustained revenue growth over 3 years.",
    image: "/elements/massilia_hero_card.jpg",
    overlayImage: "/elements/massilia_overlay_hero.jpg",
    summary:
      "Led end-to-end marketing strategy and execution for a high-volume, multi-location premium pizzeria, managing brand, digital performance, PR, events, and delivery platforms with full ownership and minimal budget.",
    highlights: [
      "Multi-Awarded Italian Restaurant — Bangkok",
      "Best Pizzeria in Thailand — sustained since 2021",
      "Full-funnel marketing ownership with minimal budget",
    ],
    responsibilities: [
      "Designed and executed a comprehensive marketing strategy delivering +40% sustained revenue growth over 3 years in a highly competitive market",
      "Managed SEO, SEM, Google Ads, and Meta Ads from A to Z",
      "Built and maintained strategic media relationships with Tatler, Lifestyle Asia, Bangkok Post, Time Out…",
      "Secured consistent organic press coverage and premium features without paid PR agencies",
      "Promoted and coordinated 30+ events and collaborations across Thailand and Asia",
      "Created all brand content in-house: photography, video production, editing, and creatives",
    ],
    results: [
      "+40% revenue growth (3Y sustained)",
      "#22 worldwide ranking (50 Top Pizza)",
      "#4 APAC ranking (from #9)",
      "Best Pizza Thailand — sustained since 2021",
      "+30% delivery platform growth",
      "30+ events & collaborations",
    ],
    links: [
      { label: "massiliabkk.com", href: "https://www.massiliabkk.com" },
      { label: "@massiliabkk", href: "https://www.instagram.com/massiliabkk/" },
    ],
    gallery: [
      "/elements/massilia_event_post.png",
      "/elements/massilia_overlay_inline.jpg",
      "/elements/massilia_tuktuk.jpg",
      "/elements/massilia_truck_buriram.jpg",
    ],
  },
  {
    id: "labottega",
    tag: "Brand Affirmation",
    title: "La Bottega Bangkok",
    role: "Marketing Manager (Full-time)",
    period: "September 2023 — June 2026",
    location: "Bangkok, Thailand",
    subtitle:
      "Affirmed the identity as 'Your Neighbourhood Italian Spot in Tonglo'. +60% delivery growth.",
    image: "/elements/labottega_hero_card.jpg",
    overlayImage: "/elements/labottega_overlay_hero.jpg",
    summary:
      "Affirmed the brand identity of an upscale Italian restaurant as 'Your Neighbourhood Italian Spot in Tonglo', building brand clarity, new revenue streams, and digital performance.",
    highlights: [
      "Upscale Italian restaurant — Bangkok",
      "Brand identity affirmed: 'Your Neighbourhood Italian Spot in Tonglo'",
      "New catering & event revenue stream from scratch",
    ],
    responsibilities: [
      "Affirmed the brand identity as 'Your Neighbourhood Italian Spot in Tonglo', balancing accessibility with premium heritage",
      "Developed and scaled catering and event offerings, increasing monthly high-value requests from 0–1 to ~10 consistently",
      "Launched and promoted 'La Carbonara Saleng' catering concept, generating 10+ events within 6 months",
      "Oversaw website optimization, SEO, content creation, and paid media campaigns",
      "Built a clear, consistent content strategy across Instagram, Facebook and LINE",
    ],
    results: [
      "+60% delivery platform growth",
      "+45% social media following",
      "10+ catering events in 6 months",
      "La Carbonara Saleng launch",
      "Monthly catering requests: 0–1 → ~10",
    ],
    links: [
      { label: "labottega.name", href: "https://www.labottega.name" },
      { label: "@labottegabangkok", href: "https://www.instagram.com/labottegabangkok/" },
    ],
    gallery: [
      "/elements/labottega_menu.png",
      "/elements/labottega_pic_valentines.png",
      "/elements/labottega_overlay_inline.jpg",
    ],
  },
  {
    id: "carbonara-saleng",
    tag: "Concept Launch",
    title: "La Carbonara Saleng",
    role: "Marketing Manager — La Bottega",
    period: "Q3 — Q4 2025",
    location: "Bangkok, Thailand",
    subtitle:
      "Authentic Roman carbonara, served from a custom Thai saleng cart. 10+ events in under 6 months.",
    image: "/elements/saleng_5.jpg",
    overlayImage: "/elements/saleng_6.jpg",
    summary:
      "Contributed to the conception, branding and launch of La Bottega's mobile carbonara concept — an authentic Roman recipe served from a modern, custom-designed Thai saleng cart, bringing Italian street food to Bangkok's streets, embassies, schools and trendiest neighbourhoods. Worked alongside the founder and team across every step of the project.",
    highlights: [
      "Italian street food, Bangkok-style",
      "Custom modern saleng cart, designed by the team",
      "10+ events in under 6 months",
    ],
    responsibilities: [
      "Participated in naming and brand positioning as authentic Italian street food native to Bangkok",
      "Contributed to the design of the mobile cart — a modern reinterpretation of the traditional Thai saleng — alongside the founder and team",
      "Developed the visual identity and on-cart communication: logo work, illustrations, signage, menu and graphics",
      "Helped source and coordinate event collaborations with embassies, international schools, retailers and lifestyle venues",
      "Ran event-by-event promotion across La Bottega's Instagram, Facebook and LINE channels",
    ],
    results: [
      "10+ events in under 6 months",
      "Italian Embassy of Thailand",
      "Pattana International School",
      "Songwat — Bangkok's trendiest neighbourhood",
      "Italasia partnership",
      "New mobile revenue stream launched from zero",
    ],
    links: [
      {
        label: "labottega.name/lacarbonarabangkok",
        href: "https://www.labottega.name/lacarbonarabangkok",
      },
    ],
    gallery: [
      "/elements/lacarbonara_lady.png",
      "/elements/saleng_1.jpg",
      "/elements/saleng_2.jpg",
      "/elements/lacarbonara_saleng_graph.png",
      "/elements/saleng_3.jpg",
      "/elements/saleng_4.jpg",
    ],
  },
  {
    id: "artisan",
    tag: "AI Video",
    title: "Artisan Baker",
    role: "Creative Direction & AI Production",
    period: "2025",
    location: "Bangkok, Thailand",
    subtitle: "30-second brand film. Entirely AI-generated.",
    image: "/elements/artisan_hero_card.jpg",
    overlayImage: "/elements/artisan_overlay_hero.jpg",
    video: "/elements/artisanbaker_video.webm",
    summary:
      "Produced a 30-second brand film for Artisan Bakers Co., Ltd. using entirely AI-generated visuals. Visual aesthetic modeled after Terrence Malick's Days of Heaven — Kodak Vision3 500T, golden amber highlights, 35mm grain. Hands and silhouettes only. 'Designed by chefs, for chefs.'",
    highlights: [
      "100% AI-generated brand film",
      "Zero production budget, zero shoot day",
      "Cinematic reference: Days of Heaven (Terrence Malick)",
    ],
    responsibilities: [
      "Wrote the creative brief, look-book and shot list entirely around an AI-native workflow",
      "Designed the Kodak Vision3 500T look: golden amber highlights, 35mm grain, painterly motion",
      "Produced, directed and edited the entire 30s film end-to-end, solo",
      "Delivered a fully licensed master ready for social, site and trade use",
    ],
    results: [
      "100% AI-generated visuals",
      "Kodak Vision3 500T aesthetic",
      "30-second brand film delivered",
      "Zero production budget",
    ],
    links: [
      { label: "artisansbakers.com", href: "https://www.artisansbakers.com/" },
    ],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
                02 — Selected Work
              </p>
              <h2 className="font-display font-black text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-tight text-fg-light">
                Projects.
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous project"
                className="w-11 h-11 rounded-full border border-border-dark flex items-center justify-center text-fg-light hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next project"
                className="w-11 h-11 rounded-full border border-border-dark flex items-center justify-center text-fg-light hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {canScrollRight && (
              <div className="md:hidden flex items-center gap-2 text-accent">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                  Swipe
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
          aria-label={`${current.title} — project details`}
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
                Key Responsibilities
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
                Results
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
                  Some of my work
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
          aria-label="Close project details"
          className="fixed top-6 right-6 z-[110] w-11 h-11 flex items-center justify-center rounded-full border border-border-dark text-fg-light hover:border-accent hover:text-accent transition-colors bg-bg-dark/70 backdrop-blur"
        >
          <X size={18} />
        </button>
      )}
    </>
  );
}
