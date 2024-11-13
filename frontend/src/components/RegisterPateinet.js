import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const RegisterPatient = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    age: '',
    sex:'',
    email: '',
    address: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/api/v1/register/patient', user)
      .then((response) => {
        // console.log(response.data.Patient);
        navigate(`/patient/${response.data.Patient._id}`);
      })
      .catch((error) => {
        console.error(error);
        console.error(error.message);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'20px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          width: '600px',
          padding: 'px',
          borderRadius: '8px',
          backgroundColor: '#fff',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f6f2ef',
        marginBottom:'10px'

        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register Patient</h2>

        <form onSubmit={handleSubmit} style={{padding:'10px' , marginBottom:'30px'}}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            style={{ marginBottom: '10px', width: '96%', padding: '5px'}}
          />

          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            value={user.age}
            onChange={handleInputChange}
            style={{ marginBottom: '10px', width: '96%', padding: '5px' }}
          />

          <label htmlFor="sex">Sex</label>
          <input
            type="text"
            name="sex"
            value={user.specialization}
            onChange={handleInputChange}
            style={{ marginBottom: '10px', width: '96%', padding: '5px' }}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            style={{ marginBottom: '10px', width: '96%', padding: '5px' }}
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleInputChange}
            style={{ marginBottom: '10px', width: '96%', padding: '5px' }}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            style={{ marginBottom: '10px', width: '96%', padding: '5px' }}
          />

          <button type="submit" style={{ width: '80%', padding: '10px', marginLeft:'30px',backgroundColor: '#eba10e', color: '#fff', borderRadius: '4px' }}>Register</button>
        </form>
      </div>
    </div>
  );
};
