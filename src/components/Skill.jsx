import React from 'react';
import UiDesign from '../assets/image.png';

const Skill = () => {
  return (
    <section id='about' className='max-w-6xl mx-auto my-16 p-4 md:p-8'>
      {/* Title Section */}
      <div className='text-center mb-8'>
        <span className='block text-3xl md:text-4xl font-bold'>What I Do</span>
        <span className='block text-base md:text-lg text-gray-600 mt-4'>
          I am a skilled web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I'm proficient in HTML, CSS (Tailwind), and JavaScript, as well as using React applications.
        </span>
      </div>

      {/* Skills Section */}
      <div className='flex flex-col gap-8'>
        {/* UI/UX Design Card */}
        <div className='flex flex-col md:flex-row items-center p-6 bg-gray-700 shadow-lg rounded-lg'>
          <img src={UiDesign} alt="UI/UX Design" className='h-16 w-16 object-cover mb-4 md:mb-0 md:mr-4' />
          <div className='text-center md:text-left'>
            <h2 className='text-xl md:text-2xl font-bold mb-2 text-white'>UI/UX Design</h2>
            <p className='text-gray-400'>
              This is a demo description. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* Web Design Card */}
        <div className='flex flex-col md:flex-row items-center p-6 bg-gray-700 shadow-lg rounded-lg'>
          <img src={UiDesign} alt="Web Design" className='h-16 w-16 object-cover mb-4 md:mb-0 md:mr-4' />
          <div className='text-center md:text-left'>
            <h2 className='text-xl md:text-2xl font-bold mb-2 text-white'>Web Design</h2>
            <p className='text-gray-400'>
              Qui aliquam tempore pariatur illo unde architecto iusto velit, repellendus, quam nemo molestiae.
            </p>
          </div>
        </div>

        {/* App Design Card */}
        <div className='flex flex-col md:flex-row items-center p-6 bg-gray-700 shadow-lg rounded-lg'>
          <img src={UiDesign} alt="App Design" className='h-16 w-16 object-cover mb-4 md:mb-0 md:mr-4' />
          <div className='text-center md:text-left'>
            <h2 className='text-xl md:text-2xl font-bold mb-2 text-white'>App Design</h2>
            <p className='text-gray-400'>
              Totam autem eveniet quas voluptates illo ea iure explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
