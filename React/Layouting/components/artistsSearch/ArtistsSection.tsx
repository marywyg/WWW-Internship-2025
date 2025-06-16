"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ArtistCard from "./ArtistCard";

interface Artist {
  followers: { href: string; total: number };
  genres: string[];
  href: string;
  images: { url: string }[];
  name: string;
  popularity: number;
  id: string;
}

const ArtistsSection: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      console.error("No access token found");
      return;
    }
    setToken(accessToken);
  }, []);

  const handleSearch = async (query: string) => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          query
        )}&type=artist&limit=50`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Error fetching data from Spotify API");
      }

      const data = await res.json();
      setArtists(data.artists.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-8">
        {loading && <p className="text-center col-span-full">Loading...</p>}
        {!loading && artists.length === 0 && (
          <p className="text-center col-span-full">No artist searched.</p>
        )}
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistsSection;
