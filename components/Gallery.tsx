"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gallery } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 lg:py-40 border-t border-line">
      <div className="container-page">
        <Reveal>
          <div className="flex items-start justify-between mb-16">
            <span className="section-index">Chapter 05 — Gallery</span>
            <span className="caption hidden sm:inline">Photographs by Claire Moreau</span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="heading-serif text-5xl sm:text-6xl lg:text-7xl max-w-4xl">
            Taste the <em className="text-gold">vibes</em> —
            <span className="text-ivory/40"> moments from the room.</span>
          </h2>
        </Reveal>

        {/* Editorial asymmetric grid */}
        <div className="mt-20 grid grid-cols-12 gap-5 lg:gap-8">
          {gallery.map((g, i) => {
            const layouts = [
              "col-span-12 md:col-span-8 aspect-[16/10]",
              "col-span-6 md:col-span-4 aspect-[3/4] md:translate-y-16",
              "col-span-6 md:col-span-4 aspect-square",
              "col-span-6 md:col-span-5 aspect-[5/6]",
              "col-span-12 md:col-span-3 aspect-[3/4] md:translate-y-8",
              "col-span-6 md:col-span-7 aspect-[16/10] md:-translate-y-4",
            ];
            return (
              <motion.figure
                key={g.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-sm ring-1 ring-line ${layouts[i % layouts.length]}`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 50vw"
                  className="object-cover grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-ivory/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{g.alt}</span>
                  <span className="tabular-nums">№{String(i + 1).padStart(2, "0")}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
