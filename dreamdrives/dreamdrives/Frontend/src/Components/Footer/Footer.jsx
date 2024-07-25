import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";




const Footer = () => {
  return (
   <div className='footer'>
    <h1 style={{color:'white'}}> DreamDrives</h1>
    <ul className="list">
        
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
      <div className='botom'>
        All Rights Reserved
        <p>
          Created by    Haris Sadiq | Aarij-ul-Hassan | Sufyan Riaz
        </p>

      </div>
   
      </div>

  )
}

export default Footer
