"use client";

import { useLang } from "@/lib/i18n";
import { tx } from "@/lib/translations";

export default function Stats() {
  const { t } = useLang();
  const stats = tx.stats.items.map((s) => ({ value: s.value, label: t(s.label) }));

  return (
    <section className="bg-bg-light py-20 md:py-28 border-y border-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-10 flex items-center gap-4">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-muted">
          {t(tx.stats.label)}
        </p>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="marquee-track marquee-track--slow gap-16 pr-16">
          {[...stats, ...stats].map((s, i) => (
            <div
              key={`${s.label}-${i}`}
              className="flex-none min-w-[280px] md:min-w-[340px]"
            >
              <p className="font-display font-black text-accent text-[clamp(56px,7vw,96px)] leading-none tracking-tight mb-3">
                {s.value}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
