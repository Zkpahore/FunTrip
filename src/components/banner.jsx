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
    <div className="absolute top-[770px] lg:top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="mx-auto p-4 rounded-lg shadow-md flex flex-col md:flex-row md:items-center md:justify-between bg-white">
        <div className="flex flex-col items-center mb-4 md:mb-0 md:w-1/3">
          <div className="flex items-center">
            <MdLocationOn className="text-blue-500" />
            <label htmlFor="location" className="mt-1 text-sm ml-1">
              Location
            </label>
          </div>
          <select
            id="location"
            value={location}
            onChange={handleLocationChange}
            className="w-full px-4 py-2 mt-1 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Place</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="aus">Australia</option>
            <option value="uae">United Arab Emirates</option>
            <option value="sa">Saudi Arabia</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-2/3 md:gap-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <MdDateRange className="text-blue-500" />
              <label htmlFor="checkIn" className="mt-1 text-sm ml-1">
                Check In
              </label>
            </div>
            <input
              type="date"
              id="checkIn"
              value={checkInDate}
              onChange={handleCheckInDateChange}
              className="w-full px-4 py-2 mt-1 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <div className="flex items-center">
              <MdDateRange className="text-blue-500" />
              <label htmlFor="checkOut" className="mt-1 text-sm ml-1">
                Check Out
              </label>
            </div>
            <input
              type="date"
              id="checkOut"
              value={checkOutDate}
              onChange={handleCheckOutDateChange}
              className="w-full px-4 py-2 mt-1 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <button
          onClick={handleBookNow}
          className="w-full md:w-auto px-4 py-2 mt-4 md:mt-0 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TravelBookingComponent;
