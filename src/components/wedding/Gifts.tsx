import type { Language } from "@/App";
import { motion } from "framer-motion";
import { Check, Copy, ExternalLink, Gift } from "lucide-react";
import { useState } from "react";

const copy = {
  es: {
    eyebrow: "Regalos",
    title: "Un detalle especial",
    message:
      "Para nosotros, tu presencia es lo más importante. Si nace de tu corazón ayudarnos a construir nuestro nuevo hogar, recibimos tu gesto de cariño con mucha gratitud.",
    copyBtn: "Copiar",
    copiedBtn: "Copiado",
    bankBtn: "Ir al banco",
    accounts: [
      {
        bank: "Banco BHD",
        type: "Cuenta de Ahorros",
        number: "37532840010",
        name: "Omaisy Gómez",
        id: "Cédula: 402-0906353-2",
        link: "https://bhd.com.do",
      },
      {
        bank: "Banco Popular",
        type: "Cuenta de Ahorros",
        number: "833123763",
        name: "Junior Manuel Núñez",
        id: "Cédula: 402-2439380-7",
        link: "https://popularenlinea.com",
      },
    ],
  },
  en: {
    eyebrow: "Gifts",
    title: "A special detail",
    message:
      "Your presence is what matters most to us. If it comes from your heart to help us build our new home, we receive your kind gesture with immense gratitude.",
    copyBtn: "Copy",
    copiedBtn: "Copied",
    bankBtn: "Go to bank",
    accounts: [
      {
        bank: "Banco BHD",
        type: "Savings Account",
        number: "37532840010",
        name: "Omaisy Gomez",
        id: "ID: 402-0906353-2",
        link: "https://bhd.com.do",
      },
      {
        bank: "Banco Popular",
        type: "Savings Account",
        number: "833123763",
        name: "Junior Manuel Núñez",
        id: "ID: 402-2439380-7",
        link: "https://popularenlinea.com",
      },
    ],
  },
};

export function Gifts({ language }: { language: Language }) {
  const text = copy[language];
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (number: string, index: number) => {
    navigator.clipboard.writeText(number);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="relative flex flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Gift className="mx-auto h-6 w-6 text-sage" strokeWidth={1.2} />
        <p className="mt-3 text-[0.7rem] uppercase tracking-luxury text-sage-deep">
          {text.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-5xl font-light leading-none text-foreground sm:text-6xl">{text.title}</h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass mt-8 rounded-sm p-7 text-center"
      >
        <p className="font-serif text-base italic leading-relaxed text-foreground/85">
          "{text.message}"
        </p>

      <div className="mt-8 space-y-5 text-left">
          {text.accounts.map((acc, i) => (
            <div
              key={acc.bank}
            className={`group relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] ${
              i === 0 ? "border-rose/30 bg-gradient-to-br from-blush/40 to-cream/20" : "border-sage/30 bg-gradient-to-br from-sage/20 to-cream/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <p
                className={`text-[0.7rem] font-bold uppercase tracking-luxury ${
                  i === 0 ? "text-rose-deep" : "text-sage-deep"
                  }`}
                >
                  {acc.bank}
                </p>
              <p className="text-[0.55rem] font-medium uppercase tracking-widest text-muted-foreground">
                  {acc.type}
                </p>
              </div>
            <p className="mt-4 font-display text-3xl tracking-widest text-foreground sm:text-4xl">
                {acc.number}
              </p>
            <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
              <p className="font-bold uppercase tracking-wider text-foreground/90">{acc.name}</p>
                <p className="tracking-wide">{acc.id}</p>
              </div>

            <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => handleCopy(acc.number, i)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-sm border bg-white/60 py-3 text-[0.65rem] font-bold uppercase tracking-luxury transition-colors hover:bg-white/90 ${
                  i === 0 ? "border-rose/20 text-rose-deep" : "border-sage/20 text-sage-deep"
                  }`}
                >
                  {copiedIndex === i ? (
                  <Check className="h-4 w-4" />
                  ) : (
                  <Copy className="h-4 w-4" />
                  )}
                  {copiedIndex === i ? text.copiedBtn : text.copyBtn}
                </button>
                <a
                  href={acc.link}
                  target="_blank"
                  rel="noreferrer"
                className={`flex flex-1 items-center justify-center gap-2 rounded-sm border bg-white/60 py-3 text-[0.65rem] font-bold uppercase tracking-luxury transition-colors hover:bg-white/90 ${
                  i === 0 ? "border-rose/20 text-rose-deep" : "border-sage/20 text-sage-deep"
                  }`}
                >
                <ExternalLink className="h-4 w-4" />
                  {text.bankBtn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
