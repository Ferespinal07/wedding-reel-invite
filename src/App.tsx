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
import { useRef, useState } from "react";

export default function App() {
  const [isOpening, setIsOpening] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const inviteRef = useRef<HTMLElement>(null);

  const openInvitation = () => {
    if (isOpening) return;

    setIsOpening(true);
    window.setTimeout(() => {
      setCanScroll(true);
      inviteRef.current?.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }, 850);
  };

  return (
    <main ref={inviteRef} className={`bg-background ${canScroll ? "scroll-snap-y" : "invite-locked"}`}>
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
