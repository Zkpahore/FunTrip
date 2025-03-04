import React from 'react';

import TravelBookingComponent from './TravelBookingComponent';
import { FaPlay } from "react-icons/fa6";

function FeaturedProducts() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Main Section: Description and Image */}
      <div className="flex flex-wrap">
        {/* Left: Description */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-r from-blue-100 to-blue-50 rounded-bl-[70px] lg:rounded-bl-[80px]">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-6">
            Find Your Perfect Place To Travel
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vitae tenetur fuga ratione voluptatibus totam sed obcaecati nisi? Architecto, maiores sint? Harum voluptas eligendi vel nihil nesciunt sequi cumque ea?
          </p>
          <div className="flex items-center space-x-3 mb-8">
            <button className="bg-white p-3 rounded-full shadow-lg hover:shadow-2xl transition duration-300">
              <FaPlay className="text-2xl text-blue-500" />
            </button>
            <span className="text-xl font-semibold text-blue-500">Watch Video</span>
          </div>
          
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="Burj.jpg"
            alt="Travel Destination"
            className="w-full h-full object-cover rounded-tr-[70px] lg:rounded-tr-[80px]"
          />
        </div>
      </div>

      {/* Centered Booking Component */}
      <div className="relative z-10 flex justify-center px-4 mt-[-40px] sm:mt-[-60px] md:mt-[-80px]">
        <TravelBookingComponent />
      </div>

      {/* Extra bottom padding to avoid content collision */}
      <div className="h-16"></div>
    </div>
  );
}

export default FeaturedProducts;
