import axios from "axios";
import React, { useState } from "react";
import "../index.css";
export const RegisterUser = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // const axiosInstance = axios.create({
  //   baseURL: 'http://localhost:8080/api/v1', // Replace with your backend URL
  // });
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend using the custom Axios instance
    axios
      .post("http://localhost:8080/api/v1/register/user", user)
      .then((response) => {
        console.log(response.data); // Handle success response
        // Reset the form or perform any other necessary actions
      })
      .catch((error) => {
        console.error(error); // Handle error response
        console.error(error.message);
      });
  };

  return (
    <div className="register-user">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
