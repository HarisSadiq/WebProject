import React, { useState } from 'react';
import { loginUser } from '../../Service/api';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/')
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
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
        const response = await loginUser({ email, password });
        console.log('Login successful:', response);
        navigate('/home');  // Navigate to home page on successful login
      } catch (error) {
        console.log('Error logging in:', error);
      }
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
            <button type="submit" className="button">
              Login
            </button>
            <button type="submit" className="button" onClick={handleClick}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
