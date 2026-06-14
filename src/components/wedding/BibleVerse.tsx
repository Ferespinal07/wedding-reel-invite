import type { Language } from "@/App";
import { motion } from "framer-motion";

const copy = {
  es: {
    eyebrow: "Palabra de Dios",
    verse:
      "Mejores son dos que uno; porque tienen mejor paga de su trabajo. Porque si cayeren, el uno levantara a su companero. Y cordon de tres dobleces no se rompe pronto.",
    reference: "Eclesiastes 4:9-12",
  },
  en: {
    eyebrow: "God's Word",
    verse:
      "Two are better than one, because they have a good return for their labor. If either of them falls down, one can help the other up. A cord of three strands is not quickly broken.",
    reference: "Ecclesiastes 4:9-12",
  },
};

export function BibleVerse({ language }: { language: Language }) {
  const text = copy[language];

  return (
    <section className="snap-section relative flex min-h-[90dvh] w-full items-center justify-center bg-[url('/assets/images/Versiculo.png')] bg-cover bg-center bg-no-repeat md:min-h-[100dvh]">
      {/* Si el texto queda muy arriba o muy abajo respecto al marco de tu imagen, puedes agregar mt-10 o mb-10 en la clase de abajo para ajustarlo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto max-w-xl px-8 text-center"
      >
        <p className="font-serif text-2xl font-light italic leading-relaxed text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] sm:text-3xl md:text-4xl">
          "{text.verse}"
        </p>
        <span className="mt-6 block font-display text-sm uppercase tracking-[0.2em] text-sage-deep drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] sm:text-base">
          {text.reference}
        </span>
      </motion.div>
    </section>
  );
}
