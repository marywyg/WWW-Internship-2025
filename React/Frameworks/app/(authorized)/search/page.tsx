"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { TrackList } from "@/components/recently-played/TrackList";
import { LoadingState } from "@/components/recently-played/LoadingState";
import { ErrorState } from "@/components/recently-played/ErrorState";
import { AuthState } from "@/components/recently-played/AuthState";
import { getFollowedArtists, Artist } from "@/app/lib/spotify";
import { ArtistsSection } from "@/components/artists_search/ArtistsSection";
import SearchBar from "@/components/artists_search/SearchBar";

export default function FollowedArtists() {
  const { data: session } = useSession();
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFollowedArtists = async () => {
      if (!session?.accessToken) {
        setError("Not authenticated");
        setLoading(false);
        return;
      }

      try {
        const data = await getFollowedArtists(session.accessToken);
        setArtists(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchFollowedArtists();
    }
  }, [session]);

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!session) {
    return <AuthState />;
  }

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <>
      <SearchBar onSearch={setSearchQuery} />
      <ArtistsSection artists={filteredArtists} />{" "}
    </>
  );
}
