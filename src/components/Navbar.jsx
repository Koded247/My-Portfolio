import React from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
   <nav className='h-20 w-screen my-0 mx-auto py-4 px-8 flex items-center justify-between sticky top-0 z-10 max-w-6xl'>
    <img className='size-20' src= {logo} alt="logo" />
    <div className="destopMenu">
    <Link>Home</Link>
    <Link>About</Link>
    <Link>Portfolio</Link>
    <Link>Client</Link>
    
    </div>
    <button className='destopMenuBtn'>
      <img src="" alt="" /> Contact Me</button>
   </nav>

  )
}

export default Navbar;
