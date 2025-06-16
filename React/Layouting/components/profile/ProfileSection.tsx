"use client";

import React from "react";
import SearchHeader from "@/components/header/Header";

interface User {
  display_name: string;
  email: string;
  country: string;
  product: string;
  images: { url: string }[];
  external_urls: { spotify: string };
  followers: { href: string; total: number };
}

interface ProfileSectionProps {
  user: User;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ user }) => {
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
        <div className="text-pink-600">
          <p>
            <span className="font-bold">Name:</span> {user.display_name}
          </p>
          <p>
            <span className="font-bold">E-mail:</span> {user.email}
          </p>
          <p>
            <span className="font-bold">Country:</span> {user.country}
          </p>
          <p>
            <span className="font-bold">Type of account:</span> {user.product}
          </p>
          <p>
            <span className="font-bold">Followers:</span> {user.followers.total}
          </p>
          <p>
            <span className="font-bold">Link to profile: </span>
            <a
              href={user.external_urls.spotify}
              className="text-blue-500 underline"
              target="_blank"
            >
              {user.external_urls.spotify}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
