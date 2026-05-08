import type { Language } from "@/App";
import { motion } from "framer-motion";
import { Maximize2, Shirt } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const copy = {
  es: {
    eyebrow: "Codigo de Vestimenta",
    style: "Etiqueta elegante",
    women: "Ellas",
    womenText: "Vestido largo en tonos pasteles",
    men: "Ellos",
    menText: "Traje oscuro o smoking",
    note: "Reservamos el blanco para la novia",
    reference: "Ver referencia",
    dialogTitle: "Referencia de vestimenta",
    dialogDescription: "Inspiracion visual para el codigo de vestimenta de la boda.",
    imageAlt: "Referencia de vestimenta para la boda",
  },
  en: {
    eyebrow: "Dress Code",
    style: "Elegant formal attire",
    women: "Ladies",
    womenText: "Long dress in pastel tones",
    men: "Gentlemen",
    menText: "Dark suit or tuxedo",
    note: "White is reserved for the bride",
    reference: "View reference",
    dialogTitle: "Dress code reference",
    dialogDescription: "Visual inspiration for the wedding dress code.",
    imageAlt: "Wedding dress code reference",
  },
};

export function DressCode({ language }: { language: Language }) {
  const text = copy[language];

  return (
    <section className="snap-section relative flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-[0.7rem] uppercase tracking-luxury text-sage-deep">{text.eyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">Dress code</h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass mt-8 w-full max-w-md rounded-sm p-8 text-center"
      >
        <Shirt className="mx-auto h-10 w-10 text-sage" strokeWidth={1} />
        <p className="mt-6 font-serif text-4xl font-light italic text-sage-deep">Formal</p>
        <p className="mt-3 text-xs leading-relaxed tracking-wider text-muted-foreground">
          {text.style}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 text-left">
          <div className="rounded-sm border border-sage/30 p-4">
            <p className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">{text.women}</p>
            <p className="mt-2 font-serif text-sm italic text-foreground">{text.womenText}</p>
          </div>
          <div className="rounded-sm border border-sage/30 p-4">
            <p className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">{text.men}</p>
            <p className="mt-2 font-serif text-sm italic text-foreground">{text.menText}</p>
          </div>
        </div>

        <p className="mt-6 text-[0.65rem] uppercase tracking-luxury text-rose">{text.note}</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="mt-8 border-sage/40 bg-cream/70 px-6 text-[0.65rem] uppercase tracking-luxury text-sage-deep shadow-sm hover:bg-blush/40"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              {text.reference}
            </Button>
          </DialogTrigger>
          <DialogContent className="h-[100dvh] max-h-none w-screen max-w-none overflow-hidden border-0 bg-cream p-0 shadow-none sm:rounded-none">
            <DialogTitle className="sr-only">{text.dialogTitle}</DialogTitle>
            <DialogDescription className="sr-only">{text.dialogDescription}</DialogDescription>

            <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 py-14 sm:px-8">
              <img
                src="/assets/images/Vestimenta.jpeg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/50 to-sage/35" />
              <div className="absolute inset-0 bg-gradient-to-r from-rose/20 via-transparent to-sage/25" />

              <motion.figure
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="relative z-10 w-full max-w-6xl overflow-hidden rounded-sm border border-white/65 bg-cream/80 p-1 shadow-[0_30px_90px_-45px_oklch(0.28_0.02_140/0.75)]"
              >
                <img
                  src="/assets/images/Vestimenta.jpeg"
                  alt={text.imageAlt}
                  className="max-h-[78dvh] w-full rounded-[0.15rem] object-contain"
                />
              </motion.figure>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  );
}
