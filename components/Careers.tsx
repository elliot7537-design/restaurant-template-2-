import { ArrowUpRight } from "lucide-react";
import { careers } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Careers() {
  return (
    <section className="relative bg-cream-dark/40 py-24 lg:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <Reveal>
            <span className="eyebrow">{careers.eyebrow}</span>
            <h2 className="heading-serif mt-4 text-4xl sm:text-5xl lg:text-6xl">
              We're always looking for{" "}
              <span className="script text-burgundy text-5xl sm:text-6xl lg:text-7xl">
                passionate
              </span>{" "}
              people to join our team.
            </h2>
            <p className="mt-6 text-muted max-w-md leading-relaxed">{careers.body}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="space-y-3">
              {careers.roles.map((r) => (
                <li key={r.title}>
                  <a
                    href="#reserve"
                    className="group flex items-center justify-between gap-4 rounded-2xl bg-white/70 backdrop-blur-sm p-6 ring-1 ring-ink/5 shadow-soft transition-all hover:bg-white hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="font-serif text-2xl text-ink">{r.title}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.25em] text-burgundy">
                        {r.location}
                      </div>
                      <p className="mt-2 text-sm text-muted max-w-md">{r.body}</p>
                    </div>
                    <div className="shrink-0 grid h-11 w-11 place-items-center rounded-full bg-burgundy text-cream transition-transform group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
