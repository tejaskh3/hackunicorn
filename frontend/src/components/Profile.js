
import React from 'react';
import { AppBar, Toolbar, Typography, Button,Box } from '@mui/material';

export const Profile = () => {
  const user = {
    name: 'John Doe',
    age: 30,
    walletAddress: '0x1234567890abcdef',
  };

  const handleAddRecord = () => {
    // Add record logic
  };

  const handleViewRecord = () => {
    // View record logic
  };

  const handleGrantAccess = () => {
    // Grant access logic
  };

  return (
    <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Profile
        </Typography>
        <Typography variant="subtitle1" sx={{ mr: 2 }}>
          {user.name}
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2 }}>
          Age: {user.age}
        </Typography>
        <Typography variant="subtitle2">
          Wallet Address: {user.walletAddress}
        </Typography>
      </Toolbar>
    </AppBar>

    <Box display="flex" justifyContent="center" mt={2}>
      <Button variant="contained" onClick={handleAddRecord} href="/home/upload" sx={{ marginRight: 1 }}>
        Add Record
      </Button>
      <Button variant="contained" onClick={handleViewRecord} href="/home/record" sx={{ marginRight: 1 }}>
        View Records
      </Button>
      <Button variant="contained" onClick={handleGrantAccess}>
        Grant Access
      </Button>
    </Box>

    {/* Rest of the profile page content */}
  </div>
  );
};

