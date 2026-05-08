import { motion } from "framer-motion";
import type { Language } from "@/App";

type HeroProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const copy = {
  es: {
    eyebrow: "Nuestra Boda",
    date: "20 . 09 . 2026",
    verse: "Lo que Dios ha unido,",
    verseSecond: "que no lo separe el hombre.",
    reference: "Marcos 10:9",
    scroll: "Desliza",
    languageLabel: "Cambiar idioma",
  },
  en: {
    eyebrow: "Our Wedding",
    date: "09 . 20 . 2026",
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
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/images/download.gif)",
        }}
      />

      <button
        type="button"
        aria-label={t.languageLabel}
        onClick={() => onLanguageChange(nextLanguage)}
        className="absolute right-4 top-4 z-20 border border-sage/50 bg-cream/75 px-4 py-2 text-[0.65rem] uppercase tracking-luxury text-sage-deep shadow-sm backdrop-blur-md transition-colors hover:bg-blush/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep"
      >
        {nextLanguage.toUpperCase()}
      </button>

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[0.7rem] uppercase tracking-luxury text-sage-deep"
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
          <p className="text-xs tracking-luxury text-foreground/80">{t.date}</p>
          <span className="h-px w-10 bg-sage/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8 max-w-xs font-serif text-sm italic leading-relaxed text-foreground/75"
        >
          "{t.verse}
          <br /> {t.verseSecond}"
          <br />
          <span className="mt-2 inline-block text-[0.65rem] not-italic uppercase tracking-luxury text-sage-deep">
            {t.reference}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <span className="text-[0.6rem] uppercase tracking-luxury text-foreground/60">
            {t.scroll}
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
