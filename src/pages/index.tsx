import { User } from '@prisma/client';
import { GetStaticProps } from 'next';
import { getUsers } from '../services/users';

export default function Home({ users }: { users: User[] }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers();

  console.log(users);

  return {
    props: { users },
    revalidate: 5,
  };
};
