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
  locationName: string;
  address: string;
  mapUrl: string;
};

const events = {
  es: {
    eyebrow: "Nuestro Día",
    title: "Ceremonia & celebración",
    intro:
      "Dos momentos, una misma promesa. Queremos vivir cada instante contigo, desde el sí ante Dios hasta el abrazo alegre de la celebración.",
    confirmTitle: "Confirmación más abajo",
    confirmText: "Al final de la invitación encontrarás el formulario para confirmar tu asistencia.",
    rsvp: "Ir a confirmación",
    save: "Agendar",
    mapButton: "Ver en mapa",
    moments: [
      {
        kind: "01 / Ceremonia",
        title: "Ceremonia Religiosa",
        day: "Sábado, 18 de Julio",
        time: "7:00 PM",
        note: "Un momento íntimo y solemne para bendecir el inicio de nuestra vida juntos.",
        image: "/assets/images/Ceremonia.png",
        calendarTitle: "Ceremonia Religiosa - Junior & Omaisy",
        calendarDetails: "Acompáñanos a celebrar nuestra unión matrimonial.",
        locationName: "Club Codia",
        address: "Los Robles, Las Sabinas Calle 4, La Vega 41000",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=19.211507,-70.52625",
      },
      {
        kind: "02 / Celebracion",
        title: "Recepción & Fiesta",
        day: "Sábado, 18 de Julio",
        time: "Al finalizar la ceremonia",
        note: "Después de la ceremonia, brindaremos, cenaremos y bailaremos para celebrar el amor.",
        image: "/assets/images/Celebracion.png",
        calendarTitle: "Recepción & Fiesta - Junior & Omaisy",
        calendarDetails: "Recepción y fiesta de nuestra boda.",
        locationName: "Club Codia",
        address: "Los Robles, Las Sabinas Calle 4, La Vega 41000",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=19.211507,-70.52625",
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
    mapButton: "View on map",
    moments: [
      {
        kind: "01 / Ceremony",
        title: "Religious Ceremony",
        day: "Saturday, July 18",
        time: "7:00 PM",
        note: "An intimate and sacred moment to bless the beginning of our life together.",
        image: "/assets/images/Ceremonia.png",
        calendarTitle: "Religious Ceremony - Junior & Omaisy",
        calendarDetails: "Join us to celebrate our wedding ceremony.",
        locationName: "Club Codia",
        address: "Los Robles, Las Sabinas Calle 4, La Vega 41000",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=19.211507,-70.52625",
      },
      {
        kind: "02 / Celebration",
        title: "Reception & Party",
        day: "Saturday, July 18",
        time: "After the ceremony",
        note: "After the ceremony, we will toast, dine, and dance in celebration of love.",
        image: "/assets/images/Celebracion.png",
        calendarTitle: "Reception & Party - Junior & Omaisy",
        calendarDetails: "Wedding reception and party.",
        locationName: "Club Codia",
        address: "Los Robles, Las Sabinas Calle 4, La Vega 41000",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=19.211507,-70.52625",
      },
    ],
  },
};

function buildCalUrl(event: EventMoment) {
  const start = "20260718T190000";
  const end = event.kind.includes("01") ? "20260718T203000" : "20260718T233000";
  const text = encodeURIComponent(event.calendarTitle);
  const details = encodeURIComponent(event.calendarDetails);
  const location = encodeURIComponent(`${event.locationName}, ${event.address}`);
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
            {text.title.split("&").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <span className="font-serif">&</span>}
              </span>
            ))}
          </h2>
          <div className="sage-divider mx-auto mt-7 w-28" />
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 tracking-wider text-muted-foreground">
            {text.intro}
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-10 md:mt-24 md:grid-cols-[1fr_5rem_1fr] md:gap-6">
          <div className="absolute left-1/2 top-6 hidden h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-sage md:block" />

          <EventMomentCard event={text.moments[0]} saveLabel={text.save} mapButtonLabel={text.mapButton} align="left" />

          <div className="relative hidden items-center justify-center md:flex">
            <div className="flex h-full flex-col items-center justify-between py-12">
              <span className="h-5 w-5 rounded-full border border-sage bg-cream" />
              <HeartHandshake className="h-8 w-8 bg-cream text-sage-deep" strokeWidth={1.1} />
              <span className="h-5 w-5 rounded-full border border-sage bg-cream" />
            </div>
          </div>

          <EventMomentCard event={text.moments[1]} saveLabel={text.save} mapButtonLabel={text.mapButton} align="right" />
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
  mapButtonLabel,
  align,
}: {
  event: EventMoment;
  saveLabel: string;
  mapButtonLabel: string;
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
            <MapPinCheck className="mt-0.5 h-4 w-4 shrink-0 text-sage" strokeWidth={1.3} />
            <div className="flex flex-col">
              <span className="font-medium text-foreground">{event.locationName}</span>
              <span className="mt-1 text-xs leading-snug text-muted-foreground">
                {event.address}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-6 border-l border-sage pl-4 text-sm leading-7 text-muted-foreground">
          {event.note}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={buildCalUrl(event)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center border border-sage px-5 py-3 text-center text-[0.62rem] uppercase tracking-luxury text-sage-deep transition-colors hover:bg-sage hover:text-primary-foreground"
          >
            {saveLabel}
          </a>
          <a
            href={event.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center border border-sage bg-sage px-5 py-3 text-center text-[0.62rem] uppercase tracking-luxury text-primary-foreground transition-colors hover:bg-sage-deep"
          >
            {mapButtonLabel}
          </a>
        </div>
      </div>
    </motion.article>
  );
}
