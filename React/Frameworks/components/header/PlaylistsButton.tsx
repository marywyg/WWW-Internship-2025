"use client";

import React from "react";
import { useRouter } from "next/navigation";

const PlaylistsButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/playlists");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-pink-500 text-white py-2 px-6 rounded-lg cursor-pointer hover:bg-pink-700"
    >
      Playlists
    </button>
  );
};

export default PlaylistsButton;
