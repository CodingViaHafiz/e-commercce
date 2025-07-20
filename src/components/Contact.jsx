// components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <div
      id='/contact'
      className="bg-white min-h-screen pt-6 pb-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Get in Touch</h2>
          <p className="mt-4 text-gray-600">Have questions or need help? Our team is here to support you.</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-blue-900">Customer Service</h3>
              <p>Email: support@myshop.com</p>
              <p>Phone: +92 3175744576</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900">Our Address</h3>
              <p>7 Khanewal Commerce Street</p>
              <p>Khanewal , Punjab</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-900">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div className=''>
                <label htmlFor="email" className="block  text-sm font-medium text-blue-900">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-900">Message</label>
                <textarea id="message" name="message" rows="4" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>

              <button type="submit" className=" w-full bg-white text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-900 border-2 border-blue-900 hover:text-white font-semibold transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
