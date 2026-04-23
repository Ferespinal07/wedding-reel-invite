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
};

const ceremony: Event = {
  kind: "Ceremonia",
  title: "Ceremonia Religiosa",
  day: "Domingo, 20 de Septiembre",
  time: "4:00 PM",
  place: "Iglesia Santa María",
  address: "Av. Principal 123, Santo Domingo",
  map: "https://maps.google.com/?q=Iglesia+Santa+Maria+Santo+Domingo",
  image:
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop",
};

const celebration: Event = {
  kind: "Celebración",
  title: "Recepción & Fiesta",
  day: "Domingo, 20 de Septiembre",
  time: "6:30 PM",
  place: "Hacienda La Esperanza",
  address: "Carretera Sánchez Km 12",
  map: "https://maps.google.com/?q=Hacienda+La+Esperanza",
  image:
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&auto=format&fit=crop",
};

function buildCalUrl(event: Event) {
  const start = event.kind === "Ceremonia" ? "20260920T160000" : "20260920T183000";
  const end = event.kind === "Ceremonia" ? "20260920T173000" : "20260920T230000";
  const text = encodeURIComponent(`${event.title} - Junior & Omaisy`);
  const details = encodeURIComponent(`Te esperamos en ${event.place}`);
  const location = encodeURIComponent(`${event.place}, ${event.address}`);
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
}

function EventSection({ event, subtitle }: { event: Event; subtitle: string }) {
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
              Cómo Llegar
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Ceremony() {
  return <EventSection event={ceremony} subtitle="La ceremonia" />;
}

export function Celebration() {
  return <EventSection event={celebration} subtitle="La celebración" />;
}

export function EventDetails() {
  return (
    <>
      <Ceremony />
      <Celebration />
    </>
  );
}
