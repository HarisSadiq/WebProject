import React, { useState } from 'react';
import { registerUser } from '../../Service/api';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/loginc')
  }
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!fullName) {
      errors.fullName = 'Full name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      try {
        const response = await registerUser({ fullName, email, username, password });
        console.log('Registration successful:', response);
        navigate('/loginc')
      } catch (error) {
        console.log('Error registering user:', error);
      }
    }
  };

  return (
    <div className='Background'>
      <div className="login-container">
        <div className="login-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
            />
            {errors.fullName && <div className="error">{errors.fullName}</div>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            {errors.username && <div className="error">{errors.username}</div>}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
            <button type="submit" className="button">
              
              Sign Up
            </button>
            <p>Already account exist</p>
            <button type="submit" className="button" onClick={handleClick}>
              
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
