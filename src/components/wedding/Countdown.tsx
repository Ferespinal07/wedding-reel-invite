import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-09-20T16:00:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Días", value: t.days },
    { label: "Horas", value: t.hours },
    { label: "Minutos", value: t.minutes },
    { label: "Segundos", value: t.seconds },
  ];

  return (
    <section className="snap-section relative flex flex-col items-center justify-center px-6 py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-gold text-[0.7rem] uppercase tracking-luxury"
      >
        Cuenta Regresiva
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 text-center font-serif text-4xl font-light italic"
      >
        Falta poco para
        <br />
        nuestro gran día
      </motion.h2>

      <div className="gold-divider my-10 w-32" />

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
              <span className="font-serif text-3xl font-light text-foreground tabular-nums">
                {String(it.value).padStart(2, "0")}
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
