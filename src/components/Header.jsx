import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="text-gray-700 bg-white shadow-md relative">
      <div className="container flex justify-between items-center">
        <img src='394917i.png' alt="Logo" className="w-24 h-12" />
        <nav className={`lg:flex hidden justify-center items-center flex-grow ${showNav ? 'hidden' : 'block'}`}>
          <ul className="flex space-x-4 justify-center items-center">
            <li><a href="#" className="hover:text-gray-400">Booking</a></li>
            <li><a href="#" className="hover:text-gray-400">Facilities</a></li>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Location</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
        <div className="flex items-center">
          <button className="hidden lg:flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
            Sign In
          </button>
          <div className="lg:hidden">
            {showNav ? (
              <AiOutlineClose onClick={toggleNav} className="text-gray-700 text-3xl cursor-pointer" />
            ) : (
              <AiOutlineMenu onClick={toggleNav} className="text-gray-700 text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <nav className={`lg:hidden bg-gray-200 absolute ${showNav ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4 p-4">
          <li><a href="#" className="hover:text-gray-800">Booking</a></li>
          <li><a href="#" className="hover:text-gray-800">Facilities</a></li>
          <li><a href="#" className="hover:text-gray-800">About Us</a></li>
          <li><a href="#" className="hover:text-gray-800">Location</a></li>
          <li><a href="#" className="hover:text-gray-800">Contact</a></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
