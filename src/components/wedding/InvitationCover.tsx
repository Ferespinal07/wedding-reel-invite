import { motion } from "framer-motion";

type InvitationCoverProps = {
  isOpening: boolean;
  onOpen: () => void;
};

const envelopeImage = "/assets/images/Sobre Invitacion.png";

export function InvitationCover({ isOpening, onOpen }: InvitationCoverProps) {
  return (
    <section
      className="snap-section relative isolate flex w-full items-center justify-center overflow-hidden bg-cream"
      aria-label="Sobre de invitacion"
    >
      <motion.div
        className="absolute inset-0 bg-cream"
        initial={false}
        animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.75 }}
      />

      <div className="absolute inset-0" style={{ perspective: 1400 }}>
        <motion.div
          className="absolute inset-x-0 top-0 h-1/2 overflow-hidden"
          style={{ transformOrigin: "50% 100%" }}
          initial={false}
          animate={
            isOpening
              ? { rotateX: -78, y: "-12%", opacity: 0.65, filter: "brightness(1.08)" }
              : { rotateX: 0, y: "0%", opacity: 1, filter: "brightness(1)" }
          }
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={envelopeImage}
            alt=""
            className="absolute inset-x-0 top-0 h-[200%] w-full object-cover"
            draggable={false}
          />
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden"
          style={{ transformOrigin: "50% 0%" }}
          initial={false}
          animate={
            isOpening
              ? { rotateX: 18, y: "18%", opacity: 0 }
              : { rotateX: 0, y: "0%", opacity: 1 }
          }
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <img
            src={envelopeImage}
            alt=""
            className="absolute inset-x-0 bottom-0 h-[200%] w-full object-cover"
            draggable={false}
          />
        </motion.div>
      </div>

      <motion.button
        type="button"
        aria-label="Abrir invitacion"
        onClick={onOpen}
        disabled={isOpening}
        className="absolute left-1/2 top-[56%] z-20 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-sage-deep focus-visible:ring-offset-4 focus-visible:ring-offset-cream sm:h-44 sm:w-44"
        initial={false}
        animate={isOpening ? { scale: 1.35, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <span className="absolute inset-0 rounded-full bg-sage/10 shadow-[0_0_0_1px_oklch(0.48_0.06_130_/_0.25),0_0_34px_oklch(0.48_0.06_130_/_0.28)]" />
        <motion.span
          className="absolute inset-3 rounded-full border border-sage-deep/25"
          animate={{ scale: [1, 1.12, 1], opacity: [0.8, 0.28, 0.8] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.button>
    </section>
  );
}
