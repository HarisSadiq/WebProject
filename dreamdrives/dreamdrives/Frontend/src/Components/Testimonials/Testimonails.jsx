import React from 'react'
import './Testimonials.css'
import { useState } from 'react'
var text=['It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine could you be mine its a neighborly day in this beautywood It is a beautiful day in this neighborhood a beautiful day.','t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'];
const Testimonails = () => {
    const [Stext,setText]=useState(text[0]);
    const handleClick=(index)=>{
        setText(text[index]);
    }

  return (
    
    <div className='testimonials'>
        <h1>Testimonials</h1>
        <p>"{Stext}"</p>
        <p className='P'>
        {
            text.map((elem,ind)=>{
                return(
                    <h1 key={ind} onClick={()=> handleClick(ind)}>.</h1>
                )
 } )
            
        }
        </p>
      
    </div>
  )
}

export default Testimonails
