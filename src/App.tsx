import { Toaster } from "@/components/ui/sonner";
import { BibleVerse } from "@/components/wedding/BibleVerse";
import { Celebration, Ceremony } from "@/components/wedding/EventDetails";
import { Countdown } from "@/components/wedding/Countdown";
import { DressCode } from "@/components/wedding/DressCode";
import { Gifts } from "@/components/wedding/Gifts";
import { Hero } from "@/components/wedding/Hero";
import { OurStory } from "@/components/wedding/OurStory";
import { PartyMusic } from "@/components/wedding/PartyMusic";
import { PhotoShare } from "@/components/wedding/PhotoShare";
import { RSVP } from "@/components/wedding/RSVP";
import { Tips } from "@/components/wedding/Tips";

export default function App() {
  return (
    <main className="scroll-snap-y bg-background">
      <Hero />
      <Countdown />
      <Ceremony />
      <Celebration />
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
