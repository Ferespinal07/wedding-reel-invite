import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { EventDetails } from "@/components/wedding/EventDetails";
import { RSVP } from "@/components/wedding/RSVP";
import { GiftsDressCode } from "@/components/wedding/GiftsDressCode";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Junior & Omaisy · Nuestra Boda · 20.09.2026" },
      {
        name: "description",
        content:
          "Te invitamos a celebrar nuestra boda. 20 de Septiembre de 2026. Confirma tu asistencia.",
      },
      { property: "og:title", content: "Junior & Omaisy · 20.09.2026" },
      {
        property: "og:description",
        content: "Acompáñanos en el día más importante de nuestras vidas.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="scroll-snap-y dark bg-background">
      <Hero />
      <Countdown />
      <EventDetails />
      <RSVP />
      <GiftsDressCode />
      <Toaster theme="dark" position="top-center" />
    </main>
  );
}
