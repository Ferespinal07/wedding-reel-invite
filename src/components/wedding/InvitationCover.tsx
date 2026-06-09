import { motion } from "framer-motion";

type InvitationCoverProps = {
  isOpening: boolean;
  onOpen: () => void;
};

const envelopeImage = "/assets/images/Sobre Invitacion.png";

export function InvitationCover({ isOpening, onOpen }: InvitationCoverProps) {
  return (
    <section
      className="fixed inset-0 z-50 isolate flex w-full items-center justify-center overflow-hidden bg-cream"
      aria-label="Sobre de invitacion"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${envelopeImage}")` }}
        initial={false}
        animate={
          isOpening
            ? { opacity: 0, scale: 1.04, filter: "blur(8px)" }
            : { opacity: 1, scale: 1, filter: "blur(0px)" }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <motion.button
        type="button"
        aria-label="Abrir invitacion"
        onClick={onOpen}
        disabled={isOpening}
        className="absolute left-1/2 top-[56%] z-20 h-36 w-36 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-sage-deep focus-visible:ring-offset-4 focus-visible:ring-offset-cream sm:h-44 sm:w-44"
        initial={false}
        animate={isOpening ? { scale: 1.08, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      />
    </section>
  );
}
