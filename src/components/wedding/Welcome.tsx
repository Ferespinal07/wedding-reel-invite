import { motion } from "framer-motion";
import { useState } from "react";

export function Welcome({ onEnter }: { onEnter: () => void }) {
  const [leaving, setLeaving] = useState(false);

  function handle() {
    setLeaving(true);
    setTimeout(onEnter, 700);
  }

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=1200&q=80&auto=format&fit=crop)",
        }}
      />
      <div className="absolute inset-0 sage-overlay" />

      <div className="relative z-10 flex flex-col items-center px-8 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[0.7rem] uppercase tracking-luxury text-white/85"
        >
          Bienvenidos
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="my-5 h-px w-14 bg-white/70"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-serif text-5xl font-light leading-tight sm:text-6xl"
        >
          Junior
          <span className="mx-2 italic text-blush">&</span>
          Omaisy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-4 text-xs tracking-luxury text-white/80"
        >
          20 . 09 . 2026
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          onClick={handle}
          className="mt-12 border border-white/70 bg-white/10 px-10 py-4 text-[0.7rem] uppercase tracking-luxury text-white backdrop-blur-md transition-all hover:bg-white hover:text-sage-deep"
        >
          Entrar
        </motion.button>
      </div>
    </motion.section>
  );
}
