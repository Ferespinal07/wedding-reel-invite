import { Pause, Play, Volume2, VolumeX } from "lucide-react";

type MusicControlProps = {
  isPlaying: boolean;
  isMuted: boolean;
  onTogglePlay: () => void;
  onToggleMute: () => void;
};

export function MusicControl({
  isPlaying,
  isMuted,
  onTogglePlay,
  onToggleMute,
}: MusicControlProps) {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-1 border border-sage/30 bg-cream/70 p-1 shadow-sm backdrop-blur-sm">
      <button
        type="button"
        aria-label={isPlaying ? "Pausar musica" : "Reproducir musica"}
        onClick={onTogglePlay}
        className="flex h-9 w-9 items-center justify-center text-sage-deep transition-colors hover:bg-blush/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep"
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>
      <button
        type="button"
        aria-label={isMuted ? "Activar sonido" : "Silenciar musica"}
        onClick={onToggleMute}
        className="flex h-9 w-9 items-center justify-center text-sage-deep transition-colors hover:bg-blush/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep"
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
