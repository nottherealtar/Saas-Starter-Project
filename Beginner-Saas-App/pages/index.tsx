import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@/components/Button';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to your Next.js + TypeScript App!
      </h1>
      {session ? (
        <>
          <p>Hello, {session.user?.name || session.user?.email}!</p>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </>
      ) : (
        <Button onClick={() => signIn()}>Sign In</Button>
      )}
    </main>
  );
}