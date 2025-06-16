"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface RedirectButtonProps {
  redirectUrl: string;
  text: string;
  className?: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({
  redirectUrl,
  text,
  className = "",
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(redirectUrl);
  };
  return (
    <button
      onClick={handleClick}
      className={`py-2 px-6 rounded-lg cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default RedirectButton;
