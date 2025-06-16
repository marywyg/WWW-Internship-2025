"use client";

import React from "react";
import PlaylistFormButton from "./PlaylistFormButton";

interface PlaylistFormProps {
  name: string;
  description: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const PlaylistForm: React.FC<PlaylistFormProps> = ({
  name,
  description,
  onChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 max-w-md border p-3 rounded shadow-sm bg-pink-50"
    >
      <label className="text-pink-500">
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          className="w-full p-2 border rounded text-pink-500"
          required
        />
      </label>
      <label className="text-pink-500">
        Description:
        <textarea
          name="description"
          value={description}
          onChange={onChange}
          className="w-full p-2 border rounded text-pink-500"
          rows={3}
        />
      </label>
      <PlaylistFormButton />
    </form>
  );
};

export default PlaylistForm;
