import { Track } from "@/app/lib/spotify";
import { TrackItem } from "./TrackItem";
import { Artist } from "@/app/lib/spotify";

interface TrackListProps {
  artists: Artist[];
}

export function TrackList({ artists }: TrackListProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Followed Artists</h1>
      <div className="grid gap-4">
        {artists.map((artist, index) => (
          <TrackItem
            key={`${artist.name}-${index}`}
            artist={artist}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
