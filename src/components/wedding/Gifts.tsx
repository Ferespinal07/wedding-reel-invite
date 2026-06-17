import type { Language } from "@/App";
import { motion } from "framer-motion";
import { Check, Copy, ExternalLink, Gift } from "lucide-react";
import { useState } from "react";

const copy = {
  es: {
    eyebrow: "Regalos",
    title: "Lluvia de sobres",
    message:
      "El mejor regalo es compartir este día contigo. Si deseas tener un detalle adicional, agradecemos de corazón tu aporte.",
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
    title: "Envelope gifts",
    message:
      "The best gift is sharing this day with you. If you wish to give us something more, we deeply appreciate your contribution.",
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
    <section className="snap-section relative flex flex-col justify-center px-6 py-20">
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

        <div className="mt-8 space-y-4 text-left">
          {text.accounts.map((acc, i) => (
            <div
              key={acc.bank}
              className={`rounded-sm border p-5 ${
                i === 0 ? "border-rose/30 bg-blush/20" : "border-sage/30 bg-sage/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <p
                  className={`text-[0.65rem] font-medium uppercase tracking-luxury ${
                    i === 0 ? "text-rose/80" : "text-sage-deep"
                  }`}
                >
                  {acc.bank}
                </p>
                <p className="text-[0.55rem] uppercase tracking-widest text-muted-foreground">
                  {acc.type}
                </p>
              </div>
              <p className="mt-2 font-serif text-2xl tracking-wider text-foreground">
                {acc.number}
              </p>
              <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                <p className="uppercase tracking-wider text-foreground/80">{acc.name}</p>
                <p className="tracking-wide">{acc.id}</p>
              </div>

              <div className="mt-5 flex gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy(acc.number, i)}
                  className={`flex flex-1 items-center justify-center gap-2 border bg-white/40 py-2.5 text-[0.65rem] uppercase tracking-luxury transition-colors hover:bg-white/60 ${
                    i === 0 ? "border-rose/20 text-rose-deep/80" : "border-sage/20 text-sage-deep/80"
                  }`}
                >
                  {copiedIndex === i ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  {copiedIndex === i ? text.copiedBtn : text.copyBtn}
                </button>
                <a
                  href={acc.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex flex-1 items-center justify-center gap-2 border bg-white/40 py-2.5 text-[0.65rem] uppercase tracking-luxury transition-colors hover:bg-white/60 ${
                    i === 0 ? "border-rose/20 text-rose-deep/80" : "border-sage/20 text-sage-deep/80"
                  }`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
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
