"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { TrackList } from "@/components/recently-played/TrackList";
import { LoadingState } from "@/components/recently-played/LoadingState";
import { ErrorState } from "@/components/recently-played/ErrorState";
import { AuthState } from "@/components/recently-played/AuthState";
import { getRecentlyPlayed, Track } from "@/app/lib/spotify";

export default function RecentlyPlayed() {
  const { data: session } = useSession();
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      if (!session?.accessToken) {
        setError("Not authenticated");
        setLoading(false);
        return;
      }

      try {
        const data = await getRecentlyPlayed(session.accessToken);
        setTracks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchRecentlyPlayed();
    }
  }, [session]);

  if (!session) {
    return <AuthState />;
  }

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return <TrackList tracks={tracks} />;
}
