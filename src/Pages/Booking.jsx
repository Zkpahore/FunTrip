import React from 'react';

const Booking = () => {
  const clases = [
    "Economy class",
    "Bussiness class",
    "Fist class",
];
  const option = [
    "one Way",
    "Two Way",
];
  const optionsone = [
      "Australia",
      "Singapore",
      "Japan",
      "Abu Dubai",
      "Qatar",
  ];
  const optionstwo = [
    "Singapore",
    "Australia",
    "Japan",
    "Abu Dubai",
    "Qatar",
];
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <form className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name*</label>
      <input type="text" id="name" placeholder='Your Name' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-mail*</label>
      <input type="email" id="email" placeholder='ex: yourmail@gmail.com' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    <div className="mb-4 flex space-x-4">
      <div className="w-1/2">
        <label htmlFor="from1" className="block text-gray-700 font-bold mb-2">From*</label>
        <select id="from1" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          {optionsone.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="w-1/2">
        <label htmlFor="from2" className="block text-gray-700 font-bold mb-2">To*</label>
        <select id="from2" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          {optionstwo.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>


    <div className="mb-4 flex space-x-4">
      <div className="w-1/2">
      <label htmlFor="adult" className="block text-gray-700 font-bold mb-2">Adults*</label>
      <input type="number" id="adult" placeholder='01' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
   

    <div className="w-1/2">
      <label htmlFor="childs" className="block text-gray-700 font-bold mb-2">Children*</label>
      <input type="number" id="childs" placeholder='01' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    </div>

    <div className="mb-4">
      <label htmlFor="form4" className="block text-gray-700 font-bold mb-2">Travel Class*</label>
      <select id="from4" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          {clases.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
         </div>

    <div className="mb-4 flex space-x-4">
      <div className="w-1/2">
      <label htmlFor="dd" className="block text-gray-700 font-bold mb-2">Departure On*</label>
      <input type="date" id="dd" placeholder='01' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
   

    <div className="w-1/2">
      <label htmlFor="form3" className="block text-gray-700 font-bold mb-2">Journey type*</label>
      <select id="from3" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          {option.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
         </div>
    </div>

    <div className="flex items-center justify-between">
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">Submit</button>
    </div>
  </form>
</div>

  )
}

export default Booking
