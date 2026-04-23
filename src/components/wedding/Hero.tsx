import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="snap-section relative w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-in-the-forest-41484-large.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 gradient-overlay" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gold text-[0.7rem] uppercase tracking-luxury"
        >
          Nuestra Boda
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="my-6 h-px w-16 bg-gold"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="font-serif text-6xl font-light leading-[0.95] text-foreground sm:text-7xl"
        >
          Junior
          <span className="text-gold mx-3 italic">&</span>
          <br />
          Omaisy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-10 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold/60" />
          <p className="text-xs tracking-luxury text-foreground/90">
            20 . 09 . 2026
          </p>
          <span className="h-px w-10 bg-gold/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-[0.6rem] uppercase tracking-luxury text-foreground/70">
            Desliza
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-8 w-px bg-gold/60"
          />
        </motion.div>
      </div>
    </section>
  );
}
