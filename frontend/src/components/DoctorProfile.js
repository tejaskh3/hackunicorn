import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useParams } from 'react-router-dom';

export const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({
    name: "",
    age: 0,
    walletAddress: "",
  });

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/patient/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch doctor details');
        }
        const data = await response.json();
        setDoctor(data.doctor);
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };

    fetchDoctorDetails();
  }, []);

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
            {doctor.name}
          </Typography>
          <Typography variant="subtitle2" sx={{ mr: 2 }}>
            Age: {doctor.age}
          </Typography>
          <Typography variant="subtitle2">
            Wallet Address: {doctor.walletAddress}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          variant="contained"
          onClick={handleAddRecord}
          href="/home/upload"
          sx={{ marginRight: 1 }}
        >
          Add Record
        </Button>
        <Button
          variant="contained"
          onClick={handleViewRecord}
          href="/home/record"
          sx={{ marginRight: 1 }}
        >
          View Records
        </Button>
        <Button variant="contained" onClick={handleGrantAccess}>
          Grant Access
        </Button>
      </Box>

    </div>
  );
};
