"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Laurel } from "@/components/ui/Ornaments";
import { ChapterIntro, ChapterOutro, PageWipe } from "@/components/ui/Chapter";

export function Reserve() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    date: "",
    time: "19:30",
    guests: "2",
    name: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.date || !form.name || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="reserve" className="relative py-16 lg:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[6px] bg-gradient-to-br from-wine via-wine to-wine-deep text-cream shadow-lift">
          <Laurel className="pointer-events-none absolute -top-4 -left-4 h-40 w-28 text-cream/20" />
          <Laurel
            mirror
            className="pointer-events-none absolute -bottom-6 -right-4 h-44 w-32 text-cream/15"
          />

          <div className="relative p-7 sm:p-10 lg:p-12">
            <ChapterIntro
              variant="dark"
              align="left"
              chapter="IV"
              page="p. 42"
              eyebrow="Reservations"
              kicker="Confirmed within 2 hours"
              title={
                <>
                  Reserve your{" "}
                  <span className="script text-gold-bright text-[1.3em] inline-block -rotate-2">
                    spot
                  </span>{" "}
                  — <em className="italic">the ultimate joy</em> of dining, done right.
                </>
              }
            />

            <PageWipe className="mt-8 lg:mt-10 grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start">
              <Reveal>
                <p className="max-w-lg text-cream/75 leading-relaxed">
                  A quiet room, candlelight, and a table set just for you. Request a seating
                  below — our maître d' will confirm within two hours.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 relative aspect-[16/10] overflow-hidden rounded-[3px] ring-1 ring-cream/10"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85"
                    alt="The dining room at dusk"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/80 via-wine-deep/10 to-transparent" />
                  <figcaption className="absolute bottom-4 left-5 flex items-baseline gap-3">
                    <span className="script text-3xl text-gold-bright">à bientôt</span>
                    <span className="caption text-cream/60">— 42 seats · 6:00–10:30pm</span>
                  </figcaption>
                </motion.div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative rounded-[4px] bg-cream/5 ring-1 ring-cream/20 backdrop-blur-sm p-6 lg:p-8">
                  <div className="absolute inset-2 border border-gold-bright/30 rounded-[3px] pointer-events-none" />
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="py-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, type: "spring", bounce: 0.4 }}
                        className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold-bright text-wine-deep"
                      >
                        <Check size={20} strokeWidth={2.5} />
                      </motion.div>
                      <h3 className="mt-5 font-display text-3xl text-cream">
                        Merci, {form.name || "friend"}.
                      </h3>
                      <p className="mt-3 text-sm text-cream/70 max-w-xs mx-auto leading-relaxed">
                        Request for {form.date} at {form.time} for {form.guests} received.
                        We'll confirm shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="grid gap-4 relative">
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-display text-2xl text-cream">Request a table</h3>
                        <span className="caption text-cream/50">№01</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Field label="Date">
                          <input
                            type="date"
                            required
                            value={form.date}
                            onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                            className="field-input"
                          />
                        </Field>
                        <Field label="Time">
                          <select
                            value={form.time}
                            onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
                            className="field-input"
                          >
                            {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"].map(
                              (t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              )
                            )}
                          </select>
                        </Field>
                      </div>

                      <Field label="Guests">
                        <select
                          value={form.guests}
                          onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
                          className="field-input"
                        >
                          {["1", "2", "3", "4", "5", "6", "7+"].map((g) => (
                            <option key={g} value={g}>
                              {g} {g === "1" ? "guest" : "guests"}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field label="Name">
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          placeholder="Your full name"
                          className="field-input"
                        />
                      </Field>

                      <Field label="Phone">
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          placeholder="+33 · · · · · · · · ·"
                          className="field-input"
                        />
                      </Field>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="mt-3 inline-flex items-center justify-between gap-3 bg-gold-bright text-wine-deep px-5 py-3.5 rounded-full font-medium tracking-wide hover:bg-cream transition-colors"
                      >
                        <span>Request Table</span>
                        <ArrowRight size={16} />
                      </motion.button>
                      <p className="caption text-cream/50 text-center">
                        Parties of 8+ — please call +33 1 42 60 00 00
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </PageWipe>

            <ChapterOutro variant="dark" page="p. 42 — 55" next="Gallery" />
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.field-input) {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(251, 245, 233, 0.2);
          color: #FBF5E9;
          border-radius: 0;
          padding: 8px 0;
          font-size: 15px;
          font-family: var(--font-display), serif;
          outline: none;
          transition: border-color 0.3s;
        }
        :global(.field-input:focus) {
          border-color: #D4A250;
        }
        :global(.field-input::placeholder) {
          color: rgba(251, 245, 233, 0.35);
        }
        :global(select.field-input) {
          appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, #D4A250 50%),
            linear-gradient(135deg, #D4A250 50%, transparent 50%);
          background-position: calc(100% - 14px) 50%, calc(100% - 9px) 50%;
          background-size: 5px 5px, 5px 5px;
          background-repeat: no-repeat;
        }
        :global(select.field-input option) {
          background: #5C1420;
          color: #FBF5E9;
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.35em] text-cream/50 mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}
