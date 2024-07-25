import React from 'react'
import SignUpComponent from '../../Components/SignUp/signup'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from'./../../Components/Footer/Footer.jsx';


export default function Signup() {
  return (
    <div>
      <Navbar/>

      <SignUpComponent/>
      <Footer/>
    </div>
  )
}
