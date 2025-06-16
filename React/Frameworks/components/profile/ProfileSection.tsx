"use client";

import React, { useEffect, useState } from "react";
import SearchHeader from "@/components/header/Header";
import { useSession } from "next-auth/react";
import { LoadingState } from "@/components/recently-played/LoadingState";
import { ErrorState } from "@/components/recently-played/ErrorState";
import { AuthState } from "@/components/recently-played/AuthState";
import { getUserProfile, User } from "@/app/lib/spotify";

export default function ProfileSection() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!session?.accessToken) {
        setError("Not authenticated");
        setLoading(false);
        return;
      }

      try {
        const profile = await getUserProfile(session.accessToken);
        setUser(profile);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch profile"
        );
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchProfile();
    }
  }, [session]);

  if (status === "loading" || loading) {
    return <LoadingState />;
  }

  if (status === "unauthenticated" || !session) {
    return <AuthState />;
  }

  if (error || !user) {
    return <ErrorState message={error ?? "Something went wrong"} />;
  }

  return (
    <section className="relative h-screen">
      <SearchHeader />
      <div className="max-w-xl mx-auto mt-10 p-6 bg-pink-50 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">
          Your Spotify Profile
        </h1>
        {user.images?.[0]?.url && (
          <img
            src={user.images[0].url}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
        )}
        <p className="text-pink-600">
          <strong>Name:</strong> {user.display_name}
        </p>
        <p className="text-pink-600">
          <strong>E-mail:</strong> {user.email}
        </p>
        <p className="text-pink-600">
          <strong>Country:</strong> {user.country}
        </p>
        <p className="text-pink-600">
          <strong>Type of account:</strong> {user.product}
        </p>
        <p className="text-pink-600">
          <strong>Followers:</strong> {user.followers.total}
        </p>
        <p className="text-pink-600">
          <strong>Link to profile:</strong>{" "}
          <a
            href={user.external_urls.spotify}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.external_urls.spotify}
          </a>
        </p>
      </div>
    </section>
  );
}
