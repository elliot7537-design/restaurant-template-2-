import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { footer } from "@/lib/content";
import { Laurel } from "@/components/ui/Ornaments";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <Instagram size={14} />,
  Facebook: <Facebook size={14} />,
  TripAdvisor: <span className="text-[9px] font-bold tracking-wider">T/A</span>,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-cream">
      <Laurel className="pointer-events-none absolute -top-4 left-8 h-52 w-32 text-gold/15" />
      <Laurel
        mirror
        className="pointer-events-none absolute -top-4 right-8 h-52 w-32 text-gold/15"
      />

      <div className="container-page pt-16 pb-8 relative">
        <div className="text-center mb-12">
          <span className="script text-4xl text-gold-bright">Merci</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="script text-[3rem] leading-none text-cream">La Table Éternelle</div>
            <p className="mt-4 max-w-sm text-cream/60 leading-relaxed text-sm">{footer.tagline}</p>

            <div className="mt-6 flex gap-2">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-cream/15 hover:bg-gold hover:text-espresso hover:ring-gold transition-all"
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="caption text-gold">Visit</h4>
            <ul className="mt-4 space-y-1.5 text-sm text-cream/80">
              {footer.address.map((line) => (
                <li key={line} className="flex gap-2">
                  <MapPin size={12} className="mt-1 shrink-0 text-gold" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="caption text-gold">Hours</h4>
            <ul className="mt-4 space-y-1.5 text-sm">
              {footer.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between gap-4 border-b border-cream/10 pb-1.5"
                >
                  <span className="text-cream/80">{h.day}</span>
                  <span className="text-cream/50 tabular-nums">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="caption text-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {footer.contact.map((c) => (
                <li key={c.label}>
                  <div className="flex items-center gap-2 caption text-gold/80">
                    {c.label.includes("Reservation") ? <Phone size={11} /> : <Mail size={11} />}
                    {c.label}
                  </div>
                  <div className="mt-0.5 text-cream">{c.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subtle wordmark strip */}
        <div
          aria-hidden
          className="mt-16 select-none text-center font-display italic leading-none text-cream/[0.05]"
          style={{ fontSize: "clamp(2.5rem, 11vw, 9rem)", letterSpacing: "-0.04em" }}
        >
          {footer.wordmark}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-cream/10 pt-5">
          <span className="caption text-cream/60">{footer.fineprint}</span>
          <span className="script text-xl text-gold">Crafted with patience, in Paris.</span>
        </div>
      </div>
    </footer>
  );
}
