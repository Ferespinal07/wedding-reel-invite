import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Welcome } from "@/components/wedding/Welcome";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { EventDetails } from "@/components/wedding/EventDetails";
import { OurStory } from "@/components/wedding/OurStory";
import { BibleVerse } from "@/components/wedding/BibleVerse";
import { PartyMusic } from "@/components/wedding/PartyMusic";
import { DressCode } from "@/components/wedding/DressCode";
import { Tips } from "@/components/wedding/Tips";
import { PhotoShare } from "@/components/wedding/PhotoShare";
import { Gifts } from "@/components/wedding/Gifts";
import { RSVP } from "@/components/wedding/RSVP";
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
  const [entered, setEntered] = useState(false);

  return (
    <main className="scroll-snap-y bg-background">
      {!entered && <Welcome onEnter={() => setEntered(true)} />}
      <Hero />
      <Countdown />
      <EventDetails />
      <OurStory />
      <BibleVerse />
      <PartyMusic />
      <DressCode />
      <Tips />
      <PhotoShare />
      <Gifts />
      <RSVP />
      <Toaster position="top-center" />
    </main>
  );
}
