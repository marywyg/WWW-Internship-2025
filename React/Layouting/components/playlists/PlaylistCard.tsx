"use client";

import React, { useState } from "react";
import PlaylistForm from "./PlaylistForm";

interface Playlist {
  id: string;
  name: string;
  description: string;
  images: { url: string }[];
}

const PlaylistCard: React.FC<{ playlist: Playlist }> = ({ playlist }) => {
  const [formData, setFormData] = useState({
    name: playlist.name,
    description: playlist.description,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Saved changes locally: ${playlist.id}:`, formData);
    setIsEditing(false);
  };

  return (
    <div className="p-4 border rounded shadow bg-white">
      <img
        src={playlist.images[0]?.url}
        alt={playlist.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{formData.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{formData.description}</p>

      {!isEditing ? (
        <button
          onClick={() => setIsEditing(true)}
          className="text-sm text-pink-600 hover:underline mt-2 cursor-pointer"
        >
          Edit playlist
        </button>
      ) : (
        <div className="mt-4">
          <h4 className="font-medium text-pink-600">Edit playlist</h4>
          <PlaylistForm
            name={formData.name}
            description={formData.description}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <button
            onClick={() => setIsEditing(false)}
            type="button"
            className="mt-2 text-sm text-gray-500 hover:underline cursor-pointer"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default PlaylistCard;
