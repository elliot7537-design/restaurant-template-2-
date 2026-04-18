import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { footer } from "@/lib/content";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <Instagram size={16} />,
  Facebook: <Facebook size={16} />,
  TripAdvisor: <span className="text-[10px] font-bold">T/A</span>,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-burgundy-deep text-cream">
      <div className="container-page pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="script text-4xl leading-none">La Table Éternelle</div>
            <p className="mt-4 max-w-sm text-cream/70 leading-relaxed">{footer.tagline}</p>

            <div className="mt-6 flex gap-3">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 ring-1 ring-cream/15 hover:bg-cream hover:text-burgundy transition-colors"
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-cream/60">Visit</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/85">
              {footer.address.map((line) => (
                <li key={line} className="flex gap-2">
                  <MapPin size={14} className="mt-1 shrink-0 text-gold" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-cream/60">Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/85">
              {footer.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-cream/60 tabular-nums">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-cream/60">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/85">
              {footer.contact.map((c) => (
                <li key={c.label}>
                  <div className="flex items-center gap-2 text-cream/60 text-xs uppercase tracking-[0.2em]">
                    {c.label.includes("Reservation") ? <Phone size={12} /> : <Mail size={12} />}
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
          className="mt-20 select-none text-center font-serif leading-none text-cream/10"
          style={{ fontSize: "clamp(3rem, 14vw, 12rem)" }}
        >
          {footer.wordmark}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50">
          <span>{footer.fineprint}</span>
          <span>Crafted with patience, in Paris.</span>
        </div>
      </div>
    </footer>
  );
}
