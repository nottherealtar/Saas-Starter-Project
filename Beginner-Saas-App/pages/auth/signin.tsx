import { getProviders, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";
import Button from "@/components/Button";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

export default function SignIn({ providers }: Props) {
  return (
    <main className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Sign in</h1>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name} className="mb-2">
            <Button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return { props: { providers } };
};