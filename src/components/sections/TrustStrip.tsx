"use client";

const clients = [
  "Massilia",
  "La Bottega",
  "Artisan Baker",
  "Atawad Agency",
  "JW Marriott",
  "Super Pro Samui",
  "Boost 33",
];

export default function TrustStrip() {
  return (
    <div className="bg-bg-light border-y border-border py-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-6 flex items-center gap-4">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-muted">
          Kérian has worked with
        </p>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-track gap-16 pr-16">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display font-bold text-2xl md:text-3xl text-fg/60 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
