import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export function RSVP() {
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!attending) {
      toast.error("Por favor indica si asistirás");
      return;
    }
    setSubmitted(true);
    toast.success("¡Gracias por confirmar!");
  }

  return (
    <section className="snap-section relative flex flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-[0.7rem] uppercase tracking-luxury text-sage-deep">Confirmación</p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">R.S.V.P</h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
        <p className="mx-auto mt-4 max-w-xs text-xs leading-relaxed tracking-wider text-muted-foreground">
          Tu presencia es nuestro mejor regalo. Confirma antes del 20 de agosto.
        </p>
      </motion.div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass mt-10 rounded-sm p-8 text-center"
        >
          <p className="font-serif text-2xl italic text-sage-deep">¡Confirmado!</p>
          <p className="mt-3 text-xs tracking-wider text-muted-foreground">
            Nos vemos el 20 de septiembre.
          </p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={onSubmit}
          className="mt-10 space-y-7"
        >
          <div>
            <label className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">
              Nombre Completo
            </label>
            <input
              required
              type="text"
              className="mt-2 w-full border-b border-sage/40 bg-transparent py-2 text-sm tracking-wider text-foreground outline-none focus:border-sage"
            />
          </div>

          <div>
            <label className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">
              ¿Asistirás?
            </label>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {(["yes", "no"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setAttending(v)}
                  className={`border py-3 text-[0.65rem] uppercase tracking-luxury transition-all ${
                    attending === v
                      ? "border-sage bg-sage text-primary-foreground"
                      : "border-sage/40 text-foreground/80 hover:border-sage"
                  }`}
                >
                  {v === "yes" ? "Sí, asistiré" : "No podré"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">
              Mensaje / Restricciones
            </label>
            <textarea
              rows={2}
              className="mt-2 w-full resize-none border-b border-sage/40 bg-transparent py-2 text-sm tracking-wider text-foreground outline-none focus:border-sage"
            />
          </div>

          <button
            type="submit"
            className="w-full border border-sage bg-sage py-4 text-[0.7rem] uppercase tracking-luxury text-primary-foreground transition-colors hover:bg-sage-deep"
          >
            Enviar Confirmación
          </button>

          <p className="text-center font-serif text-xl italic text-sage-deep">
            Junior <span className="text-rose">&</span> Omaisy
          </p>
        </motion.form>
      )}
    </section>
  );
}
