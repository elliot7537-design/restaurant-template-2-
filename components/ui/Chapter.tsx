"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Sprig } from "./Ornaments";

/* -----------------------------------------------------------
   Newspaper-style chapter masthead with a paper-pull title
   reveal. Paired with ChapterOutro at section ends.
-------------------------------------------------------------*/

export type ChapterVariant = "light" | "dark";

type IntroProps = {
  chapter: string; // roman numeral "II"
  page: string; // "p. 14"
  eyebrow: string; // "Our Story"
  edition?: string;
  title: ReactNode;
  kicker?: ReactNode;
  variant?: ChapterVariant;
  align?: "center" | "left";
  className?: string;
};

const palette: Record<ChapterVariant, { text: string; line: string; rule: string; paper: string; eyebrow: string }> = {
  light: {
    text: "text-espresso",
    line: "bg-espresso/15",
    rule: "bg-espresso/30",
    paper: "bg-cream",
    eyebrow: "text-wine",
  },
  dark: {
    text: "text-cream",
    line: "bg-cream/15",
    rule: "bg-cream/40",
    paper: "bg-wine",
    eyebrow: "text-gold-bright",
  },
};

export function ChapterIntro({
  chapter,
  page,
  eyebrow,
  edition = "Spring Edition · MMXXVI",
  title,
  kicker,
  variant = "light",
  align = "center",
  className = "",
}: IntroProps) {
  const reduce = useReducedMotion();
  const c = palette[variant];

  return (
    <header className={`relative ${c.text} ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {/* Top thick rule (draws L→R) */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`origin-left h-[2.5px] w-full ${c.rule}`}
      />

      {/* Masthead row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="flex items-center justify-between gap-4 py-4 text-[10px] uppercase tracking-[0.4em]"
      >
        <span className="flex items-center gap-3">
          <span className={`font-display italic text-base normal-case tracking-normal ${c.eyebrow}`}>
            Chapter {chapter}
          </span>
          <span className={`hidden sm:inline-block h-3 w-px ${c.line}`} />
          <span className="hidden sm:inline">{eyebrow}</span>
        </span>
        <span className="hidden lg:inline opacity-60">{edition}</span>
        <span className="tabular-nums opacity-70">{page}</span>
      </motion.div>

      {/* Bottom thin rule (draws R→L) */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`origin-right h-px w-full ${c.line}`}
      />

      {kicker && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 mb-2 caption"
        >
          {kicker}
        </motion.div>
      )}

      {/* Title with paper-pull reveal */}
      <div className={`relative ${align === "center" ? "mx-auto" : ""} ${kicker ? "mt-2" : "mt-12"}`}>
        <h2 className="heading-serif text-5xl sm:text-6xl lg:text-[4.75rem] max-w-5xl mx-auto leading-[1.02]">
          {title}
        </h2>
        {!reduce && (
          <motion.span
            aria-hidden
            initial={{ x: "0%" }}
            whileInView={{ x: "-110%" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.3, delay: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className={`absolute inset-0 ${c.paper}`}
          />
        )}
      </div>
    </header>
  );
}

/* -----------------------------------------------------------
   End-of-chapter marker — "turn the page" flourish
-------------------------------------------------------------*/
export function ChapterOutro({
  page,
  next,
  variant = "light",
  className = "",
}: {
  page?: string;
  next?: string;
  variant?: ChapterVariant;
  className?: string;
}) {
  const c = palette[variant];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9 }}
      className={`mt-20 flex flex-col items-center gap-4 ${c.text}/80 ${className}`}
    >
      <div className="flex items-center gap-5">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`origin-right h-px w-24 ${c.line}`}
        />
        <Sprig className={`h-4 w-14 ${c.eyebrow}`} />
        <span className={`script text-2xl ${c.eyebrow}`}>turn the page</span>
        <Sprig className={`h-4 w-14 ${c.eyebrow}`} />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`origin-left h-px w-24 ${c.line}`}
        />
      </div>
      {(page || next) && (
        <div className="flex items-center gap-3 caption opacity-75">
          {page && <span className="tabular-nums">{page}</span>}
          {page && next && <span className="opacity-40">—</span>}
          {next && <span>Next · {next}</span>}
        </div>
      )}
    </motion.div>
  );
}

/* -----------------------------------------------------------
   PageWipe — whole-section entrance with a clip-path sweep.
   Wrap section content below the ChapterIntro.
-------------------------------------------------------------*/
export function PageWipe({
  children,
  className,
  delay = 0,
  direction = "right",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const from = direction === "right" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)";

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, clipPath: from }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
