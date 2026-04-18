import Image from "next/image";
import { about } from "@/lib/content";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { ChapterIntro, ChapterOutro, PageWipe } from "@/components/ui/Chapter";

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="container-page">
        <ChapterIntro
          chapter="II"
          page="p. 14"
          eyebrow={about.eyebrow}
          kicker="A half-century at the pass"
          title={
            <>
              Blending{" "}
              <em className="font-display italic text-wine">tradition</em>
              <br />
              &amp; innovation to create
              <br />
              <span className="script text-gold text-[1.4em] inline-block -rotate-2 mx-2">
                unforgettable
              </span>
              dining experiences.
            </>
          }
        />

        <PageWipe className="mt-16 lg:mt-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <Reveal className="lg:col-span-5 lg:pt-8 relative" delay={0.05}>
              <div className="relative">
                <div className="absolute -inset-3 border border-gold/40 rounded-[3px] pointer-events-none" />
                <Parallax distance={50} className="frame aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=85"
                    alt="Chef Étienne Laurent at the pass"
                    fill
                    sizes="(min-width: 1024px) 35vw, 80vw"
                    className="object-cover scale-110"
                  />
                </Parallax>
                <div className="mt-5 flex items-center justify-between">
                  <div className="caption">Chef Étienne Laurent</div>
                  <div className="script text-2xl text-wine">Plate Nº14</div>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="text-lg text-espresso/75 leading-relaxed max-w-xl">
                  {about.body}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <blockquote className="mt-12 relative pl-10 border-l-2 border-gold">
                  <span
                    aria-hidden
                    className="absolute -left-2 -top-8 font-display text-[9rem] leading-none text-wine/15 select-none"
                  >
                    &ldquo;
                  </span>
                  <p className="font-display italic text-3xl lg:text-4xl text-espresso leading-tight">
                    {about.quote}
                  </p>
                  <footer className="mt-5 caption">— {about.quoteAuthor}</footer>
                </blockquote>
              </Reveal>

              <Stagger className="mt-16 grid grid-cols-3 gap-8">
                {about.stats.map((s) => (
                  <StaggerChild key={s.label} className="flex flex-col gap-2">
                    <div className="font-display text-5xl lg:text-6xl text-wine leading-none">
                      {s.value}
                    </div>
                    <div className="h-px w-10 bg-gold" />
                    <div className="caption max-w-[14ch]">{s.label}</div>
                  </StaggerChild>
                ))}
              </Stagger>
            </div>
          </div>
        </PageWipe>

        <ChapterOutro page="p. 14 — 27" next="La Carte" />
      </div>
    </section>
  );
}
