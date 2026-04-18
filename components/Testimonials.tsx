import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Stagger, StaggerChild } from "@/components/ui/Reveal";
import { ChapterIntro, ChapterOutro, PageWipe } from "@/components/ui/Chapter";

export function Testimonials() {
  return (
    <section className="relative py-16 lg:py-24 bg-cream-warm/60">
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

        <PageWipe className="mt-10 lg:mt-12">
          <Stagger className="grid md:grid-cols-3 gap-5 lg:gap-6" stagger={0.08}>
            {testimonials.items.map((t, i) => (
              <StaggerChild key={t.author}>
                <figure className="relative h-full bg-cream rounded-[3px] ring-1 ring-line shadow-soft p-6 lg:p-7 flex flex-col">
                  <span
                    aria-hidden
                    className="absolute -top-4 left-5 font-display text-[5rem] leading-none text-wine/15 select-none"
                  >
                    &ldquo;
                  </span>
                  <div className="flex gap-1 text-gold relative z-10">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={12} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-4 font-display italic text-xl lg:text-2xl text-espresso leading-snug relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto pt-6 flex items-center gap-3">
                    <span className="caption tabular-nums">№{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px w-5 bg-gold" />
                    <div>
                      <div className="script text-2xl text-wine leading-none">{t.author}</div>
                      <div className="caption mt-1">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </StaggerChild>
            ))}
          </Stagger>
        </PageWipe>

        <ChapterOutro page="p. 84 — 97" next="Colophon" />
      </div>
    </section>
  );
}
