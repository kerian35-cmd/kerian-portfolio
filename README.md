# Kérian Wimbee — Portfolio

A modern, bilingual (EN/FR) one-page portfolio for Kérian Wimbee, a marketing strategist based in Thailand. Built with Next.js 16, animated with GSAP, and deployed on Vercel.

**Live → [kerian-portfolio.vercel.app](https://kerian-portfolio.vercel.app)**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animations | GSAP 3 + ScrollTrigger |
| Smooth Scroll | Lenis |
| Icons | Lucide React |
| Font | Geist (Vercel) |
| i18n | Custom bilingual system (EN/FR), localStorage-persisted |
| Deployment | Vercel |

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen video background with animated headline, CTA, and metadata strip (location, experience, focus, status) |
| **Trust Strip** | Infinite marquee of client logos (Massilia, La Bottega, JW Marriott, etc.) |
| **About** | Bio with GSAP scroll animations and CV download link |
| **Projects** | Horizontal carousel with project cards → detail overlay (video, highlights, responsibilities, results, gallery marquee) |
| **Stats** | Scrolling marquee of key metrics |
| **Skills** | 6 capability cards with hover effects (gradient sweep, staggered skill list animations) |
| **Contact** | Email, WhatsApp, LinkedIn links with CTA button |
| **Footer** | Site footer |
| **Navigation** | Fixed navbar with smooth-scroll anchors |

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind + custom animations (marquee, grain, etc.)
│   ├── layout.tsx           # Root layout with LanguageProvider + Lenis
│   └── page.tsx             # Home page — assembles all sections
├── components/
│   └── sections/
│       ├── Hero.tsx         # Video hero with GSAP timeline
│       ├── Navigation.tsx   # Fixed navbar
│       ├── TrustStrip.tsx   # Client marquee
│       ├── About.tsx        # Bio + CV link
│       ├── Projects.tsx     # Carousel + detail overlay
│       ├── Stats.tsx        # Metrics marquee
│       ├── Skills.tsx       # Capability cards
│       ├── Contact.tsx      # Contact channels
│       └── Footer.tsx       # Site footer
└── lib/
    ├── i18n.tsx             # LanguageProvider context (EN/FR)
    ├── translations.ts      # All text content, bilingual
    └── utils.ts             # Utility functions
```

## Key Features

- **Bilingual** — EN/FR toggle with localStorage persistence. All content lives in `src/lib/translations.ts`.
- **GSAP animations** — Entry animations (timelines on Hero), scroll-triggered reveals (About, Skills, Projects, Contact).
- **Smooth scroll** — Lenis for buttery-smooth page scrolling.
- **Project detail overlays** — Click a project card to open a full-screen dialog with video, highlights, responsibilities, results, and a gallery marquee.
- **Marquee effects** — CSS-driven infinite marquees for Trust Strip, Stats, and project galleries. No JS animation library needed.
- **Responsive** — Mobile-first with Tailwind breakpoints. Carousel snaps on touch devices, nav adapts to small screens.
- **Keyboard accessible** — Projects open/close with Enter/Space/Escape, proper ARIA roles on dialogs.

## Deployment

The project is deployed on **Vercel**. Every push to `main` triggers an automatic deployment.

To deploy manually:

```bash
npm run build
```

## License

Private project — all rights reserved.
