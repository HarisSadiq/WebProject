import React from "react";
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
    const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  return (
    <div className="Navbar">
      <h1 className="logo">DreamDrives</h1>
      <ul className="menu">
        <li>
          <Link to={'/home'} className="link">
          Home
          </Link>
          </li>
        <li> <Link to={'/new-car'}className="link"> New Cars </Link></li>
        <li> <Link to={'/used-car'}className="link"> Used Cars </Link></li>
        <li> <Link to={'/new-bike'}className="link"> New Bikes </Link></li>
        <li> <Link to={'/used-bike'}className="link"> Used Bikes </Link></li>

      </ul>
      <div>
        <button className="btn_login" onClick={handleLoginClick}>Login</button>
        <button className="btn_signup" onClick={handleSignUpClick}>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
