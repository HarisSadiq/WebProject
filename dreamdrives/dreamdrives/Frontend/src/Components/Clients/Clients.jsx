import React from 'react'
import './Clients.css'
import img1 from './counter-1.png'
import img2 from './counter-2.png'
import img3 from './counter-3.png'
import img4 from './counter-4.png'
import Countup from 'react-countup'


const Clients = () => {
  return (
    <div className='background'>

<div className='client'>

<img src={img1} alt="" />
<h1><Countup  start={0} end={2500} duration={4} delay={1}/>+</h1>
<h2>Happy Clients</h2>
</div>
<div className='cup'>
<img src={img2} alt="" />
<h1><Countup  start={0} end={350} duration={4} delay={1}/>+</h1>

<h2>
    Coffee Cups
</h2>
</div>
<div className='branch'>
<img src={img3} alt="" />
<h1><Countup  start={0} end={50} duration={4} delay={1}/>+</h1>

<h2>
    Branches
</h2>

</div>
<div className='emp'>
<img src={img4} alt="" />
<h1><Countup  start={0} end={340} duration={4} delay={1}/>+</h1>

<h2>
Employees            </h2>
</div>


 </div>
        
   
  )
}

export default Clients
