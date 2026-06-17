import { motion } from "framer-motion";
import type { Language } from "@/App";

type HeroProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const copy = {
  es: {
    eyebrow: "Nuestra Boda",
    date: "18 . 07 . 2026",
    verse: "Lo que Dios ha unido,",
    verseSecond: "que no lo separe el hombre.",
    reference: "Marcos 10:9",
    scroll: "Desliza",
    languageLabel: "Cambiar idioma",
  },
  en: {
    eyebrow: "Our Wedding",
    date: "07 . 18 . 2026",
    verse: "What God has joined together,",
    verseSecond: "let no one separate.",
    reference: "Mark 10:9",
    scroll: "Scroll",
    languageLabel: "Change language",
  },
};

export function Hero({ language, onLanguageChange }: HeroProps) {
  const t = copy[language];
  const nextLanguage = language === "es" ? "en" : "es";

  return (
    <section id="invitacion" className="snap-section relative w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/images/Video_Portada_Boda.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      
      <div className="absolute inset-0 bg-cream/30" />

      <button
        type="button"
        aria-label={t.languageLabel}
        onClick={() => onLanguageChange(nextLanguage)}
        className="absolute right-4 top-4 z-20 border border-sage bg-cream px-4 py-2 text-[0.65rem] font-bold uppercase tracking-luxury text-foreground shadow-sm transition-colors hover:bg-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep"
      >
        {nextLanguage.toUpperCase()}
      </button>

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[0.7rem] font-bold uppercase tracking-luxury text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
        >
          {t.eyebrow}
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
          className="font-display text-7xl font-light leading-[0.86] text-foreground drop-shadow-[0_2px_18px_oklch(0.97_0.008_90_/_0.96)] sm:text-8xl"
        >
          Junior
          <br />
          <span className="font-serif text-rose">&</span>
          <br />
          Omaisy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-10 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-sage" />
          <p className="text-xs font-bold tracking-luxury text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">{t.date}</p>
          <span className="h-px w-10 bg-sage" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8 max-w-xs font-serif text-base font-bold italic leading-relaxed text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
        >
          "{t.verse}
          <br /> {t.verseSecond}"
          <br />
          <span className="mt-2 inline-block text-[0.65rem] font-bold not-italic uppercase tracking-luxury text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
            {t.reference}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[0.6rem] font-bold uppercase tracking-luxury text-foreground drop-shadow-[0_1px_10px_oklch(0.97_0.008_90_/_0.85)]"
          >
            {t.scroll}
          </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-8 w-px bg-sage"
        />
        </motion.div>
      </div>
    </section>
  );
}
