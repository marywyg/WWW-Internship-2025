"use client";

import React, { useEffect } from "react";
import SearchHeader from "@/components/header/Header";
import ArtistsSection from "@/components/artistsSearch/ArtistsSection";

const SearchPage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (!code) return;

    const codeVerifier = localStorage.getItem("code_verifier");
    if (!codeVerifier) return;

    const fetchToken = async () => {
      const body = new URLSearchParams({
        client_id: "a4a7dcd8e9294d969c3b5ce61dc771bf",
        grant_type: "authorization_code",
        code,
        redirect_uri: "http://127.0.0.1:3000/search",
        code_verifier: codeVerifier,
      });

      const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      const tokenData = await res.json();
      if (tokenData.access_token) {
        localStorage.setItem("access_token", tokenData.access_token);
      } else {
        console.error("Failed to fetch access token", tokenData);
      }
    };

    fetchToken();
  }, []);

  return (
    <>
      <SearchHeader />
      <ArtistsSection />
    </>
  );
};

export default SearchPage;
