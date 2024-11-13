import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const RegisterDoctor = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    age: '',
    specialization: '',
    licenseNumber: '',
    email: '',
    address: '',
    password: ''
  });

  const handleInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/api/v1/register/doctor', user)
      .then(response => {
        console.log(response.data);
        navigate(`/doctor/${response.data.Doctor._id}`);
      })
      .catch(error => {
        console.error(error);
        console.error(error.message);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        padding: '40px 20px'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          borderRadius: '16px',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
          padding: '32px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '24px',
            fontSize: '1.8rem',
            color: '#1a365d',
            fontWeight: '700',
            letterSpacing: '-0.5px',
            wordBreak: 'break-word',
            whiteSpace: 'nowrap'
          }}
        >
          Doctor Registration
        </h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="name" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1.5px solid #e2e8f0',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s',
                  outline: 'none',
                  backgroundColor: '#f8fafc',
                  '&:focus': {
                    borderColor: '#3182ce',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.1)'
                  }
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="age" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>
                Age
              </label>
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleInputChange}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1.5px solid #e2e8f0',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s',
                  outline: 'none',
                  backgroundColor: '#f8fafc',
                  '&:focus': {
                    borderColor: '#3182ce',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.1)'
                  }
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="specialization" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>
              Specialization
            </label>
            <input
              type="text"
              name="specialization"
              value={user.specialization}
              onChange={handleInputChange}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1.5px solid #e2e8f0',
                fontSize: '0.95rem',
                transition: 'all 0.2s',
                outline: 'none',
                backgroundColor: '#f8fafc',
                '&:focus': {
                  borderColor: '#3182ce',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.1)'
                }
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="licenseNumber" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>
              License Number
            </label>
            <input
              type="text"
              name="licenseNumber"
              value={user.licenseNumber}
              onChange={handleInputChange}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1.5px solid #e2e8f0',
                fontSize: '0.95rem',
                transition: 'all 0.2s',
                outline: 'none',
                backgroundColor: '#f8fafc',
                '&:focus': {
                  borderColor: '#3182ce',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.1)'
                }
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>
              Email
            </label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1.5px solid #e2e8f0',
                fontSize: '0.95rem',
                transition: 'all 0.2s',
                outline: 'none',
                backgroundColor: '#f8fafc',
                '&:focus': {
                  borderColor: '#3182ce',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.1)'
                }
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="address" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>
              Address
            </label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleInputChange}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1.5px solid #e2e8f0',
                fontSize: '0.95rem',
                transition: 'all 0.2s',
                outline: 'none',
                backgroundColor: '#f8fafc',
                '&:focus': {
                  borderColor: '#3182ce',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.1)'
                }
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1.5px solid #e2e8f0',
                fontSize: '0.95rem',
                transition: 'all 0.2s',
                outline: 'none',
                backgroundColor: '#f8fafc',
                '&:focus': {
                  borderColor: '#3182ce',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.1)'
                }
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              marginTop: '8px',
              backgroundColor: '#3182ce',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              '&:hover': {
                backgroundColor: '#2c5282',
                transform: 'translateY(-1px)'
              }
            }}
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
};
