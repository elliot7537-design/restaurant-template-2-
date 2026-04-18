"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export type ChapterVariant = "light" | "dark";

type IntroProps = {
  chapter: string;
  page: string;
  eyebrow: string;
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

const INVIEW = { once: true, amount: 0.05 } as const;

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
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={INVIEW}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`origin-left h-[2.5px] w-full ${c.rule}`}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={INVIEW}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="flex items-center justify-between gap-4 py-2.5 text-[10px] uppercase tracking-[0.4em]"
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

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={INVIEW}
        transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className={`origin-right h-px w-full ${c.line}`}
      />

      {kicker && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={INVIEW}
          transition={{ duration: 0.35, delay: 0.25 }}
          className="mt-5 caption"
        >
          {kicker}
        </motion.div>
      )}

      <div className={`relative overflow-hidden ${kicker ? "mt-3" : "mt-5"}`}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={INVIEW}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="heading-serif text-4xl sm:text-5xl lg:text-[4rem] max-w-5xl mx-auto leading-[1.02]"
        >
          {title}
        </motion.h2>
        {!reduce && (
          <motion.span
            aria-hidden
            initial={{ x: "0%" }}
            whileInView={{ x: "-105%" }}
            viewport={INVIEW}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.76, 0, 0.24, 1] }}
            className={`absolute inset-0 ${c.paper}`}
          />
        )}
      </div>
    </header>
  );
}

/* Compact one-line chapter outro */
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={INVIEW}
      transition={{ duration: 0.4 }}
      className={`mt-12 flex items-center justify-center gap-3 caption ${c.text}/60 ${className}`}
    >
      {page && <span className="tabular-nums">{page}</span>}
      {page && next && <span className="opacity-40">·</span>}
      {next && (
        <span>
          Turn to <span className={`normal-case tracking-normal script text-xl ${c.eyebrow}`}>{next}</span>
        </span>
      )}
    </motion.div>
  );
}

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
      viewport={INVIEW}
      transition={{ duration: 0.55, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
