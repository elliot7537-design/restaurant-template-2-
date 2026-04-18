"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gallery } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="container-page py-24 lg:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Gallery</span>
            <h2 className="heading-serif mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Taste the vibes{" "}
              <span className="script text-burgundy text-5xl sm:text-6xl lg:text-7xl">
                through our lens
              </span>
            </h2>
          </div>
          <p className="max-w-md text-muted">
            Moments from the room — plates, hands, candles, the quiet work behind
            every course.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {gallery.map((g, i) => (
          <motion.div
            key={g.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-3xl ring-1 ring-ink/5 shadow-soft ${
              i === 0 || i === 4 ? "md:row-span-2 md:aspect-[3/4]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="script text-2xl text-cream">{g.alt}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
