import React from 'react'
import './choseus.css'
import img from './MONEYICON.png'
import bg from './whyus-bg.jpg'
const choseus = () => {
  return (
    <div className='TOP' >
         <h1>Why chose us?</h1>

        <div className='choseus'>
       
      
        <div className='left'>
            <div className='abc'>   <img src={img} alt="" className='img'/>
      <h2>FINANCING MADE EASY</h2>
      </div>
      <p>It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine.</p>
      <div className='abc'>   <img src={img} alt="" className='img'/>
      <h2>TRUSTED BY THOUSANDS</h2></div>
      <p>It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine.</p>
      <div className='abc'>   <img src={img} alt="" className='img'/><h2>GREAT SERVICE & MAINTAINENCE</h2></div>
      <p>It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine.</p>

      
      </div>
      <div className='right'>
      <div className='abc'>   <img src={img} alt="" className='img'/><h2>WIDE RANGE OF BRANDS</h2></div>
      <p>It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine.</p>
      <div className='abc'>   <img src={img} alt="" className='img'/><h2>ACCESSORIES INSTALLATION</h2></div>
      <p>It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine.</p>
      <div className='abc'>   <img src={img} alt="" className='img'/><h2>24/7 CUSTOMER SUPPORT</h2></div>
      <p>It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine.</p>

          
        
      </div>
      </div>
      <img src={bg} alt="" className='bg' />
    </div>
  )
}

export default choseus
