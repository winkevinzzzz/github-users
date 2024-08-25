import { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../types/User';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        const userList = response.data;

        const userDetailPromises = userList.map((user: any) =>
          axios.get(user.url).then((res) => res.data)
        );

        const detailedUsers = await Promise.all(userDetailPromises);

        const usersWithDetails: User[] = detailedUsers.map((user: any) => ({
          login: user.login,
          avatar_url: user.avatar_url,
          name: user.name,
          company: user.company || 'No company',
          followers: user.followers,
          following: user.following,
        }));

        const limitedUsers = usersWithDetails.slice(0, 25);

        setUsers(limitedUsers);
        setFilteredUsers(limitedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        (user.name ? user.name.toLowerCase().includes(searchTerm.toLowerCase()) : false) ||
        (user.company ? user.company.toLowerCase().includes(searchTerm.toLowerCase()) : false) ||
        user.login.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  return { filteredUsers, setSearchTerm };
};

export default useUsers;