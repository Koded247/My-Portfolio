import React from 'react';
import UiDesign from '../assets/image.png';

const Skill = () => {
  return (
    <section className='max-w-3xl mx-auto my-16 p-8'>
      {/* Title Section */}
      <div className='text-center mb-8'>
        <span className='block text-4xl font-bold'>What I Do</span>
        <span className='block text-lg text-gray-600 mt-4'>
          I am a skilled web designer with experience in creating visually appealing and user-friendly websites.
        </span>
      </div>

      {/* Skills Section */}
      <div className='flex flex-col gap-8'>
        {/* UI/UX Design Card */}
        <div className='flex flex-row items-center p-6 bg-white shadow-lg rounded-lg'>
          <img src={UiDesign} alt="UI/UX Design" className='h-16 w-16 object-cover mr-4' />
          <div>
            <h2 className='text-2xl font-bold mb-2 text-black'>UI/UX Design</h2>
            <p className='text-gray-600'>
              This is a demo description. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* Web Design Card */}
        <div className='flex flex-row items-center p-6 bg-white shadow-lg rounded-lg'>
          <img src={UiDesign} alt="Web Design" className='h-16 w-16 object-cover mr-4' />
          <div>
            <h2 className='text-2xl font-bold mb-2 text-black'>Web Design</h2>
            <p className='text-gray-600'>
              Qui aliquam tempore pariatur illo unde architecto iusto velit, repellendus, quam nemo molestiae.
            </p>
          </div>
        </div>

        {/* App Design Card */}
        <div className='flex flex-row items-center p-6 bg-white shadow-lg rounded-lg'>
          <img src={UiDesign} alt="App Design" className='h-16 w-16 object-cover mr-4' />
          <div>
            <h2 className='text-2xl font-bold mb-2 text-black' >App Design</h2>
            <p className='text-gray-600'>
              Totam autem eveniet quas voluptates illo ea iure explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
