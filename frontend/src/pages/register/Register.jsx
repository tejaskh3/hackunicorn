import React, { useState, useEffect } from 'react';
import {
  Card,
  Typography,
  Radio,
  Stack,
  Box,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  TextField
} from '@mui/material';
import { RegisterPatient} from '../../components/RegisterPateinet';
import { RegisterDoctor } from '../../components/RegisterDoctor';
import main from './images/Sprints1.jpg';
import doc from './images/doc.jpg';
import patient from './images/patient.jpg';
function Register({ contract }) {
  const [opt, setOpt] = useState(null);
  const [user, setUser] = useState('');
  const [pname, setPname] = useState('');
  const [page, setPage] = useState('');
  const [dname, setDname] = useState('');
  const [dage, setDage] = useState('');
  // const [isPatient, setIspatient] = useState(true);
  const registerAsP = async e => {
    setOpt('P');
    setUser('Patient');
    console.log(opt);
  };
  const registerAsD = e => {
    setOpt('D');
    setUser('Doctor');

    console.log(opt);
  };

  const add_patient = async e => {
    e.preventDefault();

    // const pname = document.getElementById("pname").value;
    // const page = document.getElementById("page").value;
    // setPname(e.target.value);
    // setPage(e.target.value);
    console.log(pname);
    console.log(page);
    const addingPatient = await contract.add_agent(pname, page, 0);
    console.log('patient added named', pname, 'age:', page);
    window.location.href = '/home';
  };

  const add_doctor = async e => {
    e.preventDefault();
    // setDname(e.target.value);
    // setDage(e.target.value);
    console.log(dname);
    console.log(dage);
    // const dname = document.getElementById("dname").value;
    // const dage = document.getElementById("dage").value;

    const addingDoctor = await contract.add_agent(dname, dage, 1);
    console.log('Doctor added named', dname, 'age:', dage);
    window.location.href = '/home';
  };

  return (
    <>


      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 5, md: 30 }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height:'130vh'
        }}
      >
        <Box
          sx={{
            border: '3px solid gray',
            paddingTop: '2rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            marginLeft: '3rem',
            color:'white',
          boxShadow: '10px 2px 4px rgba(0, 0, 0, 0.1)',

          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: '20px',
              mt: '0',
            color:'white',

            }}
          >
            Choose Account Type
          </Typography>

          <img
            src={doc}
            style={{
              width: '200px',
              height: '200px',
              display: 'inline-block',
              borderRadius: '10%',
              marginRight: '2rem'
            }}
            alt=""
          />

          <img
            src={patient}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '10%',
              display: 'inline-block'
            }}
            alt=""
          />

          <Box
            sx={
              {
                // position:'relative',
              }
            }
          >
            <FormControl>
              {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue="Pateint"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  sx={{
                    marginLeft: '60px'
                  }}
                  // value="female"
                  control={<Radio />}
                  onClick={registerAsD}
                  label="Doctor"
                />

                <FormControlLabel
                  sx={{
                    marginLeft: '110px'
                  }}
                  value="male"
                  control={<Radio />}
                  label="Patient"
                  onClick={registerAsP}
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Typography
            sx={{
              justifyContent: 'right',
              alignItems: 'right',
              marginLeft: '40%'
            }}
          >
            Hello {user}!
          </Typography>
          <Typography
            sx={{
              marginLeft: '10%',
            color:'white',

            }}
          >
            Please fill out this below form to get started.
          </Typography>


        </Box>
        {/* <img
          src={main}
          alt=""
          style={{
            marginTop: '100px'
          }}
        /> */}
        {
          opt==="D"?<RegisterDoctor></RegisterDoctor>:<RegisterPatient></RegisterPatient>
        }
      </Stack>
    </>
  );
}

export default Register;
