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
    <section className="snap-section relative flex flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-[0.7rem] uppercase tracking-luxury text-sage-deep"
      >
        {text.eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 mt-4 text-center font-serif text-4xl font-light italic sm:text-5xl"
      >
        {text.title}
        <br />
        {text.titleSecond}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="relative mt-8 w-[min(1120px,calc(100vw-1rem))] sm:mt-10"
      >
        <img
          src="/assets/images/Cuenta%20Regresiva.png"
          alt=""
          className="pointer-events-none block aspect-[2048/1121] w-full select-none object-contain"
          aria-hidden="true"
        />

        <div className="absolute inset-x-[24%] inset-y-[19%] flex items-center justify-center sm:inset-x-[25%] sm:inset-y-[20%]">
          <div className="grid w-full max-w-[560px] grid-cols-4 gap-1.5 sm:gap-3">
            {items.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 + i * 0.1 }}
                className="flex min-w-0 flex-col items-center"
              >
                <div className="flex aspect-square w-full max-w-[92px] items-center justify-center rounded-sm bg-white/55 shadow-[0_12px_40px_-28px_rgba(91,70,32,0.75)] backdrop-blur-[1px]">
                  <span
                    suppressHydrationWarning
                    className="font-serif text-[clamp(1.25rem,5.2vw,3rem)] font-light leading-none text-foreground tabular-nums"
                  >
                    {mounted ? String(it.value).padStart(2, "0") : "00"}
                  </span>
                </div>
                <span className="mt-2 max-w-full text-center text-[clamp(0.42rem,1.55vw,0.65rem)] uppercase tracking-[0.22em] text-muted-foreground sm:mt-3 sm:tracking-luxury">
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
