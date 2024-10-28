import React, { useState } from 'react';
import logo from '../assets/kodedLogo.png';
import { Link } from 'react-scroll';
import { MessageSquareQuote, Menu, MailCheck } from 'lucide-react';
import Intro from './Intro';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <nav className='h-20 w-screen my-0 mx-auto py-4 px-8 flex items-center justify-between sticky top-0 z-10 max-w-screen-1xl bg-gray-600 shadow-md'>
      {/* Logo */}
      <img className='w-18 h-14 object-cover rounded ' src={logo} alt="logo" />

      {/* Menu Button for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
          <Menu className="h-8 w-8" />
        </button>
      </div>

      {/* Links and Contact Me Button (hidden on small screens) */}
      <div className={`flex-col md:flex-row md:flex gap-4 items-center absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-gray-600 md:bg-transparent p-4 md:p-0 md:opacity-100 transition-all ${menuOpen? 'opacity-100' : 'opacity-0 hidden md:flex'}`}>
        <Link to="Home" 
          smooth={true} 
          spy={true}
          offset={-100}
          duration={500}
          activeClass="text-yellow-500 border-b-4 border-yellow-500" 
          className='hover:text-yellow-300  hover:border-b-4 cursor-pointer mr-4   '>Home</Link>
        <Link to="about" 
          smooth={true} 
          spy={true} 
          offset={-50}
          duration={500}
          activeClass="text-yellow-500 border-b-4 border-yellow-500"
           className='hover:text-yellow-300  hover:border-b-4 cursor-pointer mr-4 '>About</Link>
        <Link to="home" 
          smooth={true} 
          spy={true}
          offset={-50}
          duration={500} 
          activeClass="text-yellow-500 border-b-4 border-yellow-500"
           className='hover:text-yellow-300  hover:border-b-4 cursor-pointer mr-4 '>Portfolio</Link>
        <Link to="client" 
          smooth={true} 
          spy={true}
          offset={-50}
          duration={500} 
          activeClass="text-yellow-500 border-b-4 border-yellow-500" 
          className='hover:text-yellow-300  hover:border-b-4 cursor-pointer mr-4 '>Clients</Link>

      </div>
        {/* Contact Me Button */}
        <button 
           className='bg-gray-300 text-sm text-black font-medium p-3 border-none rounded-3xl flex justify-center items-center gap-2 mt-4 md:mt-0'
           onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'} );
           }}>
          <MailCheck /> Contact Me
        </button>
    </nav>
  );
};

export default Navbar;
