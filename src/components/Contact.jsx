import React from 'react'

const Contact = () => {
  return (
    <section className=" py-16">
      <div className="max-w-4xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-400 mb-4">Contact Me</h1>
        <span className="block text-lg text-gray-400 text-center mb-8">
          Please fill out the form below to discuss any work opportunities
        </span>
        
        
        <form action="" className="flex flex-col gap-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 text-black"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 text-black"
          />
          <textarea 
            placeholder="Your Message" 
            className="p-4 h-40 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 resize-none text-black"
          />
          
          
          <button 
            type="submit" 
            className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition duration-300 text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
      <div>

      </div>
    </section>
  )
}

export default Contact;
