"use client";

import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "@/lib/content";

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="script text-3xl sm:text-[2rem] leading-none">La Table Éternelle</span>
          <span className="hidden md:inline caption">· Paris 1976</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10 text-[13px] tracking-[0.15em] uppercase text-ivory/75">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-gold transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#reserve"
            className="hidden sm:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-ivory hover:text-gold transition-colors"
          >
            Reserve
            <span className="h-px w-8 bg-gold" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full ring-1 ring-ivory/20"
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
            className="lg:hidden border-t border-line bg-bg/95 backdrop-blur"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-ivory/80 uppercase tracking-[0.2em] text-sm hover:bg-ivory/5 hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
