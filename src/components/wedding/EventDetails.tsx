import type { Language } from "@/App";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

type Event = {
  kind: string;
  title: string;
  day: string;
  time: string;
  place: string;
  address: string;
  map: string;
  image: string;
  calendarTitle: string;
  calendarDetails: string;
};

const events = {
  es: {
    ceremonySubtitle: "La ceremonia",
    celebrationSubtitle: "La celebracion",
    directions: "Como Llegar",
    ceremony: {
      kind: "Ceremonia",
      title: "Ceremonia Religiosa",
      day: "Domingo, 20 de Septiembre",
      time: "4:00 PM",
      place: "Iglesia Santa Maria",
      address: "Av. Principal 123, Santo Domingo",
      map: "https://maps.google.com/?q=Iglesia+Santa+Maria+Santo+Domingo",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop",
      calendarTitle: "Ceremonia Religiosa - Junior & Omaisy",
      calendarDetails: "Te esperamos en Iglesia Santa Maria",
    },
    celebration: {
      kind: "Celebracion",
      title: "Recepcion & Fiesta",
      day: "Domingo, 20 de Septiembre",
      time: "6:30 PM",
      place: "Hacienda La Esperanza",
      address: "Carretera Sanchez Km 12",
      map: "https://maps.google.com/?q=Hacienda+La+Esperanza",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&auto=format&fit=crop",
      calendarTitle: "Recepcion & Fiesta - Junior & Omaisy",
      calendarDetails: "Te esperamos en Hacienda La Esperanza",
    },
  },
  en: {
    ceremonySubtitle: "The ceremony",
    celebrationSubtitle: "The celebration",
    directions: "Directions",
    ceremony: {
      kind: "Ceremony",
      title: "Religious Ceremony",
      day: "Sunday, September 20",
      time: "4:00 PM",
      place: "Santa Maria Church",
      address: "Av. Principal 123, Santo Domingo",
      map: "https://maps.google.com/?q=Iglesia+Santa+Maria+Santo+Domingo",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop",
      calendarTitle: "Religious Ceremony - Junior & Omaisy",
      calendarDetails: "We will be waiting for you at Santa Maria Church",
    },
    celebration: {
      kind: "Celebration",
      title: "Reception & Party",
      day: "Sunday, September 20",
      time: "6:30 PM",
      place: "Hacienda La Esperanza",
      address: "Carretera Sanchez Km 12",
      map: "https://maps.google.com/?q=Hacienda+La+Esperanza",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&auto=format&fit=crop",
      calendarTitle: "Reception & Party - Junior & Omaisy",
      calendarDetails: "We will be waiting for you at Hacienda La Esperanza",
    },
  },
};

function buildCalUrl(event: Event) {
  const start = event.kind === "Ceremonia" || event.kind === "Ceremony" ? "20260920T160000" : "20260920T183000";
  const end = event.kind === "Ceremonia" || event.kind === "Ceremony" ? "20260920T173000" : "20260920T230000";
  const text = encodeURIComponent(event.calendarTitle);
  const details = encodeURIComponent(event.calendarDetails);
  const location = encodeURIComponent(`${event.place}, ${event.address}`);
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
}

function EventSection({
  event,
  subtitle,
  directions,
}: {
  event: Event;
  subtitle: string;
  directions: string;
}) {
  return (
    <section className="snap-section relative flex flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-[0.7rem] uppercase tracking-luxury text-sage-deep">{event.kind}</p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">{subtitle}</h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="glass mt-10 overflow-hidden rounded-sm"
      >
        <div
          className="h-40 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <div className="p-6">
          <p className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">{event.kind}</p>
          <h3 className="mt-1 font-serif text-2xl font-light text-foreground">{event.title}</h3>
          <div className="mt-4 space-y-2 text-sm text-foreground/85">
            <div className="flex items-center gap-3">
              <Calendar className="h-3.5 w-3.5 text-sage" />
              <span className="tracking-wider">{event.day}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-3.5 w-3.5 text-sage" />
              <span className="tracking-wider">{event.time}</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-3.5 w-3.5 text-sage" />
              <div>
                <p className="tracking-wider">{event.place}</p>
                <p className="text-xs text-muted-foreground">{event.address}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <a
              href={buildCalUrl(event)}
              target="_blank"
              rel="noreferrer"
              className="border border-sage py-3 text-center text-[0.6rem] uppercase tracking-luxury text-sage-deep transition-colors hover:bg-sage hover:text-primary-foreground"
            >
              Save the Date
            </a>
            <a
              href={event.map}
              target="_blank"
              rel="noreferrer"
              className="border border-sage bg-sage py-3 text-center text-[0.6rem] uppercase tracking-luxury text-primary-foreground transition-colors hover:bg-sage-deep"
            >
              {directions}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Ceremony({ language }: { language: Language }) {
  const text = events[language];
  return (
    <EventSection
      event={text.ceremony}
      subtitle={text.ceremonySubtitle}
      directions={text.directions}
    />
  );
}

export function Celebration({ language }: { language: Language }) {
  const text = events[language];
  return (
    <EventSection
      event={text.celebration}
      subtitle={text.celebrationSubtitle}
      directions={text.directions}
    />
  );
}
