"use client";
import React from "react";
import ConnectAccountButton from "./ConnectAccountButton";
const ConnectAccountSection: React.FC = () => {
  return (
    <section className="text-center bg-pink-50 rounded-2xl m-1 shadow-lg flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-500 p-10 ">
        Connect your Spotify Account
      </h1>
      <ConnectAccountButton />
      <img
        src="/hamster.png"
        alt="Hamster"
        className="w-1/4 h-auto mx-auto mt-10"
      ></img>
      <h3 className="text-2xl text-pink-500">Please?</h3>
      <h6 className=" text-pink-500 p-0.5">
        I can be trusted with your data...
      </h6>
    </section>
  );
};

export default ConnectAccountSection;
