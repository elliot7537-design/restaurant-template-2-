import Image from "next/image";
import { Quote } from "lucide-react";
import { about } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="container-page py-24 lg:py-32">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
        <Reveal>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="heading-serif mt-5 text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
            {about.title}
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">{about.body}</p>

          <blockquote className="mt-10 flex gap-4 border-l-2 border-burgundy pl-6">
            <Quote className="mt-1 shrink-0 text-burgundy" size={22} />
            <div>
              <p className="script text-3xl text-ink leading-tight">{about.quote}</p>
              <footer className="mt-2 text-sm uppercase tracking-[0.25em] text-muted">
                — {about.quoteAuthor}
              </footer>
            </div>
          </blockquote>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-ink/5 shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80"
                alt="Chef Étienne Laurent at the pass"
                width={1200}
                height={900}
                className="h-[460px] w-full object-cover"
                priority={false}
              />
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="card-soft px-4 py-5 text-center"
                >
                  <div className="font-serif text-3xl text-burgundy">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
