import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Get In Touch</h2>
          <p className="text-gray-600">
            If you have any questions or would like to discuss your travel plans, please feel free to contact us using the form below or reach out to us through the provided contact details.
          </p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name*</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-mail*</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message*</label>
            <textarea id="message" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5" required></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">Send Message</button>
          </div>
        </form>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Contact Information</h2>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 Travel Street, Adventure City, World
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +1 (234) 567-890
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> contact@travelagency.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
