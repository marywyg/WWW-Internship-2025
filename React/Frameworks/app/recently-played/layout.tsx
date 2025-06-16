import Link from "next/link";

export default function RecentlyPlayedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-8 text-pink-500 bg-gradient-to-b from-pink-100 to-pink-500">
      <Link href="/" className="text-pink-500 p-8">
        Back to Home
      </Link>
      {children}
    </div>
  );
}
