"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menu } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const keys = Object.keys(menu) as (keyof typeof menu)[];

export function Menu() {
  const [active, setActive] = useState<keyof typeof menu>(keys[0]);
  const current = menu[active];

  return (
    <section
      id="menu"
      className="relative py-24 lg:py-32 bg-cream-dark/60"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">La Carte</span>
              <h2 className="heading-serif mt-4 text-4xl sm:text-5xl lg:text-6xl">
                Your next favorite <span className="script text-burgundy text-6xl lg:text-7xl">meal</span> awaits.
              </h2>
            </div>
            <p className="max-w-md text-muted">
              Seasonal menus change monthly. Below: a selection from our current
              spring tasting — April 2026.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-ink/10 pb-2">
          {keys.map((k) => {
            const isActive = k === active;
            return (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={`relative rounded-full px-5 py-2.5 text-sm transition-colors ${
                  isActive ? "text-cream" : "text-ink/70 hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-tab-bg"
                    className="absolute inset-0 rounded-full bg-burgundy"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{menu[k].label}</span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="mt-10 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-x-10 gap-y-4"
            >
              {current.items.map((item) => (
                <article
                  key={item.name}
                  className="group flex gap-4 border-b border-ink/10 py-5"
                >
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-xl text-ink">
                        {item.name}
                      </h3>
                      <div className="flex-1 mx-2 translate-y-[-6px] border-b border-dotted border-ink/20" />
                      <span className="font-serif text-xl text-burgundy tabular-nums">
                        €{item.price}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                    {item.tag && (
                      <span className="mt-2 inline-block rounded-full bg-burgundy/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-burgundy">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
