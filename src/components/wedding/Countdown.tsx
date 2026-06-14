import type { Language } from "@/App";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-18T19:00:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const ZERO = { days: 0, hours: 0, minutes: 0, seconds: 0 };

const copy = {
  es: {
    eyebrow: "Cuenta Regresiva",
    title: "Falta poco para",
    titleSecond: "nuestro gran dia",
    labels: ["Dias", "Horas", "Minutos", "Segundos"],
  },
  en: {
    eyebrow: "Countdown",
    title: "Almost time for",
    titleSecond: "our big day",
    labels: ["Days", "Hours", "Minutes", "Seconds"],
  },
};

export function Countdown({ language }: { language: Language }) {
  const [t, setT] = useState(ZERO);
  const [mounted, setMounted] = useState(false);
  const text = copy[language];

  useEffect(() => {
    setMounted(true);
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: text.labels[0], value: t.days },
    { label: text.labels[1], value: t.hours },
    { label: text.labels[2], value: t.minutes },
    { label: text.labels[3], value: t.seconds },
  ];

  return (
    <section className="snap-section relative flex min-h-[90dvh] items-center justify-center overflow-hidden md:min-h-[100dvh]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/assets/images/Regresiva.png')] bg-cover bg-top bg-no-repeat"
      />
      <div className="absolute inset-0 bg-cream/10 backdrop-blur-[0.5px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center px-6 py-20"
      >
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[0.7rem] uppercase tracking-luxury text-sage-deep"
          >
            {text.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-3 font-serif text-4xl font-light italic leading-[1.1] sm:text-5xl md:text-6xl"
          >
            {text.title}
            <br />
            {text.titleSecond}
          </motion.h2>
        </div>

        <div className="mt-10 flex w-full items-center justify-center sm:mt-14">
          <div className="grid w-full max-w-lg grid-cols-4 gap-3 sm:max-w-2xl sm:gap-6">
            {items.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="flex aspect-square w-full items-center justify-center rounded-sm bg-white/50 shadow-[0_12px_40px_-28px_rgba(91,70,32,0.75)] backdrop-blur-[1px]">
                  <span
                    suppressHydrationWarning
                    className="font-serif text-3xl font-light leading-none text-foreground tabular-nums sm:text-4xl md:text-5xl"
                  >
                    {mounted ? String(it.value).padStart(2, "0") : "00"}
                  </span>
                </div>
                <span className="mt-3 max-w-full text-center text-[0.55rem] uppercase tracking-widest text-muted-foreground sm:text-[0.65rem] sm:tracking-[0.2em]">
                  {it.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
