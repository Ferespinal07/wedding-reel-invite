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
    <section className="snap-section relative flex items-center justify-center overflow-hidden px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative h-[min(980px,calc(100dvh-3rem))] aspect-[1536/2688] max-w-[calc(100vw-1rem)] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/assets/images/Cuenta%20regresiva%202.png")` }}
      >

        <div className="absolute inset-x-[10%] top-[20%] text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[clamp(0.55rem,1.5vw,0.7rem)] uppercase tracking-luxury text-sage-deep"
          >
            {text.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-3 font-serif text-[clamp(2rem,6vw,4.5rem)] font-light italic leading-[0.95]"
          >
            {text.title}
            <br />
            {text.titleSecond}
          </motion.h2>
        </div>

        <div className="absolute inset-x-[18%] top-[40.2%] flex h-[18%] items-center justify-center">
          <div className="grid w-full grid-cols-4 gap-1.5 sm:gap-3">
            {items.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 + i * 0.1 }}
                className="flex min-w-0 flex-col items-center"
              >
                <div className="flex aspect-square w-full max-w-[88px] items-center justify-center rounded-sm bg-white/50 shadow-[0_12px_40px_-28px_rgba(91,70,32,0.75)] backdrop-blur-[1px]">
                  <span
                    suppressHydrationWarning
                    className="font-serif text-[clamp(1.05rem,4.6vw,2.6rem)] font-light leading-none text-foreground tabular-nums"
                  >
                    {mounted ? String(it.value).padStart(2, "0") : "00"}
                  </span>
                </div>
                <span className="mt-2 max-w-full text-center text-[clamp(0.36rem,1.25vw,0.6rem)] uppercase tracking-[0.16em] text-muted-foreground sm:mt-3 sm:tracking-[0.28em]">
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
