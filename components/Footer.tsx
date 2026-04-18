import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { footer } from "@/lib/content";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <Instagram size={14} />,
  Facebook: <Facebook size={14} />,
  TripAdvisor: <span className="text-[9px] font-bold tracking-wider">T/A</span>,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bg-soft border-t border-line">
      <div className="container-page pt-28 pb-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="script text-4xl leading-none">La Table Éternelle</div>
            <p className="mt-4 max-w-sm text-ivory/50 leading-relaxed">{footer.tagline}</p>

            <div className="mt-8 flex gap-2">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-line hover:bg-gold hover:text-bg hover:ring-gold transition-colors"
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="caption">Visit</h4>
            <ul className="mt-5 space-y-2 text-sm text-ivory/75">
              {footer.address.map((line) => (
                <li key={line} className="flex gap-2">
                  <MapPin size={12} className="mt-1.5 shrink-0 text-gold" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="caption">Hours</h4>
            <ul className="mt-5 space-y-2 text-sm">
              {footer.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 border-b border-line pb-2">
                  <span className="text-ivory/75">{h.day}</span>
                  <span className="text-ivory/50 tabular-nums">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="caption">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              {footer.contact.map((c) => (
                <li key={c.label}>
                  <div className="flex items-center gap-2 caption">
                    {c.label.includes("Reservation") ? <Phone size={11} /> : <Mail size={11} />}
                    {c.label}
                  </div>
                  <div className="mt-1 text-ivory/85">{c.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div
          aria-hidden
          className="mt-20 select-none text-center font-serif leading-none text-ivory/[0.04]"
          style={{ fontSize: "clamp(3rem, 15vw, 14rem)", letterSpacing: "-0.04em" }}
        >
          {footer.wordmark}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 caption">
          <span>{footer.fineprint}</span>
          <span className="script text-lg text-gold normal-case tracking-normal">
            Crafted with patience, in Paris.
          </span>
        </div>
      </div>
    </footer>
  );
}
