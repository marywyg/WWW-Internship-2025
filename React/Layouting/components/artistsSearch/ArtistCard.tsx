"use client";
import React from "react";
import Image from "next/image";
interface Artist {
  followers: { href: string; total: number };
  genres: string[];
  href: string;
  images: { url: string }[];
  name: string;
  popularity: number;
}
interface Props {
  artist: Artist;
}
const ArtistCard: React.FC<Props> = ({ artist }) => {
  return (
    <section className="relative">
      <div className="max-w-xl mx-auto mt-5 p-6 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">{artist.name}</h1>
        {artist.images?.[0]?.url && (
          <Image
            src={artist.images[0].url}
            alt={"${artist.name} image"}
            className="w-32 h-32 rounded-full mx-auto mb-4"
            width={200}
            height={200}
          />
        )}
        <div className="text-pink-600">
          <span className="font-bold">Genre: </span> {artist.genres[0]} <br />
          <span className="font-bold">Popularity:</span> {artist.popularity}
          <br />
          <span className="font-bold">Followers:</span> {artist.followers.total}
          <br />
          <a
            href={artist.href}
            className="text-blue-500 underline"
            target="_blank"
          >
            Link to profile
          </a>
        </div>
      </div>
    </section>
  );
};
export default ArtistCard;
