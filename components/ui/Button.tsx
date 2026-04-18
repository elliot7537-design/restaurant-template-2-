"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "ghost" | "link";

type Props = {
  variant?: Variant;
  href?: string;
  showArrow?: boolean;
  magnetic?: boolean;
} & ComponentPropsWithoutRef<"button">;

const styles: Record<Variant, string> = {
  primary:
    "bg-wine text-cream hover:bg-wine-deep px-7 py-4 rounded-full shadow-warm",
  ghost:
    "bg-transparent text-espresso px-7 py-4 rounded-full ring-1 ring-espresso/20 hover:bg-espresso hover:text-cream",
  link: "text-espresso link-underline pb-1",
};

export function Button({
  variant = "primary",
  href,
  showArrow = false,
  magnetic = true,
  className = "",
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 200, damping: 20, mass: 0.6 });
  const arrowX = useTransform(sx, (v) => v * 0.6);

  const handleMove = (e: React.PointerEvent) => {
    if (!magnetic || variant === "link") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 14);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 10);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cls = `group relative inline-flex items-center gap-3 text-sm tracking-wide transition-colors ${styles[variant]} ${className}`;

  const inner = (
    <motion.span className="relative z-10 inline-flex items-center gap-3" style={{ x: sx, y: sy }}>
      <span>{children}</span>
      {showArrow && variant !== "link" && (
        <motion.span
          style={{ x: arrowX }}
          className="grid h-7 w-7 place-items-center rounded-full bg-cream/15 group-hover:bg-cream/25 transition-colors"
        >
          <ArrowRight size={13} strokeWidth={2.25} />
        </motion.span>
      )}
      {showArrow && variant === "link" && <ArrowRight size={13} strokeWidth={2.25} />}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        whileTap={{ scale: 0.97 }}
        className={cls}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      className={cls}
      {...(rest as ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {inner}
    </motion.button>
  );
}
