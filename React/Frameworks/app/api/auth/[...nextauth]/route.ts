import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string
    refreshToken?: string
    expiresAt?: number
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: {
        params: {
          scope:
            "user-follow-read user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-recently-played",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.expiresAt = account.expires_at
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        ...token,
      }
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
