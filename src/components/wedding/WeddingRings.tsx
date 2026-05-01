import { motion } from "framer-motion";

export function WeddingRings() {
  return (
    <section className="snap-section relative flex items-center justify-center overflow-hidden bg-cream px-6 py-20">
      <motion.img
        src="/assets/images/Anillos%20de%20boda.png"
        alt="Anillos de boda"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/45 via-cream/10 to-cream/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-sage/20 via-transparent to-rose/25" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="relative z-10 mt-auto text-center text-foreground"
      >
        <p className="text-[0.7rem] uppercase tracking-luxury text-sage-deep">Un mismo camino</p>
        <div className="sage-divider mx-auto mt-5 w-24" />
      </motion.div>
    </section>
  );
}
