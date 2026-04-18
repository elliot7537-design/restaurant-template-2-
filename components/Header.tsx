"use client";

import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-line shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-5">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="script text-4xl leading-none text-espresso group-hover:text-wine transition-colors duration-500">
            La Table Éternelle
          </span>
          <span className="hidden md:inline caption">· Paris 1976</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10 text-[12px] tracking-[0.25em] uppercase text-espresso/80">
          {nav.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.6 }}
              className="link-underline hover:text-wine transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            href="#reserve"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-wine px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-cream hover:bg-wine-deep transition-colors shadow-warm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-bright animate-shimmer" />
            Reserve
          </motion.a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full ring-1 ring-espresso/20"
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
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-line bg-cream/95 backdrop-blur"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-espresso/80 uppercase tracking-[0.2em] text-sm hover:bg-cream-warm hover:text-wine"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
