import { motion } from "framer-motion";
import { Shirt } from "lucide-react";

export function DressCode() {
  return (
    <section className="snap-section relative flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-[0.7rem] uppercase tracking-luxury text-sage-deep">
          Código de Vestimenta
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">Dress code</h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass mt-10 w-full rounded-sm p-10 text-center"
      >
        <Shirt className="mx-auto h-10 w-10 text-sage" strokeWidth={1} />
        <p className="mt-6 font-serif text-4xl font-light italic text-sage-deep">Formal</p>
        <p className="mt-3 text-xs leading-relaxed tracking-wider text-muted-foreground">
          Etiqueta elegante
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 text-left">
          <div className="rounded-sm border border-sage/30 p-4">
            <p className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">Ellas</p>
            <p className="mt-2 font-serif text-sm italic text-foreground">
              Vestido largo en tonos pasteles
            </p>
          </div>
          <div className="rounded-sm border border-sage/30 p-4">
            <p className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">Ellos</p>
            <p className="mt-2 font-serif text-sm italic text-foreground">Traje oscuro o smoking</p>
          </div>
        </div>

        <p className="mt-6 text-[0.65rem] uppercase tracking-luxury text-rose">
          Reservamos el blanco para la novia
        </p>
      </motion.div>
    </section>
  );
}
