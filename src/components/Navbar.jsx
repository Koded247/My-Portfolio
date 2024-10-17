import React from 'react';
import logo from '../assets/logo.jpg';


const Navbar = () => {
  return (
   <nav>
    <img src= {logo} alt="logo" />
    <div className="destopMenu">

    </div>
    <button className='destopMenuBtn'>
      <img src="" alt="" /> Contact Me</button>
   </nav>

  )
}

export default Navbar;
