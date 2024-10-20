import React from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-scroll';
import { MessageSquareQuote } from 'lucide-react';


const Navbar = () => {
  return (
   <nav className='h-20 w-screen my-0 mx-auto py-4 px-8 flex items-center justify-between sticky top-0 z-10 max-w-6xl'>
    <img className='size-20 object-cover ' src= {logo} alt="logo" />
    <div className=" cursor-pointer flex gap-4">
    <Link className=' hover:text-yellow-300 hover:pb-2 hover:border-b-4 '>Home</Link>
    <Link className=' hover:text-yellow-300 hover:pb-2 hover:border-b-4 '>About</Link>
    <Link className=' hover:text-yellow-300 hover:pb-2 hover:border-b-4 '>Portfolio</Link>
    <Link className=' hover:text-yellow-300 hover:pb-2 hover:border-b-4 '>Clients</Link>
    
    </div>
    <button className='destopMenuBtn bg-white text-sm text-black p-3 border-none rounded-3xl flex justify-center items-center gap-2 '>
    <MessageSquareQuote />  Contact Me</button>
   </nav>

  )
}

export default Navbar;
