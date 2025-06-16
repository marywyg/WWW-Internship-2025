import ConnectAccountSection from "../components/connectAccount/ConnectAccountSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center min-h-screen bg-linear-200 from-pink-500 to-pink-100">
      <ConnectAccountSection />
      <div className="flex flex-row gap-4">
        <Link
          href="/search"
          className="mt-4 rounded-2xl p-4 bg-pink-800 text-white font-medium"
        >
          Go to page (Client)
        </Link>
        <Link
          href="/search"
          className="mt-4 rounded-2xl p-4 bg-pink-600 text-white font-medium"
        >
          Go to page (Server)
        </Link>
      </div>
    </main>
  );
}
