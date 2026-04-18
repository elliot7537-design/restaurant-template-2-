import { ArrowUpRight } from "lucide-react";
import { careers } from "@/lib/content";
import { Stagger, StaggerChild } from "@/components/ui/Reveal";
import { ChapterIntro, ChapterOutro, PageWipe } from "@/components/ui/Chapter";

export function Careers() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="container-page">
        <ChapterIntro
          chapter="VI"
          page="p. 70"
          eyebrow={careers.eyebrow}
          kicker={`Currently hiring · ${careers.roles.length} roles`}
          title={
            <>
              We're always looking for{" "}
              <span className="script text-wine text-[1.2em] inline-block -rotate-2">
                passionate
              </span>{" "}
              <em className="italic">people.</em>
            </>
          }
        />

        <PageWipe className="mt-16 lg:mt-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="text-espresso/70 leading-relaxed max-w-md text-lg">{careers.body}</p>
              <div className="mt-8 script text-3xl text-wine">— join our table</div>
            </div>

            <Stagger className="lg:col-span-7" stagger={0.12}>
              <ul>
                {careers.roles.map((r, i) => (
                  <StaggerChild key={r.title}>
                    <a
                      href="mailto:careers@latable.fr"
                      className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 py-8 border-t border-line last:border-b transition-all hover:pl-4"
                    >
                      <span className="font-display italic text-gold text-2xl tabular-nums self-start mt-3">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="font-display text-3xl lg:text-4xl text-espresso group-hover:text-wine transition-colors">
                          {r.title}
                        </div>
                        <div className="mt-2 flex items-center gap-3">
                          <span className="h-px w-6 bg-gold" />
                          <span className="caption">{r.location}</span>
                        </div>
                        <p className="mt-3 text-espresso/65 max-w-lg leading-relaxed">{r.body}</p>
                      </div>
                      <div className="self-start mt-3 shrink-0 grid h-12 w-12 place-items-center rounded-full ring-1 ring-espresso/20 group-hover:bg-wine group-hover:text-cream group-hover:ring-wine transition-all duration-500 group-hover:rotate-45">
                        <ArrowUpRight size={18} />
                      </div>
                    </a>
                  </StaggerChild>
                ))}
              </ul>
            </Stagger>
          </div>
        </PageWipe>

        <ChapterOutro page="p. 70 — 83" next="Guest Voices" />
      </div>
    </section>
  );
}
