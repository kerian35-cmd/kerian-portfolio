"use client";

const stats = [
  { value: "+40%", label: "Revenue Growth — Massilia (3Y)" },
  { value: "+60%", label: "Delivery Growth — La Bottega" },
  { value: "+45%", label: "Social Following — La Bottega" },
  { value: "+30%", label: "Delivery Platforms Growth" },
  { value: "#22", label: "Worldwide — 50 Top Pizza" },
  { value: "#4", label: "APAC — 50 Top Pizza" },
  { value: "30+", label: "Events & Collaborations" },
  { value: "10+", label: "Catering Events / 6 months" },
  { value: "4", label: "Languages Spoken" },
  { value: "3+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className="bg-bg-light py-20 md:py-28 border-y border-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-10 flex items-center gap-4">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-muted">
          Numbers that matter
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
