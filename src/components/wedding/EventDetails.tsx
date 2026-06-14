import type { Language } from "@/App";
import { motion } from "framer-motion";
import { Calendar, Clock, HeartHandshake, MapPinCheck, Sparkles } from "lucide-react";

type EventMoment = {
  kind: string;
  title: string;
  day: string;
  time: string;
  note: string;
  image: string;
  calendarTitle: string;
  calendarDetails: string;
};

const events = {
  es: {
    eyebrow: "Nuestro Dia",
    title: "Ceremonia & celebracion",
    intro:
      "Dos momentos, una misma promesa. Queremos vivir cada instante contigo, desde el si ante Dios hasta el abrazo alegre de la celebracion.",
    confirmTitle: "Confirmacion mas abajo",
    confirmText: "Al final de la invitacion encontraras el formulario para confirmar tu asistencia.",
    rsvp: "Ir a confirmacion",
    save: "Agendar",
    moments: [
      {
        kind: "01 / Ceremonia",
        title: "Ceremonia Religiosa",
        day: "Sabado, 18 de Julio",
        time: "7:00 PM",
        note: "Un momento intimo y solemne para bendecir el inicio de nuestra vida juntos.",
        image: "/assets/images/Ceremonia.png",
        calendarTitle: "Ceremonia Religiosa - Junior & Omaisy",
        calendarDetails:
          "La ubicacion exacta sera compartida luego de confirmar asistencia.",
      },
      {
        kind: "02 / Celebracion",
        title: "Recepcion & Fiesta",
        day: "Sabado, 18 de Julio",
        time: "Al finalizar la ceremonia",
        note: "Despues de la ceremonia, brindaremos, cenaremos y bailaremos para celebrar el amor.",
        image:
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80&auto=format&fit=crop",
        calendarTitle: "Recepcion & Fiesta - Junior & Omaisy",
        calendarDetails:
          "La ubicacion exacta sera compartida luego de confirmar asistencia.",
      },
    ],
  },
  en: {
    eyebrow: "Our Day",
    title: "Ceremony & celebration",
    intro:
      "Two moments, one promise. We want to share every part of the day with you, from our blessing before God to the joy of the celebration.",
    confirmTitle: "Confirmation below",
    confirmText: "You will find the attendance form near the end of the invitation.",
    rsvp: "Go to confirmation",
    save: "Save",
    moments: [
      {
        kind: "01 / Ceremony",
        title: "Religious Ceremony",
        day: "Saturday, July 18",
        time: "7:00 PM",
        note: "An intimate and sacred moment to bless the beginning of our life together.",
        image: "/assets/images/Ceremonia.png",
        calendarTitle: "Religious Ceremony - Junior & Omaisy",
        calendarDetails: "The exact location will be shared after confirming attendance.",
      },
      {
        kind: "02 / Celebration",
        title: "Reception & Party",
        day: "Saturday, July 18",
        time: "After the ceremony",
        note: "After the ceremony, we will toast, dine, and dance in celebration of love.",
        image:
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80&auto=format&fit=crop",
        calendarTitle: "Reception & Party - Junior & Omaisy",
        calendarDetails: "The exact location will be shared after confirming attendance.",
      },
    ],
  },
};

function buildCalUrl(event: EventMoment) {
  const start = "20260718T190000";
  const end = event.kind.includes("01") ? "20260718T203000" : "20260718T233000";
  const text = encodeURIComponent(event.calendarTitle);
  const details = encodeURIComponent(event.calendarDetails);
  const location = encodeURIComponent("Ubicacion por confirmar");
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export function EventDetails({ language }: { language: Language }) {
  const text = events[language];

  return (
    <section
      id="eventos"
      className="relative overflow-hidden bg-cream px-6 py-24 sm:py-32"
      aria-labelledby="event-details-title"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#efe6dc_0%,#f7f3ec_60%,#f7f3ec_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,#f7f3ec_0%,#e8dacf_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[170dvh] w-full max-w-5xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Sparkles className="mx-auto h-7 w-7 text-rose" strokeWidth={1.1} />
          <p className="mt-4 text-[0.7rem] uppercase tracking-luxury text-sage-deep">
            {text.eyebrow}
          </p>
          <h2
            id="event-details-title"
            className="mt-4 font-display text-6xl font-light leading-none text-foreground sm:text-7xl"
          >
            {text.title}
          </h2>
          <div className="sage-divider mx-auto mt-7 w-28" />
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 tracking-wider text-muted-foreground">
            {text.intro}
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-10 md:mt-24 md:grid-cols-[1fr_5rem_1fr] md:gap-6">
          <div className="absolute left-1/2 top-6 hidden h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-sage md:block" />

          <EventMomentCard event={text.moments[0]} saveLabel={text.save} align="left" />

          <div className="relative hidden items-center justify-center md:flex">
            <div className="flex h-full flex-col items-center justify-between py-12">
              <span className="h-5 w-5 rounded-full border border-sage bg-cream" />
              <HeartHandshake className="h-8 w-8 bg-cream text-sage-deep" strokeWidth={1.1} />
              <span className="h-5 w-5 rounded-full border border-sage bg-cream" />
            </div>
          </div>

          <EventMomentCard event={text.moments[1]} saveLabel={text.save} align="right" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-16 max-w-xl border border-sage bg-[#f8f2ea] p-7 text-center shadow-[0_28px_80px_-58px_oklch(0.28_0.02_140)] md:mt-24"
        >
          <HeartHandshake className="mx-auto h-7 w-7 text-sage-deep" strokeWidth={1.2} />
          <p className="mt-4 text-[0.68rem] uppercase tracking-luxury text-sage-deep">
            {text.confirmTitle}
          </p>
          <p className="mx-auto mt-4 max-w-md font-serif text-2xl font-light italic leading-snug text-foreground">
            {text.confirmText}
          </p>
          <a
            href="#rsvp"
            className="mt-7 inline-flex border border-sage bg-sage px-6 py-3 text-[0.65rem] uppercase tracking-luxury text-primary-foreground transition-colors hover:bg-sage-deep"
          >
            {text.rsvp}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function EventMomentCard({
  event,
  saveLabel,
  align,
}: {
  event: EventMoment;
  saveLabel: string;
  align: "left" | "right";
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, delay: align === "right" ? 0.2 : 0 }}
      className={`overflow-hidden rounded-t-full border border-sage bg-card shadow-[0_34px_90px_-64px_oklch(0.28_0.02_140)] ${
        align === "right" ? "md:mt-28" : ""
      }`}
    >
      <img src={event.image} alt={event.title} className="aspect-[4/5] w-full object-cover" />
      <div className="p-6 sm:p-7">
        <p className="text-[0.65rem] uppercase tracking-luxury text-sage-deep">{event.kind}</p>
        <h3 className="mt-3 font-serif text-3xl font-light italic text-foreground">
          {event.title}
        </h3>

        <div className="mt-6 space-y-3 text-sm tracking-wider text-foreground">
          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-sage" strokeWidth={1.3} />
            <span>{event.day}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-sage" strokeWidth={1.3} />
            <span>{event.time}</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPinCheck className="mt-0.5 h-4 w-4 text-sage" strokeWidth={1.3} />
            <span>{event.calendarDetails}</span>
          </div>
        </div>

        <p className="mt-6 border-l border-sage pl-4 text-sm leading-7 text-muted-foreground">
          {event.note}
        </p>

        <a
          href={buildCalUrl(event)}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex border border-sage px-5 py-3 text-[0.62rem] uppercase tracking-luxury text-sage-deep transition-colors hover:bg-sage hover:text-primary-foreground"
        >
          {saveLabel}
        </a>
      </div>
    </motion.article>
  );
}
