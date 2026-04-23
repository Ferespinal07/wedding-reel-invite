import { motion } from "framer-motion";

const photos = [
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80&auto=format&fit=crop",
];

export function OurStory() {
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
          Nosotros
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">
          Nuestra historia
        </h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
        <p className="mx-auto mt-5 max-w-xs text-xs leading-relaxed text-muted-foreground">
          Cada momento nos trajo a este día. Gracias por ser parte de él.
        </p>
      </motion.div>

      <div className="mt-8 grid grid-cols-3 gap-2">
        {photos.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`overflow-hidden rounded-sm ${
              i === 0 || i === 5 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
            }`}
          >
            <img
              src={src}
              alt={`Junior y Omaisy ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
