"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gallery } from "@/lib/content";
import { Parallax } from "@/components/ui/Parallax";
import { ChapterIntro, ChapterOutro, PageWipe } from "@/components/ui/Chapter";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 lg:py-36 bg-cream-warm/60">
      <div className="container-page">
        <ChapterIntro
          chapter="V"
          page="p. 56"
          eyebrow="Gallery"
          kicker="Photographs by Claire Moreau"
          title={
            <>
              Taste the{" "}
              <span className="script text-wine text-[1.3em] inline-block -rotate-2">
                vibes
              </span>{" "}
              through our <em className="italic">lens.</em>
            </>
          }
        />

        <PageWipe className="mt-20">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {gallery.map((g, i) => {
              const layouts = [
                "col-span-12 md:col-span-7 aspect-[16/10]",
                "col-span-6 md:col-span-5 aspect-[4/5] md:translate-y-12",
                "col-span-6 md:col-span-4 aspect-square",
                "col-span-6 md:col-span-5 aspect-[5/6] md:-translate-y-8",
                "col-span-12 md:col-span-3 aspect-[3/4] md:translate-y-6",
                "col-span-6 md:col-span-6 aspect-[16/10]",
              ];
              return (
                <motion.figure
                  key={g.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className={`group relative overflow-hidden rounded-[3px] ring-1 ring-espresso/5 shadow-soft ${layouts[i % layouts.length]}`}
                >
                  <div className="absolute inset-2 border border-cream/0 group-hover:border-gold/60 rounded-[2px] pointer-events-none z-10 transition-colors duration-500" />
                  <Parallax distance={30} className="h-full w-full">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 50vw"
                      className="object-cover scale-110 transition-transform duration-700 group-hover:scale-[1.18]"
                    />
                  </Parallax>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-espresso/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-cream translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="script text-2xl">{g.alt}</span>
                    <span className="caption text-cream/70 tabular-nums">
                      N°{String(i + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        </PageWipe>

        <ChapterOutro page="p. 56 — 69" next="Careers" />
      </div>
    </section>
  );
}
