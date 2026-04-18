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
    <section id="menu" className="relative py-28 lg:py-40 border-t border-line">
      <div className="container-page">
        <Reveal>
          <div className="flex items-start justify-between mb-16">
            <span className="section-index">Chapter 03 — La Carte</span>
            <span className="caption hidden sm:inline">Spring Tasting · April 2026</span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="heading-serif text-5xl sm:text-6xl lg:text-7xl max-w-4xl">
            Your next favorite <em className="text-gold">meal</em> awaits —
            <span className="text-ivory/40"> each plate a slow conversation.</span>
          </h2>
        </Reveal>

        {/* Tab rail */}
        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-b border-line pb-4">
          {keys.map((k, i) => {
            const isActive = k === active;
            return (
              <button
                key={k}
                onClick={() => setActive(k)}
                className="relative flex items-baseline gap-3 text-ivory/60 hover:text-ivory transition-colors pb-2"
              >
                <span className="caption text-gold/60 tabular-nums">
                  0{i + 1}
                </span>
                <span
                  className={`font-serif text-2xl sm:text-3xl transition-colors ${
                    isActive ? "text-ivory" : ""
                  }`}
                >
                  {menu[k].label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="menu-underline"
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gold"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="mt-12 min-h-[460px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-x-16 gap-y-2"
            >
              {current.items.map((item, i) => (
                <article
                  key={item.name}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 py-6 border-b border-line"
                >
                  <span className="caption text-gold/60 tabular-nums">
                    №{String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-ivory">{item.name}</h3>
                    <p className="mt-2 text-sm text-ivory/60 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                    {item.tag && (
                      <span className="mt-3 inline-block caption text-gold">— {item.tag}</span>
                    )}
                  </div>
                  <span className="font-serif text-2xl text-ivory/80 tabular-nums">
                    €{item.price}
                  </span>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
