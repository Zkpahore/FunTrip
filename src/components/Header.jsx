import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="text-gray-700 bg-white shadow-md relative">
      <div className="container flex justify-between items-center">
       <Link to='/'>
        <img src='394917i.png' alt="Logo" className="w-24 h-12" />
        </Link>
        <nav className={`lg:flex hidden justify-center items-center flex-grow ${showNav ? 'hidden' : 'block'}`}>
          <ul className="flex space-x-6 justify-center items-center font-semibold">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/Booking" className="hover:text-gray-400">Booking</Link></li>
            <li><Link to="/Facities" className="hover:text-gray-400">Facilities</Link></li>
            <li><Link to="/About-Us" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="/location" className="hover:text-gray-400">Location</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            
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
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/Booking" className="hover:text-gray-400">Booking</Link></li>
            <li><Link to="/Facities" className="hover:text-gray-400">Facilities</Link></li>
            <li><Link to="/About-Us" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="/location" className="hover:text-gray-400">Location</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
