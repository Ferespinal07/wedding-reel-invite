import { motion } from "framer-motion";
import { QrCode, Upload } from "lucide-react";

const DRIVE_URL = "https://drive.google.com/drive/folders/your-folder-id";
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
  DRIVE_URL,
)}&color=4a5d3a&bgcolor=f7f5ee&margin=10`;

export function PhotoShare() {
  return (
    <section className="snap-section relative flex flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <QrCode className="mx-auto h-6 w-6 text-sage" strokeWidth={1.2} />
        <p className="mt-3 text-[0.7rem] uppercase tracking-luxury text-sage-deep">
          Comparte tus fotos
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">Galería compartida</h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
        <p className="mx-auto mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
          Escanea el código y sube las fotos que tomes durante el día. Queremos revivirlo a través
          de tus ojos.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass mt-8 flex flex-col items-center rounded-sm p-8"
      >
        <div className="rounded-sm bg-cream p-3">
          <img src={QR_SRC} alt="QR para subir fotos a Google Drive" className="h-44 w-44" />
        </div>
        <p className="mt-5 font-serif text-sm italic text-foreground/80">o entra desde tu móvil</p>
        <a
          href={DRIVE_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 border border-sage bg-sage py-3 text-[0.65rem] uppercase tracking-luxury text-primary-foreground transition-colors hover:bg-sage-deep"
        >
          <Upload className="h-3.5 w-3.5" />
          Subir Fotos
        </a>
      </motion.div>
    </section>
  );
}
