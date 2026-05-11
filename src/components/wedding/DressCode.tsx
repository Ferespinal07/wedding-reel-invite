import type { Language } from "@/App";
import { motion } from "framer-motion";
import { Heart, Leaf, Shirt, Sparkles } from "lucide-react";

const copy = {
  es: {
    eyebrow: "Codigo de Vestimenta",
    title: "Dress code",
    style: "Formal elegante",
    intro:
      "Queremos que te sientas comodo, fresco y especial. Te compartimos una guia visual con tonos suaves y elegantes para acompanar la atmosfera de nuestra boda.",
    palette: "Paleta sugerida",
    paletteText:
      "Verde salvia, verde oliva, rosa empolvado, nude, beige, champan y tonos tierra claros.",
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
    paletteText:
      "Sage green, olive green, dusty rose, nude, beige, champagne, and light earth tones.",
    women: "For ladies",
    womenText:
      "Long or midi dresses, light fabrics, elegant silhouettes, and delicate accessories.",
    men: "For gentlemen",
    menText: "Formal suit in neutral, olive, beige, or earth tones with a light shirt.",
    note: "White is reserved for the bride.",
    inspirationAlt: "Wedding attire inspiration",
    infoAlt: "Suggested dress code color information",
  },
};

const swatches = ["#9aa28a", "#77784d", "#d2a094", "#ccb29b", "#e8dccb", "#ac7d55"];

const outfitCards = [
  {
    tone: "bg-[#a4ad90]",
    accent: "bg-[#eef0e7]",
    shape: "dress-slit",
  },
  {
    tone: "bg-[#d8a099]",
    accent: "bg-[#f7ebe7]",
    shape: "dress-halter",
  },
  {
    tone: "bg-[#7b805b]",
    accent: "bg-[#f3eadf]",
    shape: "couple",
  },
  {
    tone: "bg-[#e7d6bf]",
    accent: "bg-[#fff8ee]",
    shape: "dress-slip",
  },
  {
    tone: "bg-[#cbb196]",
    accent: "bg-[#f7efe5]",
    shape: "jumpsuit",
  },
  {
    tone: "bg-[#9aa485]",
    accent: "bg-[#edf1e5]",
    shape: "dress-column",
  },
  {
    tone: "bg-[#e9dac8]",
    accent: "bg-[#fffaf1]",
    shape: "wrap-dress",
  },
  {
    tone: "bg-[#cf938c]",
    accent: "bg-[#f8e7e4]",
    shape: "dress-ruffle",
  },
];

function OutfitSilhouette({
  shape,
  tone,
  accent,
}: {
  shape: string;
  tone: string;
  accent: string;
}) {
  if (shape === "couple") {
    return (
      <div className="absolute inset-0 flex items-end justify-center gap-3 px-5 pb-7">
        <div className="relative h-[72%] w-12">
          <span className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-[#5a4639]" />
          <span className="absolute left-1/2 top-6 h-16 w-10 -translate-x-1/2 rounded-t-[1.5rem] bg-[#f7f2e8]" />
          <span
            className={`absolute left-1/2 top-9 h-20 w-12 -translate-x-1/2 rounded-t-[1.1rem] ${tone}`}
          />
          <span className="absolute bottom-0 left-2 h-20 w-3 rounded-b-full bg-[#e4d2bd]" />
          <span className="absolute bottom-0 right-2 h-20 w-3 rounded-b-full bg-[#e4d2bd]" />
        </div>
        <div className="relative h-[70%] w-12">
          <span className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-[#6b4f45]" />
          <span
            className={`absolute left-1/2 top-6 h-16 w-11 -translate-x-1/2 rounded-t-full ${tone}`}
          />
          <span
            className={`absolute bottom-0 left-1/2 h-28 w-16 -translate-x-1/2 rounded-t-[2rem] ${tone}`}
          />
          <span className={`absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 ${accent}`} />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-end justify-center px-5 pb-7">
      <div className="relative h-[78%] w-24">
        <span className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 rounded-full bg-[#6a4b42]" />
        <span className="absolute left-1/2 top-5 h-10 w-px -translate-x-1/2 bg-[#d7bfae]" />
        <span
          className={`absolute left-1/2 top-10 h-14 w-12 -translate-x-1/2 ${tone} ${shape === "dress-halter" ? "rounded-t-full" : "rounded-t-[1.6rem]"}`}
        />
        <span
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${tone} ${
            shape === "jumpsuit"
              ? "h-32 w-20 rounded-t-[2rem] [clip-path:polygon(25%_0,75%_0,88%_100%,58%_100%,50%_45%,42%_100%,12%_100%)]"
              : shape === "dress-slip"
                ? "h-36 w-16 rounded-t-[2.5rem] [clip-path:polygon(28%_0,72%_0,100%_100%,0_100%)]"
                : shape === "wrap-dress"
                  ? "h-34 w-24 rounded-t-[2rem] [clip-path:polygon(20%_0,80%_0,95%_100%,18%_100%,0_45%)]"
                  : "h-36 w-24 rounded-t-[2rem] [clip-path:polygon(30%_0,70%_0,100%_100%,0_100%)]"
          }`}
        />
        <span className={`absolute bottom-0 left-1/2 h-32 w-px -translate-x-1/2 ${accent}`} />
        {shape === "dress-slit" && (
          <span className="absolute bottom-0 right-5 h-24 w-5 skew-x-[-10deg] bg-[#f7efe5]/70" />
        )}
        {shape === "dress-ruffle" && (
          <span className="absolute bottom-3 right-2 h-28 w-8 rounded-full bg-white/25 blur-[1px]" />
        )}
      </div>
    </div>
  );
}

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
          aria-label={text.inspirationAlt}
          className="mt-12 w-full overflow-hidden border border-sage/20 bg-cream/80 p-2 shadow-[0_28px_90px_-58px_oklch(0.28_0.02_140/0.65)]"
        >
          <div className="relative grid aspect-[1.1/1] grid-cols-2 gap-px overflow-hidden bg-cream sm:aspect-[1.35/1] sm:grid-cols-4">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(110deg,transparent_0%,oklch(1_0_0/0.22)_45%,transparent_58%)]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sage/20 bg-cream/95 shadow-[0_18px_55px_-30px_oklch(0.28_0.02_140/0.8)] sm:h-32 sm:w-32">
              <Leaf
                className="absolute left-5 top-5 h-5 w-5 -rotate-45 text-sage/55"
                strokeWidth={1.1}
              />
              <Sparkles className="absolute right-5 top-5 h-4 w-4 text-rose/65" strokeWidth={1.1} />
              <Heart className="h-9 w-9 text-sage-deep/55" strokeWidth={1} />
              <Leaf
                className="absolute bottom-5 right-5 h-5 w-5 rotate-[135deg] text-sage/55"
                strokeWidth={1.1}
              />
            </div>

            {outfitCards.map((card, index) => (
              <div
                key={`${card.shape}-${index}`}
                className="relative min-h-48 overflow-hidden bg-[#d8c5ad]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.97_0.008_90/0.78),oklch(0.74_0.045_70/0.35))]" />
                <div className="absolute -right-10 top-4 h-36 w-36 rounded-full bg-sage/15 blur-2xl" />
                <div className="absolute left-4 top-0 h-full w-px bg-white/45" />
                <div className="absolute right-5 top-0 h-full w-px bg-foreground/5" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[linear-gradient(180deg,transparent,oklch(0.47_0.03_80/0.22))]" />
                <OutfitSilhouette {...card} />
              </div>
            ))}
          </div>
        </motion.figure>

        <div className="mt-12 grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85 }}
            className="order-2 lg:order-1"
          >
            <p className="text-[0.7rem] uppercase tracking-luxury text-sage-deep">{text.palette}</p>
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
