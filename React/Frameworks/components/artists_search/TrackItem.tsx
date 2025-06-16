import { Artist } from "@/app/lib/spotify";

interface TrackItemProps {
  artist: Artist;
  index: number;
}

export function TrackItem({ artist, index }: TrackItemProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-neutral-900 rounded-lg shadow">
      <img
        src={artist.images[0]?.url}
        alt={artist.name}
        className="w-16 h-16 rounded"
      />
      <div>
        <h2 className="text-lg font-semibold">{artist.name}</h2>
        <p className="text-sm text-gray-500">{artist.followers.total}</p>
        <p className="text-xs text-gray-400">{artist.followers.total}</p>
      </div>
    </div>
  );
}
