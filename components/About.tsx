import Image from "next/image";
import { about } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { ChapterIntro, ChapterOutro, PageWipe } from "@/components/ui/Chapter";

export function About() {
  return (
    <section id="about" className="relative py-16 lg:py-24">
      <div className="container-page">
        <ChapterIntro
          chapter="II"
          page="p. 14"
          eyebrow={about.eyebrow}
          kicker="A half-century at the pass"
          title={
            <>
              Blending{" "}
              <em className="font-display italic text-wine">tradition</em> &amp; innovation to create{" "}
              <span className="script text-gold text-[1.4em] inline-block -rotate-2">
                unforgettable
              </span>{" "}
              experiences.
            </>
          }
        />

        <PageWipe className="mt-10 lg:mt-14">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Chef portrait */}
            <Reveal className="lg:col-span-5 relative" delay={0.05}>
              <div className="relative">
                <div className="absolute -inset-3 border border-gold/40 rounded-[3px] pointer-events-none" />
                <Parallax distance={40} className="frame aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=85"
                    alt="Chef Étienne Laurent at the pass"
                    fill
                    sizes="(min-width: 1024px) 35vw, 80vw"
                    className="object-cover scale-110"
                  />
                </Parallax>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="caption">Chef Étienne Laurent</div>
                <div className="script text-2xl text-wine">Plate Nº14</div>
              </div>
            </Reveal>

            {/* Copy column */}
            <div className="lg:col-span-7 lg:pt-4">
              <Reveal>
                <p className="text-lg text-espresso/75 leading-relaxed max-w-xl">
                  {about.body}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <blockquote className="mt-8 relative pl-8 border-l-2 border-gold">
                  <span
                    aria-hidden
                    className="absolute -left-2 -top-6 font-display text-[6rem] leading-none text-wine/15 select-none"
                  >
                    &ldquo;
                  </span>
                  <p className="font-display italic text-2xl lg:text-3xl text-espresso leading-tight">
                    {about.quote}
                  </p>
                  <footer className="mt-3 caption">— {about.quoteAuthor}</footer>
                </blockquote>
              </Reveal>

              <Reveal delay={0.15}>
                <dl className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-line">
                  {about.stats.map((s) => (
                    <div key={s.label} className="flex flex-col gap-1.5">
                      <dt className="font-display text-4xl lg:text-5xl text-wine leading-none">
                        {s.value}
                      </dt>
                      <dd className="caption max-w-[14ch]">{s.label}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </PageWipe>

        <ChapterOutro page="p. 14 — 27" next="La Carte" />
      </div>
    </section>
  );
}
