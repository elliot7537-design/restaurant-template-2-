import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { footer } from "@/lib/content";
import { Divider, Laurel } from "@/components/ui/Ornaments";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <Instagram size={14} />,
  Facebook: <Facebook size={14} />,
  TripAdvisor: <span className="text-[9px] font-bold tracking-wider">T/A</span>,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-cream">
      <Laurel
        className="pointer-events-none absolute -top-8 left-10 h-64 w-40 text-gold/20"
      />
      <Laurel
        mirror
        className="pointer-events-none absolute -top-8 right-10 h-64 w-40 text-gold/20"
      />

      <div className="container-page pt-28 pb-10 relative">
        <div className="flex flex-col items-center gap-4 mb-14">
          <span className="script text-4xl text-gold-bright">Merci</span>
          <Divider className="text-cream/30 max-w-md" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="script text-[3.5rem] leading-none text-cream">
              La Table Éternelle
            </div>
            <p className="mt-5 max-w-sm text-cream/60 leading-relaxed">{footer.tagline}</p>

            <div className="mt-8 flex gap-2">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-cream/15 hover:bg-gold hover:text-espresso hover:ring-gold transition-all"
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="caption text-gold">Visit</h4>
            <ul className="mt-5 space-y-2 text-sm text-cream/80">
              {footer.address.map((line) => (
                <li key={line} className="flex gap-2">
                  <MapPin size={12} className="mt-1.5 shrink-0 text-gold" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="caption text-gold">Hours</h4>
            <ul className="mt-5 space-y-2 text-sm">
              {footer.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between gap-4 border-b border-cream/10 pb-2"
                >
                  <span className="text-cream/80">{h.day}</span>
                  <span className="text-cream/50 tabular-nums">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="caption text-gold">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              {footer.contact.map((c) => (
                <li key={c.label}>
                  <div className="flex items-center gap-2 caption text-gold/80">
                    {c.label.includes("Reservation") ? <Phone size={11} /> : <Mail size={11} />}
                    {c.label}
                  </div>
                  <div className="mt-1 text-cream">{c.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div
          aria-hidden
          className="mt-24 select-none text-center font-display italic leading-none text-cream/[0.06]"
          style={{ fontSize: "clamp(3.5rem, 16vw, 15rem)", letterSpacing: "-0.04em" }}
        >
          {footer.wordmark}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-cream/10 pt-6">
          <span className="caption text-cream/60">{footer.fineprint}</span>
          <span className="script text-2xl text-gold">Crafted with patience, in Paris.</span>
        </div>
      </div>
    </footer>
  );
}
