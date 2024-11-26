import React from 'react'
import { Facebook , Github, LinkedinIcon, LucideTwitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contact' className=" py-16">
      <div className="max-w-4xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-400 mb-4">Contact Me</h1>
        <span className="block text-lg text-gray-400 text-center mb-8">
        <h1 className='text-2xl'>I'd love to hear your thoughts! </h1><br />
          Please fill out the form below to discuss any work opportunities
        </span>
        
        
        <form action="" className="flex flex-col gap-6 ">
          <input 
            type="text" 
            placeholder="Your Name" 
            className=" bg-transparent p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="bg-transparent p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />
          <textarea 
            placeholder="Your Message" 
            className="bg-transparent p-4 h-40 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-white"
          />
          
          
          <button 
            type="submit" 
            className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition duration-300 text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className='flex justify-center items-center mt-20 gap-4 cursor-pointer '>
          <Facebook className='text-blue-600 hover:bg-gray-900' /> 
          <Github className='text-blue-600  hover:bg-gray-900' /> 
          <LucideTwitter className='hover:bg-gray-900 text-blue-600' /> 
          <LinkedinIcon className='hover:bg-gray-900 text-blue-600 ' />
      </div>
    </section>
  )
}

export default Contact;
