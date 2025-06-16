export interface Track {
  track: {
    name: string
    artists: { name: string }[]
    album: {
      name: string
      images: { url: string }[]
    }
  }
  played_at: string
}
export interface User {
    display_name: string;
    email: string;
    external_urls: { spotify: string };
    product: string;
    images: { url: string }[];
    country: string;
    followers: { href: string; total: number; };
};
export interface Artist{
  followers: { href: string; total: number };
  genres: string[];
  href: string;
  images: { url: string }[];
  name: string;
  popularity: number;
  external_urls: { spotify: string };
};
export async function useSpotifySearch(query: string, accessToken: string) {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      query
    )}&type=artist&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch data from Spotify API")
  }

  const data = await response.json()
  return data.artists.items as Artist[]
}
export async function getFollowedArtists(accessToken: string) {
  const response = await fetch(
    "https://api.spotify.com/v1/me/following?type=artist&limit=20",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch followed artists")
  }

  const data = await response.json()
  return data.artists.items as Artist[]
}
export async function getUserProfile(accessToken: string) {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch user profile")
  }

  const data = await response.json()
  return data as User
}
export async function getRecentlyPlayed(accessToken: string) {
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=50",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch recently played songs")
  }

  const data = await response.json()
  return data.items as Track[]
}
