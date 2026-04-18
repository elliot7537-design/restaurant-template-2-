"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { marquee, hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const doubled = [...marquee, ...marquee];

  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Meta rail above marquee */}
      <div className="container-page flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-muted mb-6">
        <span>Paris · 14 rue de Richelieu</span>
        <span className="hidden sm:inline">Guide Michelin 2026</span>
        <span>Chapter 50 · Spring Tasting</span>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
        <div className="group overflow-hidden">
          <div className="flex gap-5 animate-marquee group-hover:[animation-play-state:paused] w-max">
            {doubled.map((item, i) => (
              <figure
                key={`${item.src}-${i}`}
                className="relative shrink-0 h-[260px] sm:h-[320px] lg:h-[380px] aspect-[4/5] overflow-hidden rounded-[20px] ring-1 ring-line shadow-soft"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(min-width: 1024px) 320px, 260px"
                  className="object-cover grayscale-[15%] contrast-105 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                  priority={i < 4}
                />
                <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-ivory/80">
                  <span>{item.caption}</span>
                  <span className="tabular-nums text-ivory/50">
                    {String((i % marquee.length) + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Headline block */}
      <div className="container-page mt-16 sm:mt-20 grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-20 items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-index">Chapter 01 — Invitation</span>
          <h1 className="heading-display mt-5">
            Experience the
            <br />
            <span className="italic font-serif text-ivory/90">Language</span>{" "}
            <span className="script text-[1em] align-[-0.05em]">of</span>{" "}
            <span className="italic">Taste.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7"
        >
          <p className="text-lg text-ivory/70 leading-relaxed max-w-md">{hero.subtitle}</p>

          <div className="rule" />

          <div className="flex flex-wrap items-center gap-4">
            <Button href={hero.ctaPrimary.href} showArrow>
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="link" showArrow>
              {hero.ctaSecondary.label}
            </Button>
          </div>

          <dl className="grid grid-cols-3 gap-6 pt-4">
            <Stat k="50" label="Years" />
            <Stat k="★★" label="Michelin 2026" />
            <Stat k="IV" label="Seatings nightly" />
          </dl>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ k, label }: { k: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-3xl text-gold">{k}</dt>
      <dd className="caption mt-1">{label}</dd>
    </div>
  );
}
