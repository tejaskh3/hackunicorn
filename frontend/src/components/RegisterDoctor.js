import React, { useState } from 'react';
import axios from 'axios';

export const RegisterDoctor = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    specialization: '',
    licenseNumber: '',
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
      .post('http://localhost:8080/api/v1/register/doctor', user)
      .then((response) => {
        console.log(response.data);
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
        backgroundColor: '#333230',

        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register Doctor</h2>
        <form onSubmit={handleSubmit} style={{padding:'10px' }}>
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

          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            name="specialization"
            value={user.specialization}
            onChange={handleInputChange}
            style={{ marginBottom: '10px', width: '96%', padding: '5px' }}
          />

          <label htmlFor="licenseNumber">License Number</label>
          <input
            type="text"
            name="licenseNumber"
            value={user.licenseNumber}
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

          <button type="submit" style={{ width: '80%', padding: '10px', marginLeft:'30px',backgroundColor: '#2196F3', color: '#fff', borderRadius: '4px' }}>Register</button>
        </form>
      </div>
    </div>
  );
};
