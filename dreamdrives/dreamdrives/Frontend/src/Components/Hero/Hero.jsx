import React from 'react'
import './Hero.css'
import img from '../Hero/background.png'



const Hero = () => {
  return (
    < div className='hero'>

        <img src={img} alt=""  className="Background"/>
        <p className='text'>ITS REAL BATTLE  OF MAKING</p>
        <p className='text1'>LUXURY CARS</p>
        <button className='btn_purchase'>Purchase</button>
        <button className='btn_readmore'>Read More</button>

    </div>
  )
}

export default Hero
