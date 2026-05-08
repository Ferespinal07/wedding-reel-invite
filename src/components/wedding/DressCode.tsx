import type { Language } from "@/App";
import { motion } from "framer-motion";
import { Shirt } from "lucide-react";

const copy = {
  es: {
    eyebrow: "Codigo de Vestimenta",
    title: "Dress code",
    style: "Formal elegante",
    intro:
      "Queremos que te sientas comodo, fresco y especial. Te compartimos una guia visual con tonos suaves y elegantes para acompanar la atmosfera de nuestra boda.",
    palette: "Paleta sugerida",
    paletteText: "Verde salvia, verde oliva, rosa empolvado, nude, beige, champan y tonos tierra claros.",
    women: "Para ellas",
    womenText: "Vestidos largos o midi, telas ligeras, siluetas elegantes y accesorios delicados.",
    men: "Para ellos",
    menText: "Traje formal en tonos neutros, verde oliva, beige o tierra, con camisa clara.",
    note: "Reservamos el blanco para la novia.",
    inspirationAlt: "Inspiracion de vestimenta para la boda",
    infoAlt: "Informacion de colores sugeridos para la vestimenta",
  },
  en: {
    eyebrow: "Dress Code",
    title: "Dress code",
    style: "Elegant formal",
    intro:
      "We want you to feel comfortable, fresh, and special. Here is a visual guide with soft, elegant tones to match the atmosphere of our wedding.",
    palette: "Suggested palette",
    paletteText: "Sage green, olive green, dusty rose, nude, beige, champagne, and light earth tones.",
    women: "For ladies",
    womenText: "Long or midi dresses, light fabrics, elegant silhouettes, and delicate accessories.",
    men: "For gentlemen",
    menText: "Formal suit in neutral, olive, beige, or earth tones with a light shirt.",
    note: "White is reserved for the bride.",
    inspirationAlt: "Wedding attire inspiration",
    infoAlt: "Suggested dress code color information",
  },
};

const swatches = ["#9aa28a", "#77784d", "#d2a094", "#ccb29b", "#e8dccb", "#ac7d55"];

export function DressCode({ language }: { language: Language }) {
  const text = copy[language];

  return (
    <section className="snap-section relative overflow-hidden bg-cream px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-blush/20 to-cream" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Shirt className="mx-auto h-7 w-7 text-sage" strokeWidth={1.2} />
          <p className="mt-4 text-[0.7rem] uppercase tracking-luxury text-sage-deep">
            {text.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-5xl font-light italic text-foreground">
            {text.title}
          </h2>
          <div className="sage-divider mx-auto mt-6 w-28" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed tracking-wider text-foreground/75">
            {text.intro}
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-12 w-full overflow-hidden border border-sage/20 bg-cream/80 p-2 shadow-[0_28px_90px_-58px_oklch(0.28_0.02_140/0.65)]"
        >
          <img
            src="/assets/images/DressCode.png"
            alt={text.inspirationAlt}
            className="aspect-[1.1/1] w-full object-cover sm:aspect-[1.35/1]"
          />
        </motion.figure>

        <div className="mt-12 grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85 }}
            className="order-2 lg:order-1"
          >
            <p className="text-[0.7rem] uppercase tracking-luxury text-sage-deep">
              {text.palette}
            </p>
            <h3 className="mt-3 font-serif text-4xl font-light italic text-foreground">
              {text.style}
            </h3>
            <p className="mt-5 text-sm leading-relaxed tracking-wider text-foreground/75">
              {text.paletteText}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {swatches.map((color) => (
                <span
                  key={color}
                  className="h-10 w-10 rounded-full border border-white/70 shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="border-l border-sage/40 pl-5">
                <p className="text-[0.65rem] uppercase tracking-luxury text-sage-deep">
                  {text.women}
                </p>
                <p className="mt-2 font-serif text-lg italic leading-relaxed text-foreground/85">
                  {text.womenText}
                </p>
              </div>
              <div className="border-l border-sage/40 pl-5">
                <p className="text-[0.65rem] uppercase tracking-luxury text-sage-deep">
                  {text.men}
                </p>
                <p className="mt-2 font-serif text-lg italic leading-relaxed text-foreground/85">
                  {text.menText}
                </p>
              </div>
            </div>

            <p className="mt-9 text-[0.7rem] uppercase tracking-luxury text-rose">{text.note}</p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="order-1 mx-auto w-full max-w-sm overflow-hidden border border-sage/20 bg-cream/90 p-2 shadow-[0_24px_70px_-48px_oklch(0.28_0.02_140/0.7)] lg:order-2"
          >
            <img
              src="/assets/images/DressCodeInfo.png"
              alt={text.infoAlt}
              className="w-full object-cover"
            />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
