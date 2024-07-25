import React from 'react'
import img from './welcome1.png'
import './welcome.css'

const welcome = () => {
  

  return (
    <div className='welcome'>
      <div className='left'>
<img src={img} alt="" />        
      </div>
      <div className='right'>
        <h1 className='h1'>Welcome to Dreamdrives</h1>
        <p className='p'>It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine
             could you be mine its a neighborly day in this beautywood It is a beautiful day in this 
             neighborhood a beautiful day for a neighbor would you be mine could you be mine its a neighborly
              day in this beautywood is neighborhood a beautiful day for a would you be mine could you be mine its a neighborly day.</p>
<br /><br /><button className='read-more'>Read More </button>
      </div>
    </div>
  );
};

export default welcome;
