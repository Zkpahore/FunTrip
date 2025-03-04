import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <img src="394917i.png" alt="Logo" className="w-24 h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Booking"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  to="/Facities"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/About-Us"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleNav} className="text-gray-700 focus:outline-none">
              {showNav ? <AiOutlineClose className="w-8 h-8" /> : <AiOutlineMenu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {showNav && (
        <nav className="lg:hidden bg-gray-100">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            <li>
              <Link
                to="/"
                onClick={() => setShowNav(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Booking"
                onClick={() => setShowNav(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                to="/Facities"
                onClick={() => setShowNav(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Facilities
              </Link>
            </li>
            <li>
              <Link
                to="/About-Us"
                onClick={() => setShowNav(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/location"
                onClick={() => setShowNav(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setShowNav(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
