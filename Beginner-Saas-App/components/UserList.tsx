import { useQuery } from '@tanstack/react-query';

async function fetchUsers() {
  const res = await fetch('/api/user');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default function UserList() {
  const { data, isLoading, error } = useQuery(['users'], fetchUsers);

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <ul>
      {data?.map((user: any) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
}