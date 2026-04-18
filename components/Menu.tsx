"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { menu } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Divider, Sprig } from "@/components/ui/Ornaments";

const keys = Object.keys(menu) as (keyof typeof menu)[];

export function Menu() {
  const [active, setActive] = useState<keyof typeof menu>(keys[0]);
  const current = menu[active];

  return (
    <section id="menu" className="relative py-28 lg:py-36 bg-cream-warm/60">
      <div className="container-page">
        {/* Ornamental header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <Sprig className="h-5 w-20 text-gold" />
          <span className="section-index">Chapter 03</span>
          <span className="caption">La Carte</span>
          <Divider className="text-wine/40 max-w-md" />
        </div>

        <Reveal>
          <h2 className="heading-serif text-center text-5xl sm:text-6xl lg:text-[4.5rem] max-w-4xl mx-auto">
            Your next favorite{" "}
            <span className="script text-wine text-[1.3em] inline-block -rotate-2">
              meal
            </span>{" "}
            <em className="italic">awaits.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-espresso/60 max-w-lg mx-auto">
            Seasonal menus change monthly. Below, a selection from our current
            spring tasting — April 2026.
          </p>
        </Reveal>

        {/* Tabs */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 lg:gap-14 border-b border-line pb-5">
          {keys.map((k, i) => {
            const isActive = k === active;
            return (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={`relative flex items-baseline gap-3 pb-2 transition-colors ${
                  isActive ? "text-wine" : "text-espresso/50 hover:text-espresso"
                }`}
              >
                <span className="caption tabular-nums opacity-60">0{i + 1}</span>
                <span className="font-display italic text-3xl sm:text-4xl">
                  {menu[k].label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="menu-tab-underline"
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-wine to-gold"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="mt-14 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Menu list */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45 }}
              >
                {current.items.map((item, i) => (
                  <motion.article
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 py-6 border-b border-line hover:bg-cream/40 transition-colors px-2 -mx-2 rounded"
                  >
                    <span className="font-display italic text-gold text-xl tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl text-espresso">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm text-espresso/65 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                      {item.tag && (
                        <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-wine">
                          <span className="h-px w-5 bg-wine" />
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="caption">€</span>
                      <span className="font-display text-3xl text-espresso tabular-nums">
                        {item.price}
                      </span>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Featured dish card */}
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.aside
                key={active}
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -1.5 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-cream rounded-[3px] shadow-lift ring-1 ring-gold/20 overflow-hidden"
              >
                <div className="absolute inset-2 border border-gold/40 rounded-[2px] pointer-events-none z-10" />
                <div className="relative aspect-[4/5]">
                  <Image
                    src={current.feature.image}
                    alt={current.feature.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, 80vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 bg-cream/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-wine animate-shimmer" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-espresso">
                      Chef's selection
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="script text-3xl text-wine">Featured</div>
                  <h4 className="mt-1 font-display text-3xl lg:text-4xl text-espresso leading-tight">
                    {current.feature.title}
                  </h4>
                  <p className="mt-4 text-sm text-espresso/70 leading-relaxed">
                    {current.feature.note}
                  </p>
                  <div className="mt-6 rule-gold" />
                  <div className="mt-6 flex items-center justify-between">
                    <span className="caption">{menu[active].label} · Spring 2026</span>
                    <span className="script text-2xl text-wine">voilà</span>
                  </div>
                </div>
              </motion.aside>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
