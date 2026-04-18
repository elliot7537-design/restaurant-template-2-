"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Laurel, Sprig } from "@/components/ui/Ornaments";

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
    <section id="reserve" className="relative py-28 lg:py-36">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[6px] bg-gradient-to-br from-wine via-wine to-wine-deep text-cream shadow-lift">
          <Laurel
            className="pointer-events-none absolute -top-4 -left-4 h-48 w-32 text-cream/25"
          />
          <Laurel
            mirror
            className="pointer-events-none absolute -bottom-8 -right-4 h-56 w-40 text-cream/20"
          />

          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 p-8 sm:p-12 lg:p-16">
            <Reveal>
              <div className="flex flex-col items-start gap-3">
                <Sprig className="h-5 w-20 text-gold-bright" />
                <span className="eyebrow-dark">Chapter 04 · Reservations</span>
              </div>

              <h2 className="heading-serif mt-8 text-5xl sm:text-6xl lg:text-[4.5rem] text-cream leading-[1.02]">
                Reserve your{" "}
                <span className="script text-gold-bright text-[1.3em] inline-block -rotate-2">
                  spot
                </span>{" "}
                —
                <br />
                <em className="italic">the ultimate joy</em> of dining, done right.
              </h2>

              <p className="mt-8 max-w-lg text-cream/75 leading-relaxed text-lg">
                A quiet room, candlelight, and a table set just for you. Request a
                seating below — our maître d' will confirm within two hours.
              </p>

              <div className="mt-12 grid grid-cols-3 gap-3">
                {[
                  {
                    src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=600&q=85",
                    offset: "",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85",
                    offset: "translate-y-10",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85",
                    offset: "-translate-y-4",
                  },
                ].map(({ src, offset }) => (
                  <motion.figure
                    key={src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`relative h-48 overflow-hidden rounded-[3px] ring-1 ring-cream/15 ${offset}`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </motion.figure>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-5 text-cream/70">
                <span className="script text-3xl text-gold-bright">— à bientôt</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative rounded-[4px] bg-cream/5 ring-1 ring-cream/20 backdrop-blur-sm p-8 lg:p-10">
                <div className="absolute inset-2 border border-gold-bright/30 rounded-[3px] pointer-events-none" />
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="py-10 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                      className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold-bright text-wine-deep"
                    >
                      <Check size={22} strokeWidth={2.5} />
                    </motion.div>
                    <h3 className="mt-6 font-display text-4xl text-cream">
                      Merci, {form.name || "friend"}.
                    </h3>
                    <p className="mt-4 text-sm text-cream/70 max-w-xs mx-auto leading-relaxed">
                      Your request for {form.date} at {form.time} for {form.guests} has been received.
                      We'll confirm shortly.
                    </p>
                    <div className="mt-6 script text-3xl text-gold-bright">à bientôt</div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-6 relative">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-3xl text-cream">Request a table</h3>
                      <span className="caption text-cream/50">№01</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
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
                      className="mt-4 inline-flex items-center justify-between gap-3 bg-gold-bright text-wine-deep px-6 py-4 rounded-full font-medium tracking-wide hover:bg-cream transition-colors"
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
          padding: 10px 0;
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
