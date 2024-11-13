import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export const PatientProfile = () => {
  const { id } = useParams();
  const [patient, setPatient] = React.useState({
    name: "",
    age: 0,
    walletAddress: "",
  });

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/patient/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch patient data');
        }
        const data = await response.json();
        setPatient(data.patient);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatientData();
  }, [id]);

  const handleAddRecord = () => {
    // Add record logic
  };

  const handleViewRecord = () => {
    // View record logic
  };

  const handleGrantAccess = () => {
    // Grant access logic
  };
  console.log(patient);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Profile
          </Typography>
          <Typography variant="subtitle1" sx={{ mr: 2 }}>
            {patient.name}
          </Typography>
          <Typography variant="subtitle2" sx={{ mr: 2 }}>
            Age: {patient.age}
          </Typography>
          <Typography variant="subtitle2">
            Your Secret Key: {patient.secretKey}
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

