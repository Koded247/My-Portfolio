import React from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
   <nav className='h-20 w-screen my-0 mx-auto py-4 px-8 flex items-center justify-between sticky top-0 z-10 max-w-6xl'>
    <img className='size-20 object-cover ' src= {logo} alt="logo" />
    <div className=" cursor-pointer flex gap-4">
    <Link className=''>Home</Link>
    <Link>About</Link>
    <Link>Portfolio</Link>
    <Link>Clients</Link>
    
    </div>
    <button className='destopMenuBtn bg-white text-black p-2 '>
      <img src="" alt="" /> Contact Me</button>
   </nav>

  )
}

export default Navbar;
