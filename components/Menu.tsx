"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { menu } from "@/lib/content";
import { ChapterIntro, ChapterOutro, PageWipe } from "@/components/ui/Chapter";

const keys = Object.keys(menu) as (keyof typeof menu)[];

export function Menu() {
  const [active, setActive] = useState<keyof typeof menu>(keys[0]);
  const current = menu[active];

  return (
    <section id="menu" className="relative py-16 lg:py-24 bg-cream-warm/60">
      <div className="container-page">
        <ChapterIntro
          chapter="III"
          page="p. 28"
          eyebrow="La Carte"
          kicker="Seasonal menu · Spring tasting"
          title={
            <>
              Your next favorite{" "}
              <span className="script text-wine text-[1.3em] inline-block -rotate-2">
                meal
              </span>{" "}
              <em className="italic">awaits.</em>
            </>
          }
        />

        <PageWipe className="mt-10 lg:mt-12">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 border-b border-line pb-3">
            {keys.map((k, i) => {
              const isActive = k === active;
              return (
                <button
                  key={k}
                  onClick={() => setActive(k)}
                  className={`relative flex items-baseline gap-2 pb-2 transition-colors ${
                    isActive ? "text-wine" : "text-espresso/50 hover:text-espresso"
                  }`}
                >
                  <span className="caption tabular-nums opacity-60">0{i + 1}</span>
                  <span className="font-display italic text-2xl sm:text-3xl">
                    {menu[k].label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="menu-tab-underline"
                      className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-wine to-gold"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="mt-8 grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12 items-start">
            {/* Menu list */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                >
                  {current.items.map((item, i) => (
                    <motion.article
                      key={item.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.035, duration: 0.4 }}
                      className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-4 border-b border-line hover:bg-cream/40 transition-colors px-2 -mx-2 rounded"
                    >
                      <span className="font-display italic text-gold text-lg tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex items-baseline gap-3">
                          <h3 className="font-display text-xl lg:text-2xl text-espresso">
                            {item.name}
                          </h3>
                          {item.tag && (
                            <span className="text-[9px] uppercase tracking-[0.3em] text-wine whitespace-nowrap">
                              · {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-espresso/65 leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-baseline gap-0.5">
                        <span className="caption">€</span>
                        <span className="font-display text-2xl text-espresso tabular-nums">
                          {item.price}
                        </span>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Featured dish card */}
            <div className="lg:sticky lg:top-24">
              <AnimatePresence mode="wait">
                <motion.aside
                  key={active}
                  initial={{ opacity: 0, y: 16, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: -1.5 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-cream rounded-[3px] shadow-lift ring-1 ring-gold/20 overflow-hidden"
                >
                  <div className="absolute inset-2 border border-gold/40 rounded-[2px] pointer-events-none z-10" />
                  <div className="relative aspect-[5/4]">
                    <Image
                      src={current.feature.image}
                      alt={current.feature.title}
                      fill
                      sizes="(min-width: 1024px) 28vw, 80vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-wine animate-shimmer" />
                      <span className="text-[9px] uppercase tracking-[0.3em] text-espresso">
                        Chef's selection
                      </span>
                    </div>
                  </div>
                  <div className="p-5 lg:p-6">
                    <div className="script text-2xl text-wine">Featured</div>
                    <h4 className="mt-1 font-display text-2xl lg:text-3xl text-espresso leading-tight">
                      {current.feature.title}
                    </h4>
                    <p className="mt-3 text-sm text-espresso/70 leading-relaxed">
                      {current.feature.note}
                    </p>
                    <div className="mt-4 rule-gold" />
                    <div className="mt-3 flex items-center justify-between caption">
                      <span>{menu[active].label} · Spring 2026</span>
                      <span className="script text-xl text-wine normal-case tracking-normal">voilà</span>
                    </div>
                  </div>
                </motion.aside>
              </AnimatePresence>
            </div>
          </div>
        </PageWipe>

        <ChapterOutro page="p. 28 — 41" next="Reservations" />
      </div>
    </section>
  );
}
