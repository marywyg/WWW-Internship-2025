"use client";

import React, { useState } from "react";
import PlaylistFormButton from "./PlaylistFormButton";

const PlaylistForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting playlist:", { name, description });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md border p-3 rounded shadow-sm bg-pink-50"
    >
      <label className="text-pink-500">
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="w-full p-2 border rounded text-pink-500"
          required
        />
      </label>
      <label className="text-pink-500">
        Description:
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
          className="w-full p-2 border rounded text-pink-500"
          rows={3}
        />
      </label>
      <PlaylistFormButton />
    </form>
  );
};

export default PlaylistForm;
