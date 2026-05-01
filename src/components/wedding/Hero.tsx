import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="snap-section relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/images/download.gif)",
        }}
      />
      <div className="absolute inset-0 bg-cream/30 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/65 via-cream/35 to-cream/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-sage/20 via-transparent to-rose/20" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[0.7rem] uppercase tracking-luxury text-sage-deep"
        >
          Nuestra Boda
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="my-6 h-px w-16 bg-sage"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="font-serif text-6xl font-light leading-[0.95] text-foreground sm:text-7xl"
        >
          Junior
          <br />
          <span className="font-serif italic text-sage">&</span>
          <br />
          Omaisy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-10 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-sage/60" />
          <p className="text-xs tracking-luxury text-foreground/80">20 . 09 . 2026</p>
          <span className="h-px w-10 bg-sage/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8 max-w-xs font-serif text-sm italic leading-relaxed text-foreground/75"
        >
          "Lo que Dios ha unido,
          <br /> que no lo separe el hombre."
          <br />
          <span className="mt-2 inline-block text-[0.65rem] not-italic uppercase tracking-luxury text-sage-deep">
            Marcos 10:9
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <span className="text-[0.6rem] uppercase tracking-luxury text-foreground/60">
            Desliza
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-8 w-px bg-sage/60"
          />
        </motion.div>
      </div>
    </section>
  );
}
