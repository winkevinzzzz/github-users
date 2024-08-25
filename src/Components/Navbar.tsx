import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

interface NavbarProps {
  onSearch: (searchTerm: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^[a-zA-Z]*$/.test(value)) {
      onSearch(value);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GitHub User
        </Typography>
        <Box >
          <input
            type="text"
            aria-label="Search Users"
            onChange={handleChange}
            style={{
              margin: '8px',
              minWidth: '200px',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid rgba(0, 0, 0, 0.23)'
            }}
            placeholder="Search by name or company"
            pattern="[a-zA-Z]*"
            title="Only letters are allowed"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;