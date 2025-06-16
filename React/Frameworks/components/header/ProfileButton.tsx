"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ProfileButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/profile");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-pink-100 text-pink-500 py-2 px-6 rounded-lg cursor-pointer hover:bg-white"
    >
      My Profile
    </button>
  );
};

export default ProfileButton;
