"use client";

import React from "react";

const PlaylistFormButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 cursor-pointer"
    >
      Save Changes
    </button>
  );
};

export default PlaylistFormButton;
