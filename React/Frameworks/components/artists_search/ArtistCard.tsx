"use client";

import React from "react";

type Artist = {
  followers: { href: string; total: number };
  genres: string[];
  href: string;
  images: { url: string }[];
  name: string;
  popularity: number;
};

interface Props {
  artist: Artist;
}

const ConnectAccountSection: React.FC<Props> = ({ artist }) => {
  return (
    <section className="relative">
      <div className="max-w-xl mx-auto mt-5 p-6 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Artist</h1>
        {artist.images?.[0]?.url && (
          <img
            src={artist.images[0].url}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
        )}
        <p className="text-pink-600">
          <strong>Name:</strong> {artist.name}
        </p>
        <p className="text-pink-600">
          <strong>Genres</strong> {artist.genres[0]}
        </p>
        <p className="text-pink-600">
          <strong>Popularity:</strong> {artist.popularity}
        </p>
        <p className="text-pink-600">
          <strong>Followers:</strong> {artist.followers.total}
        </p>
        <p className="text-pink-600">
          <a
            href={artist.href}
            className="text-blue-500 underline"
            target="_blank"
          >
            Link to profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default ConnectAccountSection;
