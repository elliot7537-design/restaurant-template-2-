import Image from "next/image";
import { about } from "@/lib/content";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/Reveal";
import { Divider, Sprig } from "@/components/ui/Ornaments";
import { Parallax } from "@/components/ui/Parallax";

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="container-page">
        {/* Ornamental top divider */}
        <div className="flex flex-col items-center gap-4 mb-20">
          <Sprig className="h-5 w-20 text-gold" />
          <span className="section-index">Chapter 02</span>
          <span className="caption">Our Story</span>
          <Divider className="text-wine/40 max-w-md" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: chef portrait with parallax */}
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

          {/* Right: copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="heading-serif text-5xl sm:text-6xl lg:text-[4.5rem]">
                Blending{" "}
                <em className="font-display italic text-wine">tradition</em>
                <br />
                &amp; innovation to create
                <br />
                <span className="script text-gold text-[1.4em] inline-block -rotate-2 mx-2">
                  unforgettable
                </span>
                dining experiences.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-10 max-w-xl text-lg text-espresso/75 leading-relaxed">
                {about.body}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
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
      </div>
    </section>
  );
}
