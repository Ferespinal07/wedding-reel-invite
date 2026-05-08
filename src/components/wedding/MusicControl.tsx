import { Volume2, VolumeX } from "lucide-react";

type MusicControlProps = {
  isMuted: boolean;
  onToggleMute: () => void;
};

export function MusicControl({ isMuted, onToggleMute }: MusicControlProps) {
  return (
    <div className="fixed bottom-4 right-4 z-40 border border-sage/30 bg-cream/70 p-1 shadow-sm backdrop-blur-sm">
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
