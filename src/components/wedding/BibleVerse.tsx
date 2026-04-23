import { motion } from "framer-motion";

export function BibleVerse() {
  return (
    <section className="snap-section relative flex items-center justify-center overflow-hidden px-6 py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80&auto=format&fit=crop)",
        }}
      />
      <div className="absolute inset-0 sage-overlay" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-md text-center text-white"
      >
        <p className="text-[0.7rem] uppercase tracking-luxury text-blush">Palabra de Dios</p>
        <div className="mx-auto my-6 h-px w-14 bg-white/60" />
        <p className="font-serif text-3xl font-light leading-snug italic sm:text-4xl">
          "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso."
        </p>
        <p className="mt-8 text-[0.7rem] uppercase tracking-luxury text-white/80">
          1 Corintios 13:4
        </p>
      </motion.div>
    </section>
  );
}
