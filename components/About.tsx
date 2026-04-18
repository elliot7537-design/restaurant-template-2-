import Image from "next/image";
import { about } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-40 border-t border-line">
      <div className="container-page">
        <Reveal>
          <div className="flex items-start justify-between mb-20">
            <span className="section-index">Chapter 02 — {about.eyebrow}</span>
            <span className="caption hidden sm:inline">Paris · 1976 — 2026</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="heading-serif text-5xl sm:text-6xl lg:text-7xl max-w-3xl">
              Blending <em className="text-gold">tradition</em> &amp; innovation to create
              unforgettable dining experiences.
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-2xl">
              <p className="text-ivory/70 leading-relaxed">{about.body}</p>
              <div className="pl-6 border-l border-line">
                <p className="script text-4xl leading-tight">{about.quote}</p>
                <p className="caption mt-3">— {about.quoteAuthor}</p>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap gap-10">
              {about.stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-3">
                  <span className="font-serif text-5xl text-gold leading-none">{s.value}</span>
                  <span className="caption max-w-[8ch] leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 lg:pt-24">
            <figure className="relative">
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80"
                  alt="Chef Étienne Laurent at the pass"
                  width={1200}
                  height={1500}
                  className="h-[560px] w-full object-cover grayscale-[15%]"
                />
              </div>
              <figcaption className="mt-4 flex items-start justify-between gap-4">
                <span className="caption">Plate №14 — Étienne Laurent, Chef Patron</span>
                <span className="caption tabular-nums">Fig. 02</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
