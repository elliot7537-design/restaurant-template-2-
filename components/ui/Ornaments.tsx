"use client";

import { motion } from "framer-motion";

type ColorProps = { color?: string; className?: string };

/* A centered ornamental divider: thin line — diamond — thin line */
export function Divider({ color = "currentColor", className = "" }: ColorProps) {
  return (
    <motion.svg
      viewBox="0 0 400 20"
      className={`block ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6 }}
      aria-hidden
    >
      <motion.line
        x1="0"
        y1="10"
        x2="180"
        y2="10"
        stroke={color}
        strokeWidth="0.6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.g
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.45, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "200px 10px" }}
      >
        <rect x="195" y="5" width="10" height="10" fill="none" stroke={color} strokeWidth="0.8" />
        <rect x="198" y="8" width="4" height="4" fill={color} />
      </motion.g>
      <motion.line
        x1="220"
        y1="10"
        x2="400"
        y2="10"
        stroke={color}
        strokeWidth="0.6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.svg>
  );
}

/* A drawn laurel branch — use as corner flourish */
export function Laurel({ color = "currentColor", className = "", mirror = false }: ColorProps & { mirror?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 180"
      className={className}
      style={{ transform: mirror ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <g stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round">
        <path d="M60 10 C 45 50, 40 100, 55 170" />
        {/* leaves */}
        {Array.from({ length: 9 }).map((_, i) => {
          const y = 25 + i * 16;
          const flip = i % 2 === 0 ? 1 : -1;
          return (
            <g key={i}>
              <path
                d={`M${58} ${y} Q ${55 + flip * 14} ${y - 4}, ${55 + flip * 26} ${y + 2} Q ${55 + flip * 14} ${y + 8}, ${58} ${y}`}
                fill={color}
                fillOpacity="0.15"
              />
            </g>
          );
        })}
        <circle cx="58" cy="172" r="2.5" fill={color} />
      </g>
    </svg>
  );
}

/* A small decorative sprig for subtle accents */
export function Sprig({ color = "currentColor", className = "" }: ColorProps) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden>
      <g stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round">
        <path d="M2 15 Q 15 12, 30 15 T 58 15" />
        <ellipse cx="14" cy="11" rx="4" ry="2" fill={color} fillOpacity="0.2" transform="rotate(-20 14 11)" />
        <ellipse cx="22" cy="18" rx="4" ry="2" fill={color} fillOpacity="0.2" transform="rotate(20 22 18)" />
        <ellipse cx="34" cy="11" rx="4" ry="2" fill={color} fillOpacity="0.2" transform="rotate(-20 34 11)" />
        <ellipse cx="44" cy="18" rx="4" ry="2" fill={color} fillOpacity="0.2" transform="rotate(20 44 18)" />
      </g>
    </svg>
  );
}

/* A circular stamp with text along the curve */
export function CircularStamp({
  topText = "LA TABLE ÉTERNELLE",
  bottomText = "MICHELIN · 2026",
  className = "",
  children,
}: {
  topText?: string;
  bottomText?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        viewBox="0 0 200 200"
        className="h-full w-full animate-slow-spin"
        aria-hidden
      >
        <defs>
          <path id="stamp-top" d="M 30,100 A 70,70 0 0 1 170,100" />
          <path id="stamp-bot" d="M 170,100 A 70,70 0 0 1 30,100" />
        </defs>
        <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 3" opacity="0.7" />
        <text fill="currentColor" fontSize="11" letterSpacing="4" style={{ fontFamily: "var(--font-serif), serif" }}>
          <textPath href="#stamp-top" startOffset="50%" textAnchor="middle">
            {topText}
          </textPath>
        </text>
        <text fill="currentColor" fontSize="11" letterSpacing="4" style={{ fontFamily: "var(--font-serif), serif" }}>
          <textPath href="#stamp-bot" startOffset="50%" textAnchor="middle">
            {bottomText}
          </textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  );
}

/* Decorative scroll indicator for hero */
export function ScrollHint({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <span className="caption">Scroll</span>
      <motion.div
        className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
        animate={{ scaleY: [0.4, 1, 0.4], originY: 0 }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
