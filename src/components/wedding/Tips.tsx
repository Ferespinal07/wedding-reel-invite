import type { Language } from "@/App";
import { motion } from "framer-motion";
import { Baby, Camera, Car, Heart } from "lucide-react";

const copy = {
  es: {
    eyebrow: "Tips & Notas",
    title: "Para tener en cuenta",
    tips: [
      {
        icon: Camera,
        title: "Desconecta",
        text: "Disfruta el momento. Guarda tu camara durante la ceremonia.",
      },
      {
        icon: Baby,
        title: "Solo adultos",
        text: "Sera una celebracion pensada solo para adultos.",
      },
      {
        icon: Car,
        title: "Llegada",
        text: "Te recomendamos llegar 30 minutos antes del inicio.",
      },
      {
        icon: Heart,
        title: "Tu presencia",
        text: "Es el regalo mas importante para nosotros.",
      },
    ],
  },
  en: {
    eyebrow: "Tips & Notes",
    title: "Good to know",
    tips: [
      {
        icon: Camera,
        title: "Unplug",
        text: "Enjoy the moment. Please put your camera away during the ceremony.",
      },
      {
        icon: Baby,
        title: "Adults only",
        text: "This celebration is planned for adults only.",
      },
      {
        icon: Car,
        title: "Arrival",
        text: "We recommend arriving 30 minutes before the start time.",
      },
      {
        icon: Heart,
        title: "Your presence",
        text: "It is the most important gift to us.",
      },
    ],
  },
};

export function Tips({ language }: { language: Language }) {
  const text = copy[language];

  return (
    <section className="snap-section relative flex flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-[0.7rem] uppercase tracking-luxury text-sage-deep">{text.eyebrow}</p>
        <h2 className="mt-3 font-display text-5xl font-light leading-none text-foreground sm:text-6xl">{text.title}</h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
      </motion.div>

      <div className="mx-auto mt-8 grid w-full max-w-md grid-cols-1 gap-3">
        {text.tips.map((tip, i) => (
          <motion.div
            key={tip.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass flex items-start gap-4 rounded-sm p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15">
              <tip.icon className="h-4 w-4 text-sage-deep" strokeWidth={1.4} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-light text-foreground">{tip.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{tip.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
