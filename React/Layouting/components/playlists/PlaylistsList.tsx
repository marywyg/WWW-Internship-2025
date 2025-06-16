"use client";

import React from "react";
import PlaylistCard from "./PlaylistCard";

interface Playlist {
  id: string;
  name: string;
  description: string;
  images: { url: string }[];
}

const PlaylistList: React.FC<{ playlists: Playlist[] }> = ({ playlists }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default PlaylistList;
