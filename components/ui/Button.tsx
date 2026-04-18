"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "ghost" | "link";

type Props = {
  variant?: Variant;
  href?: string;
  showArrow?: boolean;
} & ComponentPropsWithoutRef<"button">;

const styles: Record<Variant, string> = {
  primary:
    "bg-ivory text-bg hover:bg-gold px-6 py-3 rounded-full ring-1 ring-ivory/10",
  ghost:
    "bg-transparent text-ivory px-6 py-3 rounded-full ring-1 ring-ivory/20 hover:bg-ivory/5",
  link: "text-ivory link-underline pb-1",
};

export function Button({
  variant = "primary",
  href,
  showArrow = false,
  className = "",
  children,
  ...rest
}: Props) {
  const cls = `inline-flex items-center gap-3 text-sm tracking-wide transition-all ${styles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && variant !== "link" && (
        <span className="grid h-6 w-6 place-items-center rounded-full bg-bg/10">
          <ArrowRight size={13} strokeWidth={2.25} />
        </span>
      )}
      {showArrow && variant === "link" && <ArrowRight size={13} strokeWidth={2.25} />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: variant === "link" ? 1 : 1.02 }}
        whileTap={{ scale: variant === "link" ? 1 : 0.98 }}
        className={cls}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: variant === "link" ? 1 : 1.02 }}
      whileTap={{ scale: variant === "link" ? 1 : 0.98 }}
      className={cls}
      {...(rest as ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}
