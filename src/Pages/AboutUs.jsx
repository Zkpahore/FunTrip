import React from 'react';
import { FaPlane, FaGlobe, FaSuitcase } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">About Us</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Who We Are</h2>
          <p className="text-gray-600">
            We are a dedicated travel agency committed to providing the best travel experiences
            for our customers. Our team of experienced travel agents is here to assist you in
            planning your perfect vacation, whether it's a relaxing beach getaway or an
            adventurous trek in the mountains.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to make travel accessible and enjoyable for everyone. We strive to
            offer personalized travel packages that cater to the unique needs and preferences of
            each client. We believe in creating unforgettable travel experiences that leave
            lasting memories.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Why Travel?</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
              <FaPlane className="text-blue-500 text-4xl mb-2" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">Adventure</h3>
              <p className="text-gray-600 text-center">
                Traveling opens up a world of adventure. Whether it's exploring new cities or
                hiking through nature, travel offers countless opportunities for excitement.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
              <FaGlobe className="text-green-500 text-4xl mb-2" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">Cultural Exploration</h3>
              <p className="text-gray-600 text-center">
                Discover new cultures and traditions. Travel allows you to immerse yourself in
                different ways of life, broadening your horizons and enriching your understanding
                of the world.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
              <FaSuitcase className="text-yellow-500 text-4xl mb-2" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">Relaxation</h3>
              <p className="text-gray-600 text-center">
                Sometimes, you just need to unwind. Whether it's lounging on a beach or enjoying
                a peaceful retreat, travel provides the perfect opportunity to relax and recharge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
