import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserCard } from '../organisms/user/UserCard';

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  useEffect(() => getUsers(), [getUsers]);

  return (
    <>
      {loading ? (
        <Center h='100vh'>
          <Spinner color='teal.200' />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users?.map((user) => (
            <WrapItem key={user.id} mx='auto'>
              <UserCard
                imageUrl='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
UserManagement.displayName = 'UserManagement';
