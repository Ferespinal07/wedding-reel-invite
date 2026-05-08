import { Toaster } from "@/components/ui/sonner";
import { BibleVerse } from "@/components/wedding/BibleVerse";
import { Celebration, Ceremony } from "@/components/wedding/EventDetails";
import { Countdown } from "@/components/wedding/Countdown";
import { DressCode } from "@/components/wedding/DressCode";
import { Gifts } from "@/components/wedding/Gifts";
import { Hero } from "@/components/wedding/Hero";
import { InvitationCover } from "@/components/wedding/InvitationCover";
import { PartyMusic } from "@/components/wedding/PartyMusic";
import { RSVP } from "@/components/wedding/RSVP";
import { Tips } from "@/components/wedding/Tips";
import { WeddingRings } from "@/components/wedding/WeddingRings";
import { useState } from "react";

export default function App() {
  const [isOpening, setIsOpening] = useState(false);

  const openInvitation = () => {
    if (isOpening) return;

    setIsOpening(true);
    window.setTimeout(() => {
      document.getElementById("invitacion")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 950);
  };

  return (
    <main className="scroll-snap-y bg-background">
      <InvitationCover isOpening={isOpening} onOpen={openInvitation} />
      <Hero />
      <Countdown />
      <Ceremony />
      <Celebration />
      <BibleVerse />
      <PartyMusic />
      <DressCode />
      <Tips />
      <WeddingRings />
      <Gifts />
      <RSVP />
      <Toaster position="top-center" />
    </main>
  );
}
