import { motion } from "framer-motion";
import { Camera, Baby, Car, Heart } from "lucide-react";

const tips = [
  {
    icon: Camera,
    title: "Desconecta",
    text: "Disfruta el momento. Guarda tu cámara durante la ceremonia.",
  },
  {
    icon: Baby,
    title: "Solo adultos",
    text: "Será una celebración pensada solo para adultos.",
  },
  {
    icon: Car,
    title: "Llegada",
    text: "Te recomendamos llegar 30 minutos antes del inicio.",
  },
  {
    icon: Heart,
    title: "Tu presencia",
    text: "Es el regalo más importante para nosotros.",
  },
];

export function Tips() {
  return (
    <section className="snap-section relative flex flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-[0.7rem] uppercase tracking-luxury text-sage-deep">Tips & Notas</p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">Para tener en cuenta</h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
      </motion.div>

      <div className="mx-auto mt-8 grid w-full max-w-md grid-cols-1 gap-3">
        {tips.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass flex items-start gap-4 rounded-sm p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15">
              <t.icon className="h-4 w-4 text-sage-deep" strokeWidth={1.4} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-light text-foreground">{t.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mx-auto mt-6 w-full max-w-md overflow-hidden rounded-sm border border-sage/20 bg-cream/75 p-1 shadow-[0_24px_60px_-38px_oklch(0.28_0.02_140/0.55)]"
      >
        <img
          src="/assets/images/Vestimenta.jpeg"
          alt="Referencia de vestimenta para la boda"
          loading="lazy"
          decoding="async"
          className="aspect-[3/2] w-full rounded-[0.15rem] object-contain"
        />
      </motion.figure>
    </section>
  );
}
