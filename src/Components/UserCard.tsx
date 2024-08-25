import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

interface UserCardProps {
  avatar_url: string;
  name: string;
  company: string;
  followers: number;
  following: number;
}

const UserCard: React.FC<UserCardProps> = ({ avatar_url, name, company, followers, following }) => {
  return (
    <Card
  style={{ width: 345,margin: '16px auto',padding:'5px', border: 'solid #000', borderRadius: '6px',
  }}
>
      <Avatar src={avatar_url} alt={name} style={{ width: 100, height: 100, margin: 'auto' }} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company || 'No company'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Followers: {followers}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Following: {following}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;