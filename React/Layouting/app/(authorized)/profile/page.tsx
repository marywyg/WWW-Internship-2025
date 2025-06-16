"use client";

import React, { useEffect, useState } from "react";
import ProfileSection from "@/components/profile/ProfileSection";

type SpotifyUser = {
  display_name: string;
  email: string;
  external_urls: { spotify: string };
  product: string;
  images: { url: string }[];
  country: string;
  followers: { href: string; total: number };
};

export default function ProfilePage() {
  const [user, setUser] = useState<SpotifyUser | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        console.error("Brak tokena dostępowego");
        return;
      }

      const res = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        console.error("Cannot load profile", res.statusText);
        return;
      }

      const data = await res.json();
      setUser(data);
    };

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="p-10 text-center text-pink-500">Loading user data...</div>
    );
  }

  return <ProfileSection user={user} />;
}
