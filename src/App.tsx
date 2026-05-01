import { Toaster } from "@/components/ui/sonner";
import { BibleVerse } from "@/components/wedding/BibleVerse";
import { Celebration, Ceremony } from "@/components/wedding/EventDetails";
import { Countdown } from "@/components/wedding/Countdown";
import { DressCode } from "@/components/wedding/DressCode";
import { Gifts } from "@/components/wedding/Gifts";
import { Hero } from "@/components/wedding/Hero";
import { PartyMusic } from "@/components/wedding/PartyMusic";
import { RSVP } from "@/components/wedding/RSVP";
import { Tips } from "@/components/wedding/Tips";

export default function App() {
  return (
    <main className="scroll-snap-y bg-background">
      <Hero />
      <Countdown />
      <Ceremony />
      <Celebration />
      <BibleVerse />
      <PartyMusic />
      <DressCode />
      <Tips />
      <Gifts />
      <RSVP />
      <Toaster position="top-center" />
    </main>
  );
}
