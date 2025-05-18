import { useSession } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center mt-10">
      <h1 className="text-xl font-bold">Protected Page</h1>
      <p>
        {session
          ? `Welcome, ${session.user?.email}!`
          : "Not signed in (should redirect to /auth/signin)"}
      </p>
    </main>
  );
}