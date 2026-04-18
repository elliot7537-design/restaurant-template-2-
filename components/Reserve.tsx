"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
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
    <section id="reserve" className="relative py-28 lg:py-40 border-t border-line">
      <div className="container-page">
        <Reveal>
          <div className="flex items-start justify-between mb-16">
            <span className="section-index">Chapter 04 — Reservations</span>
            <span className="caption hidden sm:inline">Confirm within 2 hours</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <h2 className="heading-serif text-5xl sm:text-6xl lg:text-7xl max-w-3xl">
              Reserve your <em className="text-gold">spot</em> — the ultimate joy of dining, done
              right.
            </h2>
            <p className="mt-8 max-w-lg text-ivory/60 leading-relaxed">
              A quiet room, candlelight, and a table set just for you. Request a seating below —
              our maître d' will confirm within two hours.
            </p>

            <div className="mt-14 grid grid-cols-3 gap-3">
              {[
                "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=600&q=80",
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
                "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
              ].map((src, i) => (
                <figure key={src} className={`relative overflow-hidden rounded-sm ring-1 ring-line ${i === 1 ? "translate-y-10" : ""}`}>
                  <Image
                    src={src}
                    alt=""
                    width={600}
                    height={720}
                    className="h-48 w-full object-cover grayscale-[10%]"
                  />
                </figure>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="rounded-sm bg-bg-soft ring-1 ring-line p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full ring-1 ring-gold/40 bg-gold/10">
                    <Check className="text-gold" />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl">Merci, {form.name || "friend"}.</h3>
                  <p className="mt-3 text-sm text-ivory/60 max-w-xs mx-auto">
                    Your request for {form.date} at {form.time} for {form.guests} has been received.
                    We'll confirm shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl">Request a table</h3>
                    <span className="caption">Form №01</span>
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
                    className="mt-3 inline-flex items-center justify-between gap-3 bg-ivory text-bg px-6 py-4 rounded-full font-medium tracking-wide hover:bg-gold transition-colors"
                  >
                    <span>Request Table</span>
                    <ArrowRight size={16} />
                  </motion.button>
                  <p className="caption text-center mt-1">
                    Parties of 8+ — please call +33 1 42 60 00 00
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        :global(.field-input) {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(244, 235, 219, 0.15);
          color: #f4ebdb;
          border-radius: 0;
          padding: 10px 0;
          font-size: 15px;
          font-family: var(--font-serif), serif;
          outline: none;
          transition: border-color 0.2s;
        }
        :global(.field-input:focus) {
          border-color: #c9a96a;
        }
        :global(.field-input::placeholder) {
          color: rgba(244, 235, 219, 0.3);
        }
        :global(select.field-input) {
          appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, #c9a96a 50%),
            linear-gradient(135deg, #c9a96a 50%, transparent 50%);
          background-position: calc(100% - 14px) 50%, calc(100% - 9px) 50%;
          background-size: 5px 5px, 5px 5px;
          background-repeat: no-repeat;
        }
        :global(select.field-input option) {
          background: #15110d;
          color: #f4ebdb;
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="caption block mb-1">{label}</span>
      {children}
    </label>
  );
}
