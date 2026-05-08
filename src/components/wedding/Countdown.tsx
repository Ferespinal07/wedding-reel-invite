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
    <section className="snap-section relative flex flex-col items-center justify-center px-6 py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[0.7rem] uppercase tracking-luxury text-sage-deep"
      >
        {text.eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 text-center font-serif text-4xl font-light italic"
      >
        {text.title}
        <br />
        {text.titleSecond}
      </motion.h2>

      <div className="sage-divider my-10 w-32" />

      <div className="grid w-full max-w-sm grid-cols-4 gap-2">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="glass flex h-20 w-full items-center justify-center rounded-sm">
              <span
                suppressHydrationWarning
                className="font-serif text-3xl font-light text-foreground tabular-nums"
              >
                {mounted ? String(it.value).padStart(2, "0") : "00"}
              </span>
            </div>
            <span className="mt-3 text-[0.6rem] uppercase tracking-luxury text-muted-foreground">
              {it.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
