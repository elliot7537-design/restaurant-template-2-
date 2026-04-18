import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-line">
      <div className="container-page">
        <Reveal>
          <div className="flex items-start justify-between mb-16">
            <span className="section-index">Chapter 07 — {testimonials.eyebrow}</span>
            <span className="caption hidden sm:inline">As heard in the dining room</span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="heading-serif text-5xl sm:text-6xl lg:text-7xl max-w-4xl">
            Where every visit becomes a great{" "}
            <em className="text-gold">memory.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-10 lg:gap-8">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.12} className={`lg:col-span-4 ${i === 1 ? "lg:translate-y-16" : ""}`}>
              <figure className="flex flex-col h-full">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={12} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-6 font-serif text-2xl lg:text-3xl text-ivory leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto pt-10 border-t border-line">
                  <div className="caption tabular-nums">№{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-3 font-serif text-lg">{t.author}</div>
                  <div className="caption mt-1">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
