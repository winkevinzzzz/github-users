import React from 'react';
import UserCard from './UserCard';
import Navbar from './Navbar';
import useUsers from '../hooks/useUsers';

const UserList: React.FC = () => {
  const { filteredUsers, setSearchTerm } = useUsers();

  return (
    <div>
      <Navbar onSearch={setSearchTerm} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredUsers.map(user => (
          <UserCard
            key={user.login}
            avatar_url={user.avatar_url}
            name={user.name || user.login}
            company={user.company || 'No company'}
            followers={user.followers}
            following={user.following}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;