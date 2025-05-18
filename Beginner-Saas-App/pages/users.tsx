import UserList from "@/components/UserList";

export default function UsersPage() {
  return (
    <main className="flex flex-col items-center mt-10">
      <h1 className="text-xl font-bold mb-4">User List</h1>
      <UserList />
    </main>
  );
}