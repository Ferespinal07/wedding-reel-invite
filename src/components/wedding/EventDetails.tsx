import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";

type Event = {
  kind: string;
  title: string;
  day: string;
  time: string;
  place: string;
  address: string;
  map: string;
  ics: string;
  image: string;
};

const events: Event[] = [
  {
    kind: "Ceremonia",
    title: "Ceremonia Religiosa",
    day: "Domingo, 20 de Septiembre",
    time: "4:00 PM",
    place: "Iglesia Santa María",
    address: "Av. Principal 123, Santo Domingo",
    map: "https://maps.google.com/?q=Iglesia+Santa+Maria+Santo+Domingo",
    ics: "/ceremonia.ics",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop",
  },
  {
    kind: "Celebración",
    title: "Recepción & Fiesta",
    day: "Domingo, 20 de Septiembre",
    time: "6:30 PM",
    place: "Hacienda La Esperanza",
    address: "Carretera Sánchez Km 12",
    map: "https://maps.google.com/?q=Hacienda+La+Esperanza",
    ics: "/recepcion.ics",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&auto=format&fit=crop",
  },
];

function buildCalUrl(e: Event) {
  const start = "20260920T160000";
  const end = "20260920T220000";
  const text = encodeURIComponent(`${e.title} — Junior & Omaisy`);
  const details = encodeURIComponent(`Te esperamos en ${e.place}`);
  const location = encodeURIComponent(`${e.place}, ${e.address}`);
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export function EventDetails() {
  return (
    <section className="snap-section relative flex flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-[0.7rem] uppercase tracking-luxury text-sage-deep">
          Eventos
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">
          El gran día
        </h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
      </motion.div>

      <div className="mt-10 space-y-6">
        {events.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="glass overflow-hidden rounded-sm"
          >
            <div
              className="h-32 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${e.image})` }}
            />
            <div className="p-6">
              <p className="text-[0.6rem] uppercase tracking-luxury text-sage-deep">
                {e.kind}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-light text-foreground">
                {e.title}
              </h3>
              <div className="mt-4 space-y-2 text-sm text-foreground/85">
                <div className="flex items-center gap-3">
                  <Calendar className="h-3.5 w-3.5 text-sage" />
                  <span className="tracking-wider">{e.day}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-3.5 w-3.5 text-sage" />
                  <span className="tracking-wider">{e.time}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 text-sage" />
                  <div>
                    <p className="tracking-wider">{e.place}</p>
                    <p className="text-xs text-muted-foreground">{e.address}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <a
                  href={buildCalUrl(e)}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-sage py-3 text-center text-[0.6rem] uppercase tracking-luxury text-sage-deep transition-colors hover:bg-sage hover:text-primary-foreground"
                >
                  Save the Date
                </a>
                <a
                  href={e.map}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-sage bg-sage py-3 text-center text-[0.6rem] uppercase tracking-luxury text-primary-foreground transition-colors hover:bg-sage-deep"
                >
                  Cómo Llegar
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
