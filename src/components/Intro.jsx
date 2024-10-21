import React from 'react';
import bg from '../assets/profile.jpeg';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section className='w-screen max-w-6xl mx-auto my-auto h-screen flex items-center justify-between p-8'>
      {/* Left Side - Text */}
      <div className='flex flex-col justify-center gap-4 w-1/2'>
        <span className='text-5xl font-semibold'>Hello,</span>
        <span className='text-5xl'>I'm</span><span className='text-5xl font-bold text-yellow-600' >Akorede</span>
        <span className='text-5xl'>Website Designer</span>
        <p className='text-lg'>
          I am a skilled web designer with experience in creating <br /> visually appealing and user friendly website.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className='bg-gray-900 text-white py-2 px-4 rounded hover:bg-yellow-600 transition'>
            Hire me
          </button>
        </Link>
      </div>

      {/* Right Side - Image */}
      <div className='w-1/2 flex justify-end'> 
        <img src={bg} alt="profile" className='h-auto w-2/3 object-cover rounded-full' />
      </div>
    </section>
  );
}

export default Intro;
