"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

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
    <section id="reserve" className="relative py-24 lg:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-burgundy-deep text-cream shadow-soft ring-1 ring-burgundy-deep/40">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-screen"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, #ffffff 1px, transparent 1px), radial-gradient(circle at 70% 80%, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px, 60px 60px",
            }}
          />
          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 p-8 sm:p-12 lg:p-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cream/70">
                <span className="h-px w-8 bg-cream/40" /> Reservations
              </span>
              <h2 className="heading-serif mt-5 text-4xl sm:text-5xl lg:text-6xl text-cream">
                Reserve your spot —{" "}
                <span className="script text-gold text-5xl sm:text-6xl lg:text-7xl">
                  ultimate joy
                </span>{" "}
                of dining done right.
              </h2>
              <p className="mt-5 max-w-lg text-cream/75 leading-relaxed">
                A quiet room, candlelight, and a table set just for you. Request a
                seating below — our maître d' will confirm within two hours.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=400&q=80"
                  alt="Interior"
                  width={400}
                  height={500}
                  className="h-40 w-full rounded-2xl object-cover ring-1 ring-cream/10"
                />
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
                  alt="Plated course"
                  width={400}
                  height={500}
                  className="h-40 w-full rounded-2xl object-cover ring-1 ring-cream/10 translate-y-6"
                />
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
                  alt="Dining room"
                  width={400}
                  height={500}
                  className="h-40 w-full rounded-2xl object-cover ring-1 ring-cream/10"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-cream/5 ring-1 ring-cream/15 backdrop-blur-sm p-7">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid place-items-center py-16 text-center"
                  >
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-gold/20 ring-1 ring-gold/30">
                      <Check className="text-gold" />
                    </div>
                    <h3 className="mt-5 font-serif text-2xl text-cream">
                      Request received
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-cream/70">
                      Merci, {form.name || "friend"}. We'll confirm {form.date} at{" "}
                      {form.time} for {form.guests} very soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <h3 className="font-serif text-2xl text-cream">
                      Request a table
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Date">
                        <input
                          type="date"
                          required
                          value={form.date}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, date: e.target.value }))
                          }
                          className="field-input"
                        />
                      </Field>
                      <Field label="Time">
                        <select
                          value={form.time}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, time: e.target.value }))
                          }
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
                        onChange={(e) =>
                          setForm((f) => ({ ...f, guests: e.target.value }))
                        }
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
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        placeholder="Your full name"
                        className="field-input"
                      />
                    </Field>

                    <Field label="Phone">
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, phone: e.target.value }))
                        }
                        placeholder="+33 · · · · · · · · ·"
                        className="field-input"
                      />
                    </Field>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="mt-2 w-full rounded-full bg-gold/90 hover:bg-gold text-ink font-medium py-3.5 tracking-wide shadow-pill"
                    >
                      Request Table
                    </motion.button>
                    <p className="text-[11px] text-cream/50 text-center">
                      Confirmation within 2 hours. For parties of 8+, please call.
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
          background: rgba(245, 239, 230, 0.06);
          border: 1px solid rgba(245, 239, 230, 0.15);
          color: #f5efe6;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        :global(.field-input:focus) {
          border-color: rgba(184, 147, 90, 0.6);
          background: rgba(245, 239, 230, 0.1);
        }
        :global(.field-input::placeholder) {
          color: rgba(245, 239, 230, 0.4);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.25em] text-cream/60">
        {label}
      </span>
      {children}
    </label>
  );
}
