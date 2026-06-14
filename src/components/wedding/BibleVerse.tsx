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
    <section className="snap-section relative flex items-center justify-center overflow-hidden px-6 py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/images/Versiculo.png)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 mx-auto max-w-xs px-4 text-center text-foreground sm:max-w-sm"
      >
        <p className="text-[0.75rem] font-semibold uppercase tracking-luxury text-sage-deep drop-shadow-sm">{text.eyebrow}</p>
        <div className="mx-auto my-6 h-px w-14 bg-sage/60" />
        <p className="font-serif text-2xl font-light leading-snug italic sm:text-3xl">
          "{text.verse}"
        </p>
        <p className="mt-8 text-[0.75rem] font-medium uppercase tracking-luxury text-sage-deep drop-shadow-sm">
          {text.reference}
        </p>
      </motion.div>
    </section>
  );
}
