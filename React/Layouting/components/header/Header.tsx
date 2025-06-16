"use client";

import React from "react";
import Button from "./HeaderButton";
const SearchHeader: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-2.5 px-5 border-b border-gray-300 bg-gradient-to-l from-pink-500 to-pink-100">
      <div className="flex gap-2.5">
        <Button
          redirectUrl="/search"
          text="Artists"
          className="bg-pink-500 text-white hover:bg-pink-700"
        />
        <Button
          redirectUrl="/playlists"
          text="Playlists"
          className="bg-pink-500 text-white hover:bg-pink-700"
        />
      </div>
      <div className="flex items-center">
        <Button
          redirectUrl="/profile"
          text="Your profile"
          className="bg-pink-100 text-pink-500 hover:bg-white"
        />
      </div>
    </header>
  );
};
export default SearchHeader;
