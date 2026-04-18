"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline" | "ghost";

type Props = {
  variant?: Variant;
  href?: string;
  showArrow?: boolean;
} & ComponentPropsWithoutRef<"button">;

const styles: Record<Variant, string> = {
  primary:
    "bg-burgundy text-cream hover:bg-burgundy-deep shadow-pill ring-1 ring-burgundy-deep/20",
  outline:
    "bg-transparent text-ink ring-1 ring-ink/15 hover:bg-ink hover:text-cream",
  ghost: "bg-cream-dark/60 text-ink hover:bg-cream-dark",
};

export function Button({
  variant = "primary",
  href,
  showArrow = false,
  className = "",
  children,
  ...rest
}: Props) {
  const cls = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors ${styles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span className="grid h-7 w-7 place-items-center rounded-full bg-cream/20">
          <ArrowRight size={14} strokeWidth={2.25} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cls}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cls}
      {...(rest as ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}
