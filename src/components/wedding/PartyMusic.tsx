import type { Language } from "@/App";
import { motion } from "framer-motion";
import { Music, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const copy = {
  es: {
    title: "Musica de la fiesta",
    description: "Sugiere la cancion que no puede faltar en nuestra celebracion.",
    song: "Cancion",
    artist: "Artista",
    button: "Agregar a la playlist",
    toast: "Gracias por tu sugerencia!",
  },
  en: {
    title: "Party music",
    description: "Suggest the song that cannot be missing from our celebration.",
    song: "Song",
    artist: "Artist",
    button: "Add to playlist",
    toast: "Thanks for your suggestion!",
  },
};

export function PartyMusic({ language }: { language: Language }) {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [list, setList] = useState<{ song: string; artist: string }[]>([]);
  const text = copy[language];

  function add(e: React.FormEvent) {
    e.preventDefault();
    if (!song.trim()) return;
    setList((l) => [{ song: song.trim(), artist: artist.trim() }, ...l]);
    setSong("");
    setArtist("");
    toast.success(text.toast);
  }

  return (
    <section className="snap-section relative flex flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Music className="mx-auto h-6 w-6 text-sage" strokeWidth={1.2} />
        <p className="mt-3 text-[0.7rem] uppercase tracking-luxury text-sage-deep">Playlist</p>
        <h2 className="mt-3 font-serif text-4xl font-light italic">{text.title}</h2>
        <div className="sage-divider mx-auto mt-6 w-24" />
        <p className="mx-auto mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
          {text.description}
        </p>
      </motion.div>

      <form onSubmit={add} className="mt-8 space-y-4">
        <input
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder={text.song}
          className="w-full border-b border-sage/40 bg-transparent py-2 text-sm tracking-wider text-foreground outline-none focus:border-sage"
        />
        <input
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder={text.artist}
          className="w-full border-b border-sage/40 bg-transparent py-2 text-sm tracking-wider text-foreground outline-none focus:border-sage"
        />
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 border border-sage bg-sage py-3 text-[0.65rem] uppercase tracking-luxury text-primary-foreground transition-colors hover:bg-sage-deep"
        >
          <Plus className="h-3.5 w-3.5" />
          {text.button}
        </button>
      </form>

      {list.length > 0 && (
        <div className="mt-6 space-y-2">
          {list.slice(0, 3).map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass rounded-sm px-4 py-3"
            >
              <p className="font-serif text-sm text-foreground">{s.song}</p>
              {s.artist && (
                <p className="text-[0.65rem] uppercase tracking-luxury text-muted-foreground">
                  {s.artist}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
