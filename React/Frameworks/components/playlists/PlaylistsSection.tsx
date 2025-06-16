"use client";

import React, { useEffect, useState } from "react";
import PlaylistList from "./PlaylistsList";

interface Playlist {
  id: string;
  name: string;
  description: string;
  images: { url: string }[];
}

const PlaylistsSection = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        console.error("No access token found");
        return;
      }
      const res = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        console.error("Cannot access playlists.", res.statusText);
        return;
      }

      const data = await res.json();
      setPlaylists(data.items || []);
    };

    fetchPlaylists();
  }, []);

  return (
    <section className="mt-4">
      <h1 className="text-2xl font-bold mb-4 text-pink-500">Your Playlists</h1>
      <PlaylistList playlists={playlists} />
    </section>
  );
};

export default PlaylistsSection;
