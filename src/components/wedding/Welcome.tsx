import { motion } from "framer-motion";
import { useState } from "react";

type WelcomeProps = {
  onEnter: () => void;
  onOpen: () => void;
};

export function Welcome({ onEnter, onOpen }: WelcomeProps) {
  const [opening, setOpening] = useState(false);

  function handle() {
    if (opening) return;

    setOpening(true);
    onOpen();
    setTimeout(onEnter, 2600);
  }

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: opening ? 0 : 1 }}
      transition={{ duration: 0.8, delay: opening ? 1.95 : 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-cream px-5"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=1400&q=85&auto=format&fit=crop)",
        }}
      />
      <div className="absolute inset-0 bg-cream/60 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/35 via-blush/20 to-sage/25" />

      <div className="relative z-10 flex w-full max-w-[25rem] flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 text-[0.68rem] uppercase tracking-luxury text-sage-deep"
        >
          Abre nuestra invitacion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -8 }}
          animate={{
            opacity: 1,
            y: opening ? -10 : 0,
            rotateX: opening ? 7 : 0,
            scale: opening ? 1.03 : 1,
          }}
          transition={{ duration: opening ? 1.4 : 1, delay: opening ? 0 : 0.35, ease: "easeInOut" }}
          className="envelope-scene relative aspect-[0.76] w-full max-w-[22rem]"
        >
          <motion.div
            animate={{ y: opening ? 34 : 0, opacity: opening ? 1 : 0.78 }}
            transition={{ duration: 1.3, delay: opening ? 0.45 : 0.2, ease: "easeInOut" }}
            className="invitation-card absolute left-[9%] right-[9%] top-[8%] z-10 rounded-sm border border-white/60 bg-cream/95 px-7 py-8 shadow-2xl"
          >
            <p className="text-[0.62rem] uppercase tracking-luxury text-sage-deep/80">
              Nuestra Boda
            </p>
            <div className="mx-auto my-5 h-px w-14 bg-sage/60" />
            <p className="font-serif text-5xl font-light leading-none text-foreground">
              J <span className="italic text-sage">&</span> O
            </p>
            <p className="mt-5 text-[0.65rem] tracking-luxury text-foreground/65">20 . 09 . 2026</p>
          </motion.div>

          <div className="envelope-body absolute inset-x-0 bottom-0 z-20 h-[74%] overflow-hidden rounded-sm border border-sage/25 shadow-[0_28px_70px_-35px_oklch(0.28_0.02_140/0.65)]">
            <div className="envelope-panel envelope-left" />
            <div className="envelope-panel envelope-right" />
            <div className="envelope-panel envelope-bottom" />
          </div>

          <motion.div
            animate={{
              rotateX: opening ? -152 : 0,
              y: opening ? -2 : 0,
              filter: opening ? "brightness(1.06)" : "brightness(1)",
            }}
            transition={{ duration: 1.65, ease: [0.45, 0, 0.2, 1] }}
            className="envelope-flap absolute inset-x-0 top-[14.5%] z-30 mx-auto h-[38%] origin-bottom overflow-hidden rounded-t-sm border border-sage/20"
          />

          <motion.button
            type="button"
            aria-label="Abrir invitacion"
            onClick={handle}
            disabled={opening}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: opening ? 0 : 1,
              scale: opening ? 0.7 : 1,
              y: opening ? -18 : 0,
            }}
            transition={{ duration: opening ? 0.55 : 1, delay: opening ? 0 : 1 }}
            className="wax-seal absolute left-1/2 top-[47%] z-40 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full text-center font-serif text-3xl italic text-sage-deep shadow-[0_18px_34px_-18px_oklch(0.28_0.02_140/0.8)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-4 focus:ring-offset-cream disabled:pointer-events-none sm:h-28 sm:w-28"
          >
            J&O
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: opening ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mt-7 max-w-xs font-serif text-lg italic leading-relaxed text-foreground/70"
        >
          Presiona el sello para descubrir nuestra celebracion.
        </motion.p>
      </div>
    </motion.section>
  );
}
