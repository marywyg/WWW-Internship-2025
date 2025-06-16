'use client';

import React from 'react';
import { generateCodeVerifier, generateCodeChallenge } from '../../utils/pkceUtils';

const ConnectAccountButton: React.FC = () => {
  const handleLogin = async () => {
    const clientId = 'a4a7dcd8e9294d969c3b5ce61dc771bf';
    const redirectUri = 'http://127.0.0.1:3000/search';
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    const scope = 'user-read-private user-read-email';

    localStorage.setItem('code_verifier', codeVerifier);

    const args = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    });

    window.location.href = `https://accounts.spotify.com/authorize?${args.toString()}`;
  };

  return (
    <button
      onClick={handleLogin}
      className="p-5 bg-pink-500 rounded-lg cursor-pointer text-pink-100"
    >
      Connect Account
    </button>
  );
};

export default ConnectAccountButton;
