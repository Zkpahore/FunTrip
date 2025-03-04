import React, { useState } from 'react';
import { MdLocationOn, MdDateRange } from 'react-icons/md';

const TravelBookingComponent = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleCheckInDateChange = (e) => setCheckInDate(e.target.value);
  const handleCheckOutDateChange = (e) => setCheckOutDate(e.target.value);

  const handleBookNow = () => {
    if (!location || !checkInDate || !checkOutDate) {
      alert('Please fill in all fields.');
      return;
    }
    alert(`Booking confirmed for ${location} from ${checkInDate} to ${checkOutDate}`);
  };

  return (
    <div className="flex justify-center items-center my-8 px-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        {/* Location Input */}
        <div className="flex flex-col flex-1">
          <label htmlFor="location" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <MdLocationOn className="text-blue-500 mr-1" />
            Location
          </label>
          <select
            id="location"
            value={location}
            onChange={handleLocationChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Place</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="aus">Australia</option>
            <option value="uae">United Arab Emirates</option>
            <option value="sa">Saudi Arabia</option>
          </select>
        </div>

        {/* Check In Input */}
        <div className="flex flex-col flex-1">
          <label htmlFor="checkIn" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <MdDateRange className="text-blue-500 mr-1" />
            Check In
          </label>
          <input
            type="date"
            id="checkIn"
            value={checkInDate}
            onChange={handleCheckInDateChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Check Out Input */}
        <div className="flex flex-col flex-1">
          <label htmlFor="checkOut" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <MdDateRange className="text-blue-500 mr-1" />
            Check Out
          </label>
          <input
            type="date"
            id="checkOut"
            value={checkOutDate}
            onChange={handleCheckOutDateChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Book Now Button */}
        <div className="flex-shrink-0">
          <button
            onClick={handleBookNow}
            className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelBookingComponent;
