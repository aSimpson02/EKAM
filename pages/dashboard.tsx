import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status]);

  if (status === "loading") return <p className="text-white">Loading...</p>;

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome, {session?.user?.name || "User"}</h1>
      <p className="text-gray-400">This is your dashboard. You can manage your purchases, submissions, or profile here.</p>
    </div>
  );
}
