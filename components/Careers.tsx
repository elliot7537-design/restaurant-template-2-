import { ArrowUpRight } from "lucide-react";
import { careers } from "@/lib/content";
import { Stagger, StaggerChild } from "@/components/ui/Reveal";
import { ChapterIntro, ChapterOutro, PageWipe } from "@/components/ui/Chapter";

export function Careers() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="container-page">
        <ChapterIntro
          chapter="VI"
          page="p. 70"
          eyebrow={careers.eyebrow}
          kicker={`Currently hiring · ${careers.roles.length} roles`}
          title={
            <>
              We're looking for{" "}
              <span className="script text-wine text-[1.2em] inline-block -rotate-2">
                passionate
              </span>{" "}
              <em className="italic">people.</em>
            </>
          }
        />

        <PageWipe className="mt-10 lg:mt-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <p className="text-espresso/70 leading-relaxed">{careers.body}</p>
            </div>

            <Stagger className="lg:col-span-8" stagger={0.05}>
              <ul>
                {careers.roles.map((r, i) => (
                  <StaggerChild key={r.title}>
                    <a
                      href="mailto:careers@latable.fr"
                      className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 border-t border-line last:border-b transition-all hover:pl-3"
                    >
                      <span className="font-display italic text-gold text-xl tabular-nums self-start mt-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <span className="font-display text-2xl lg:text-3xl text-espresso group-hover:text-wine transition-colors">
                            {r.title}
                          </span>
                          <span className="caption">— {r.location}</span>
                        </div>
                        <p className="mt-1.5 text-sm text-espresso/65 max-w-lg leading-relaxed">
                          {r.body}
                        </p>
                      </div>
                      <div className="self-start mt-2 shrink-0 grid h-10 w-10 place-items-center rounded-full ring-1 ring-espresso/20 group-hover:bg-wine group-hover:text-cream group-hover:ring-wine transition-all duration-500 group-hover:rotate-45">
                        <ArrowUpRight size={16} />
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
