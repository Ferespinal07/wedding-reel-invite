import { motion } from "framer-motion";
import { Gift, Shirt } from "lucide-react";

export function GiftsDressCode() {
  return (
    <section className="snap-section relative flex flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-gold text-[0.7rem] uppercase tracking-luxury">
          Detalles
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">
          Para tener en cuenta
        </h2>
        <div className="gold-divider mx-auto mt-6 w-24" />
      </motion.div>

      <div className="mt-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass rounded-sm p-7 text-center"
        >
          <Gift className="mx-auto h-6 w-6 text-gold" strokeWidth={1} />
          <h3 className="mt-4 font-serif text-2xl font-light">Mesa de Regalos</h3>
          <p className="mt-3 text-xs leading-relaxed tracking-wider text-muted-foreground">
            Tu compañía es lo más importante. Si deseas obsequiarnos algo,
            agradecemos la "Lluvia de Sobres".
          </p>
          <div className="mt-5 border-t border-gold/30 pt-5">
            <p className="text-[0.6rem] uppercase tracking-luxury text-muted-foreground">
              Cuenta Bancaria
            </p>
            <p className="mt-2 font-serif text-sm tracking-wider text-foreground">
              Banco Popular · 0123-4567-8910
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="glass rounded-sm p-7 text-center"
        >
          <Shirt className="mx-auto h-6 w-6 text-gold" strokeWidth={1} />
          <h3 className="mt-4 font-serif text-2xl font-light">Código de Vestimenta</h3>
          <p className="mt-4 font-serif text-3xl italic text-gold">Black Tie</p>
          <p className="mt-3 text-xs leading-relaxed tracking-wider text-muted-foreground">
            Formal — Etiqueta rigurosa
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="gold-divider mx-auto mb-6 w-32" />
        <p className="font-serif text-xl italic text-foreground/80">
          Junior <span className="text-gold">&</span> Omaisy
        </p>
        <p className="mt-2 text-[0.6rem] uppercase tracking-luxury text-muted-foreground">
          20 . 09 . 2026
        </p>
      </motion.div>
    </section>
  );
}
