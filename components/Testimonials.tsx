import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="container-page py-24 lg:py-32">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow mx-auto">{testimonials.eyebrow}</span>
          <h2 className="heading-serif mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Where every visit becomes a great{" "}
            <span className="script text-burgundy text-5xl sm:text-6xl lg:text-7xl">
              memory
            </span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {testimonials.items.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.1}>
            <article className="card-soft h-full p-8 flex flex-col">
              <div className="flex gap-1 text-burgundy">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 font-serif text-xl leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-auto pt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-burgundy text-cream font-serif">
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-ink">{t.author}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted">
                    {t.role}
                  </div>
                </div>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
