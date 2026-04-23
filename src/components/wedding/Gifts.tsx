import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export function Gifts() {
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
        <p className="mt-3 text-[0.7rem] uppercase tracking-luxury text-sage-deep">Regalos</p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">Lluvia de sobres</h2>
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
          "Tu compañía es nuestro mejor regalo. Si deseas obsequiarnos algo más, agradecemos tu
          aporte para nuestra luna de miel."
        </p>

        <div className="mt-6 space-y-4 text-left">
          <div className="rounded-sm border border-sage/30 bg-cream/50 p-4">
            <p className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">Banco Popular</p>
            <p className="mt-2 font-serif text-base tracking-wider text-foreground">
              0123-4567-8910
            </p>
            <p className="text-xs text-muted-foreground">Cuenta de Ahorros — Junior P.</p>
          </div>
          <div className="rounded-sm border border-rose/40 bg-blush/30 p-4">
            <p className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">BHD León</p>
            <p className="mt-2 font-serif text-base tracking-wider text-foreground">
              9876-5432-1098
            </p>
            <p className="text-xs text-muted-foreground">Cuenta Corriente — Omaisy R.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
