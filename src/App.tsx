import { Toaster } from "@/components/ui/sonner";
import { BibleVerse } from "@/components/wedding/BibleVerse";
import { Celebration, Ceremony } from "@/components/wedding/EventDetails";
import { Countdown } from "@/components/wedding/Countdown";
import { DressCode } from "@/components/wedding/DressCode";
import { Gifts } from "@/components/wedding/Gifts";
import { Hero } from "@/components/wedding/Hero";
import { InvitationCover } from "@/components/wedding/InvitationCover";
import { MusicControl } from "@/components/wedding/MusicControl";
import { PartyMusic } from "@/components/wedding/PartyMusic";
import { RSVP } from "@/components/wedding/RSVP";
import { Tips } from "@/components/wedding/Tips";
import { WeddingRings } from "@/components/wedding/WeddingRings";
import { useRef, useState } from "react";

export type Language = "es" | "en";

export default function App() {
  const [isOpening, setIsOpening] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const [showCover, setShowCover] = useState(true);
  const [language, setLanguage] = useState<Language>("es");
  const inviteRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMusicMuted, setIsMusicMuted] = useState(false);

  const openInvitation = () => {
    if (isOpening) return;

    setIsOpening(true);
    audioRef.current?.play().catch(() => undefined);
    window.setTimeout(() => {
      setShowCover(false);
      setCanScroll(true);
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 1000);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMusicMuted(audio.muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/music/Photograph%20-%20Ed%20Sheeran%20-%20Violin%20cover%20-%20Daniel%20Jang.mp3"
        loop
        preload="auto"
      />
      {showCover && <InvitationCover isOpening={isOpening} onOpen={openInvitation} />}
      {!showCover && <MusicControl isMuted={isMusicMuted} onToggleMute={toggleMute} />}
      <main
        ref={inviteRef}
        className={`bg-background ${canScroll ? "invite-scroll" : "invite-locked"}`}
      >
        <Hero language={language} onLanguageChange={setLanguage} />
        <Countdown language={language} />
        <Ceremony language={language} />
        <Celebration language={language} />
        <BibleVerse language={language} />
        <PartyMusic language={language} />
        <DressCode language={language} />
        <Tips language={language} />
        <WeddingRings language={language} />
        <Gifts language={language} />
        <RSVP language={language} />
        <Toaster position="top-center" />
      </main>
    </>
  );
}
