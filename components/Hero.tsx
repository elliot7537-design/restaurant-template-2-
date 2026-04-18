"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CalendarDays, Sparkles } from "lucide-react";
import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] sm:h-[520px] lg:h-[620px] w-full rounded-[2rem] bg-gradient-to-br from-[#1a0e07] via-[#2a140a] to-[#3a1a12] ring-1 ring-ink/10 shadow-soft animate-pulse" />
  ),
});

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-page grid lg:grid-cols-[1.05fr_1fr] items-center gap-10 lg:gap-14 py-10 lg:py-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="heading-serif mt-5 text-5xl sm:text-6xl lg:text-7xl">
            Experience the{" "}
            <span className="relative inline-block">
              <span className="script text-burgundy text-6xl sm:text-7xl lg:text-[5.5rem] leading-[0.8]">
                Language
              </span>
            </span>{" "}
            of Taste
          </h1>
          <p className="mt-6 max-w-xl text-muted text-lg leading-relaxed">{hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={hero.ctaPrimary.href} showArrow>
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="outline">
              {hero.ctaSecondary.label}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
            <div className="flex items-center gap-3 rounded-full bg-white/60 px-4 py-2 ring-1 ring-ink/5 shadow-soft">
              <CalendarDays size={16} className="text-burgundy" />
              <span>
                Next seating · <strong className="text-ink">{hero.chip.detail}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-gold" />
              <span>Signed by Chef Étienne Laurent</span>
            </div>
          </div>
        </motion.div>

        {/* 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative"
        >
          <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}
