import React, { useState } from 'react';
import { FiUser, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { FiRefreshCw } from 'react-icons/fi';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    from: '',
    to: '',
    adults: 1,
    children: 0,
    class: 'Economy class',
    departure: '',
    journeyType: 'one Way'
  });

  const [errors, setErrors] = useState({});

  const classes = [
    "Economy class",
    "Business class",
    "First class",
  ];

  const journeyOptions = [
    "One Way",
    "Round Trip",
  ];

  const locations = [
    "Australia",
    "Singapore",
    "Japan",
    "Abu Dhabi",
    "Qatar",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
      alert('Booking submitted successfully!');
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      errors.email = 'Valid email is required';
    }
    if (!formData.from) errors.from = 'Departure location required';
    if (!formData.to) errors.to = 'Destination required';
    if (formData.adults < 1) errors.adults = 'At least 1 adult required';
    if (!formData.departure) errors.departure = 'Departure date required';
    return errors;
  };

  const handleSwapLocations = () => {
    setFormData(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Flight Booking
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <FiUser className="mr-2 text-blue-600" /> Name*
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'}`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <FiMail className="mr-2 text-blue-600" /> Email*
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'}`}
                  placeholder="example@domain.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Location Fields */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Locations</span>
                  <button
                    type="button"
                    onClick={handleSwapLocations}
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                  >
                    <FiRefreshCw className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      value={formData.from}
                      onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 ${errors.from ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'}`}
                    >
                      <option value="">Departure From*</option>
                      {locations.map((loc, index) => (
                        <option key={index} value={loc}>{loc}</option>
                      ))}
                    </select>
                    {errors.from && <p className="text-red-500 text-sm mt-1">{errors.from}</p>}
                  </div>

                  <div>
                    <select
                      value={formData.to}
                      onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 ${errors.to ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'}`}
                    >
                      <option value="">Destination To*</option>
                      {locations.map((loc, index) => (
                        <option key={index} value={loc}>{loc}</option>
                      ))}
                    </select>
                    {errors.to && <p className="text-red-500 text-sm mt-1">{errors.to}</p>}
                  </div>
                </div>
              </div>

              {/* Passengers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adults*</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: Math.max(1, e.target.value) })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: Math.max(0, e.target.value) })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              {/* Class and Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Class*</label>
                  <select
                    value={formData.class}
                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    {classes.map((cls, index) => (
                      <option key={index} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date*</label>
                  <input
                    type="date"
                    value={formData.departure}
                    onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 ${errors.departure ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'}`}
                  />
                  {errors.departure && <p className="text-red-500 text-sm mt-1">{errors.departure}</p>}
                </div>
              </div>

              {/* Journey Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Journey Type*</label>
                <select
                  value={formData.journeyType}
                  onChange={(e) => setFormData({ ...formData, journeyType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  {journeyOptions.map((opt, index) => (
                    <option key={index} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex items-center justify-center"
            >
              Book Now
              <FiArrowUpRight className="ml-2 w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;