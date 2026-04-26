import { useRef, useState } from "react";
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
import { Welcome } from "@/components/wedding/Welcome";

export default function App() {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  function startInvitationAudio() {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.5;
    void audioRef.current.play().catch(() => {
      // The invitation still opens if the browser blocks audio or the file is missing.
    });
  }

  return (
    <main className="scroll-snap-y bg-background">
      <audio ref={audioRef} src="/music/wedding-song.mp3" loop preload="auto" />
      {!entered && <Welcome onOpen={startInvitationAudio} onEnter={() => setEntered(true)} />}
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
