"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { CircularStamp, Laurel, ScrollHint, Sprig } from "@/components/ui/Ornaments";
import { ChapterOutro } from "@/components/ui/Chapter";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const badgeRot = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section id="top" ref={ref} className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background ornaments */}
      <Laurel
        className="pointer-events-none absolute -left-10 top-20 h-80 w-56 text-gold/25"
      />
      <Laurel
        mirror
        className="pointer-events-none absolute -right-10 top-48 h-72 w-48 text-gold/20"
      />

      {/* Newspaper masthead rail */}
      <div className="container-page mb-10 lg:mb-14">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left h-[2.5px] w-full bg-espresso/30"
        />
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="flex items-center justify-between gap-4 py-3 text-[10px] uppercase tracking-[0.4em]"
        >
          <span className="flex items-center gap-3">
            <span className="font-display italic text-base normal-case tracking-normal text-wine">
              Chapter I
            </span>
            <span className="hidden sm:inline-block h-3 w-px bg-espresso/20" />
            <span className="hidden sm:inline">Invitation</span>
          </span>
          <span className="script text-2xl text-wine hidden md:inline normal-case tracking-normal">
            · Spring Tasting 2026 ·
          </span>
          <span className="tabular-nums opacity-70">p. 01</span>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="origin-right h-px w-full bg-espresso/15"
        />
      </div>

      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left: Typography */}
        <motion.div
          style={{ y: titleY }}
          className="lg:col-span-7 relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="eyebrow mb-8"
          >
            {hero.eyebrow}
          </motion.span>

          <h1 className="heading-display mt-8 relative">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Experience the
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block italic font-display"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                Language{" "}
                <span
                  className="script text-wine relative"
                  style={{ fontSize: "1em", lineHeight: 1 }}
                >
                  of
                </span>{" "}
                Taste.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mt-10 max-w-xl text-lg text-espresso/70 leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Button href={hero.ctaPrimary.href} showArrow>
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="link" showArrow>
              {hero.ctaSecondary.label}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.55 }}
            className="mt-14 flex items-center gap-8"
          >
            <Sprig className="h-5 w-16 text-gold/70" />
            <div className="flex gap-10">
              <Stat value="50" label="Years of craft" />
              <Stat value="★★" label="Michelin 2026" />
              <Stat value="IV" label="Seatings nightly" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Photo composition */}
        <motion.div
          style={{ y: imgY }}
          className="lg:col-span-5 relative h-[540px] lg:h-[640px]"
        >
          {/* Primary photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 right-4 h-[420px] w-[72%] overflow-hidden rounded-[3px] shadow-lift ring-1 ring-espresso/5"
          >
            <Image
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=85"
              alt="Chef at the pass"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </motion.div>

          {/* Secondary photo (overlap) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 4 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 h-[300px] w-[60%] overflow-hidden rounded-[3px] shadow-lift ring-1 ring-espresso/5"
          >
            <Image
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&q=85"
              alt="Plated course"
              fill
              priority
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="object-cover"
            />
          </motion.div>

          {/* Circular Michelin stamp */}
          <motion.div
            style={{ rotate: badgeRot }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-6 -left-2 lg:-left-10 h-36 w-36 text-wine animate-float-slow"
          >
            <CircularStamp topText="LA TABLE ÉTERNELLE" bottomText="MICHELIN · 2026">
              <div className="text-center leading-none">
                <div className="font-display text-3xl text-wine">50</div>
                <div className="caption text-wine mt-1">years</div>
              </div>
            </CircularStamp>
          </motion.div>

          {/* Floating caption badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-6 right-6 bg-cream/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-soft ring-1 ring-gold/30 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-wine animate-shimmer" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-espresso">
              {hero.chip.detail}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.55 }}
        className="container-page mt-16 lg:mt-20 flex items-center justify-between"
      >
        <ScrollHint />
        <div className="script text-3xl text-wine hidden md:block">bon appétit</div>
        <div className="flex items-center gap-3">
          <span className="caption">Signed</span>
          <span className="script text-2xl text-espresso">É. Laurent</span>
        </div>
      </motion.div>

      <div className="container-page">
        <ChapterOutro page="p. 01 — 13" next="Our Story" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <div className="font-display text-4xl text-wine leading-none">{value}</div>
      <div className="caption mt-2">{label}</div>
    </div>
  );
}
