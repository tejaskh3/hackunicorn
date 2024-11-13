import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box ,Card,CardContent} from '@mui/material';

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

      <Box>
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

        <Box display="flex" justifyContent="center" mt={4} gap={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cancer Report
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date: 20 June 2023
                <br />
                Doctor: Dr. Anderson
                <br />
                Status: Under Review
                <br />
                Location: Oncology Department
                <br />
                Type: Follow-up Assessment
                <br />
                Conclusion: Stage 2 Breast Cancer, 
                recommended chemotherapy treatment
                <br /><br />
                Files Attached: 3
                <br />
                📕 cancer_report.pdf
                <br />
                📕 blood_work.pdf 
                <br />
                📕 scan_results.pdf
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MRI Scan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date: 15 June 2023
                <br />
                Doctor: Dr. Wilson
                <br />
                Status: Complete
                <br />
                Location: Radiology Department
                <br />
                Type: Diagnostic Imaging
                <br />
                Conclusion: No significant abnormalities 
                detected in brain structure
                <br /><br />
                Files Attached: 2
                <br />
                📕 brain_mri.pdf
                <br />
                📕 radiologist_notes.pdf
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Treatment Plan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date: 10 June 2023
                <br />
                Doctor: Dr. Thompson
                <br />
                Status: In Progress
                <br />
                Location: Medical Oncology
                <br />
                Type: Treatment Protocol
                <br />
                Conclusion: 6-month chemotherapy plan with 
                regular monitoring and follow-ups
                <br /><br />
                Files Attached: 2
                <br />
                📕 treatment_schedule.pdf
                <br />
                📕 medication_list.pdf
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

