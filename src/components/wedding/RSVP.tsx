import type { Language } from "@/App";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const copy = {
  es: {
    eyebrow: "Confirmacion",
    description: "Tu presencia es nuestro mejor regalo. Confirma tu asistencia con anticipacion.",
    deadline: "Agradecemos confirmar antes del dia 15 del mes de junio.",
    required: "Por favor indica si asistiras",
    nameRequired: "Por favor escribe tu nombre",
    thanks: "Gracias por confirmar!",
    confirmed: "Confirmado!",
    seeYou: "Tu confirmacion se abrira en WhatsApp para enviarla a la novia.",
    name: "Nombre Completo",
    attending: "Asistiras?",
    yes: "Si, asistire",
    no: "No podre",
    message: "Mensaje / Restricciones",
    submit: "Enviar Confirmacion",
  },
  en: {
    eyebrow: "Confirmation",
    description: "Your presence is our best gift. Please confirm your attendance in advance.",
    deadline: "We kindly ask you to confirm before June 15.",
    required: "Please let us know if you will attend",
    nameRequired: "Please enter your name",
    thanks: "Thanks for confirming!",
    confirmed: "Confirmed!",
    seeYou: "Your confirmation will open in WhatsApp so it can be sent to the bride.",
    name: "Full Name",
    attending: "Will you attend?",
    yes: "Yes, I will attend",
    no: "I cannot attend",
    message: "Message / Restrictions",
    submit: "Send Confirmation",
  },
};

const BRIDE_WHATSAPP_NUMBER = "18299280575";

export function RSVP({ language }: { language: Language }) {
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const text = copy[language];

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();

    if (!trimmedName) {
      toast.error(text.nameRequired);
      return;
    }

    if (!attending) {
      toast.error(text.required);
      return;
    }

    const attendanceText = attending === "yes" ? text.yes : text.no;
    const whatsappMessage = [
      `Hola, soy ${trimmedName}.`,
      "Quiero confirmar mi asistencia a la boda de Junior & Omaisy.",
      `Asistencia: ${attendanceText}.`,
      message.trim() ? `Mensaje / Restricciones: ${message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const whatsappUrl = `https://wa.me/${BRIDE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    toast.success(text.thanks);
  }

  return (
    <section id="rsvp" className="snap-section relative flex flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-[0.7rem] uppercase tracking-luxury text-sage-deep">{text.eyebrow}</p>
        <h2 className="mt-3 font-display text-5xl font-light leading-none text-foreground sm:text-6xl">R.S.V.P</h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
        <p className="mx-auto mt-4 max-w-xs text-xs leading-relaxed tracking-wider text-muted-foreground">
          {text.description}
        </p>
        <p className="mx-auto mt-4 max-w-xs font-serif text-xl font-light italic leading-snug text-sage-deep">
          {text.deadline}
        </p>
      </motion.div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass mx-auto mt-10 w-full max-w-md rounded-sm p-8 text-center"
        >
          <p className="font-serif text-2xl italic text-sage-deep">{text.confirmed}</p>
          <p className="mt-3 text-xs tracking-wider text-muted-foreground">{text.seeYou}</p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={onSubmit}
          className="mx-auto mt-10 w-full max-w-md space-y-7"
        >
          <div>
            <label className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">
              {text.name}
            </label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full border-b border-sage/40 bg-transparent py-2 text-base tracking-wider text-foreground outline-none focus:border-sage sm:text-sm"
            />
          </div>

          <div>
            <label className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">
              {text.attending}
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
                  {v === "yes" ? text.yes : text.no}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">
              {text.message}
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full resize-none border-b border-sage/40 bg-transparent py-2 text-base tracking-wider text-foreground outline-none focus:border-sage sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full border border-sage bg-sage py-4 text-[0.7rem] uppercase tracking-luxury text-primary-foreground transition-colors hover:bg-sage-deep"
          >
            {text.submit}
          </button>

          <p className="text-center font-serif text-xl italic text-sage-deep">
            Junior <span className="text-rose">&</span> Omaisy
          </p>
        </motion.form>
      )}
    </section>
  );
}
