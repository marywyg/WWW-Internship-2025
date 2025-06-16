import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { TrackList } from "@/components/recently-played/TrackList"
import { ErrorState } from "@/components/recently-played/ErrorState"
import { AuthState } from "@/components/recently-played/AuthState"
import { getRecentlyPlayed } from "@/app/lib/spotify"

export default async function RecentlyPlayedPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return <AuthState />
  }

  if (!session.accessToken) {
    return <ErrorState message="Not authenticated" />
  }

  try {
    const tracks = await getRecentlyPlayed(session.accessToken)
    return <TrackList tracks={tracks} />
  } catch (error) {
    return (
      <ErrorState
        message={error instanceof Error ? error.message : "An error occurred"}
      />
    )
  }
}
