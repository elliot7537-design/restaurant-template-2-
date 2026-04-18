"use client";

import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-lg ring-1 ring-ink/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-5">
        <a href="#top" className="group inline-flex items-baseline gap-2">
          <span className="script text-3xl sm:text-4xl leading-none text-ink transition-colors group-hover:text-burgundy">
            La Table Éternelle
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.35em] text-muted">
            1976
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-ink/80 hover:text-burgundy transition-colors"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-burgundy transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#reserve" variant="primary" showArrow className="hidden sm:inline-flex">
            Reserve
          </Button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full ring-1 ring-ink/15"
          >
            {open ? <X size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-ink/10 bg-cream/95 backdrop-blur"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-ink/80 hover:bg-cream-dark hover:text-burgundy"
                >
                  {item.label}
                </a>
              ))}
              <Button href="#reserve" className="mt-2 justify-center">
                Reserve a Table
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
