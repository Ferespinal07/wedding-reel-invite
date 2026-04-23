import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Ceremonia",
    time: "4:00 PM",
    place: "Iglesia Santa María",
    address: "Av. Principal 123, Santo Domingo",
    map: "https://maps.google.com/?q=Iglesia+Santa+Maria+Santo+Domingo",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Recepción",
    time: "6:30 PM",
    place: "Hacienda La Esperanza",
    address: "Carretera Sánchez Km 12",
    map: "https://maps.google.com/?q=Hacienda+La+Esperanza",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&auto=format&fit=crop",
  },
];

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
        <p className="text-gold text-[0.7rem] uppercase tracking-luxury">
          Eventos
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">
          El gran día
        </h2>
        <div className="gold-divider mx-auto mt-6 w-24" />
      </motion.div>

      <div className="mt-10 space-y-6">
        {events.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="glass overflow-hidden rounded-sm"
          >
            <div
              className="h-32 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${e.image})` }}
            />
            <div className="p-6">
              <h3 className="font-serif text-2xl font-light text-foreground">
                {e.title}
              </h3>
              <div className="mt-4 space-y-2 text-sm text-foreground/85">
                <div className="flex items-center gap-3">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  <span className="tracking-wider">{e.time}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 text-gold" />
                  <div>
                    <p className="tracking-wider">{e.place}</p>
                    <p className="text-xs text-muted-foreground">{e.address}</p>
                  </div>
                </div>
              </div>
              <a
                href={e.map}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block w-full border border-gold py-3 text-center text-[0.65rem] uppercase tracking-luxury text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
              >
                Ver Ubicación
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
