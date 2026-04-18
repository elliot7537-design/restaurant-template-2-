import { ArrowUpRight } from "lucide-react";
import { careers } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Careers() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-line">
      <div className="container-page">
        <Reveal>
          <div className="flex items-start justify-between mb-16">
            <span className="section-index">Chapter 06 — {careers.eyebrow}</span>
            <span className="caption hidden sm:inline">Currently hiring · {careers.roles.length} roles</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="heading-serif text-5xl sm:text-6xl lg:text-7xl">
              We're always looking for{" "}
              <em className="text-gold">passionate</em> people.
            </h2>
            <p className="mt-8 text-ivory/60 leading-relaxed max-w-md">{careers.body}</p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <ul>
              {careers.roles.map((r, i) => (
                <li key={r.title}>
                  <a
                    href="mailto:careers@latable.fr"
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-8 border-t border-line last:border-b transition-colors hover:bg-ivory/[0.02]"
                  >
                    <span className="caption text-gold/60 tabular-nums self-start mt-3">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="font-serif text-3xl lg:text-4xl text-ivory group-hover:text-gold transition-colors">
                        {r.title}
                      </div>
                      <div className="mt-2 caption">{r.location}</div>
                      <p className="mt-3 text-sm text-ivory/60 max-w-lg">{r.body}</p>
                    </div>
                    <div className="self-start mt-3 shrink-0 grid h-11 w-11 place-items-center rounded-full ring-1 ring-ivory/20 group-hover:bg-gold group-hover:text-bg group-hover:ring-gold transition-all">
                      <ArrowUpRight size={16} />
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
