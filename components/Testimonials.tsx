"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import { ChapterIntro, ChapterOutro, PageWipe } from "@/components/ui/Chapter";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const count = testimonials.items.length;

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count]);

  const t = testimonials.items[active];

  return (
    <section className="relative py-28 lg:py-36 bg-cream-warm/60">
      <div className="container-page">
        <ChapterIntro
          chapter="VII"
          page="p. 84"
          eyebrow={testimonials.eyebrow}
          kicker="As heard in the dining room"
          title={
            <>
              Where every visit becomes a great{" "}
              <span className="script text-wine text-[1.3em] inline-block -rotate-2">
                memory.
              </span>
            </>
          }
        />

        <PageWipe className="mt-20 max-w-4xl mx-auto">
          <div className="relative">
            <span
              aria-hidden
              className="absolute -top-10 -left-4 lg:-left-16 font-display text-[12rem] leading-none text-wine/12 select-none"
            >
              &ldquo;
            </span>

            <div className="relative min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <div className="flex justify-center gap-1 text-gold">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display italic text-3xl md:text-4xl lg:text-5xl text-espresso leading-tight">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-10">
                    <div className="h-px w-10 bg-gold mx-auto mb-4" />
                    <div className="script text-3xl text-wine">{t.author}</div>
                    <div className="caption mt-2">{t.role}</div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4">
              {testimonials.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative h-[2px] w-16 bg-espresso/15 overflow-hidden transition-all hover:bg-espresso/30"
                  aria-label={`View testimonial ${i + 1}`}
                >
                  {i === active && (
                    <motion.span
                      key={`progress-${active}`}
                      className="absolute inset-y-0 left-0 bg-wine"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </PageWipe>

        <ChapterOutro page="p. 84 — 97" next="Colophon" />
      </div>
    </section>
  );
}
