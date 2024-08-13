import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css'; // Import the CSS file for styling

const api = "your_api_endpoint_here"; // Replace with your actual API endpoint

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  const signup = async () => {
    try {
      const response = await axios.post(api + "/signup", { email, name, mobile, password });
      if (response.data.message) {
        console.log(response?.data?.values);
        alert(response.data.message);
        navigate('/home1'); // Redirect to home page on successful signup
      } else {
        alert(response.data.error);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-heading">Create Your Account</h2>
        <div className="signup-form">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            onChange={(e) => setMobile(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signup} className="signup-button">Sign Up</button>
        </div>
        <p className="signin-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};
