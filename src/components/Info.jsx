import React from 'react';

export default function Info() {
  return (
    <div className='bg-gray-100'>
      <h1 className='text-center text-3xl font-bold py-10 font-serif'>Why Travel With<br /> FunTrip</h1>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 py-10">
        <div className="max-w-lg rounded overflow-hidden shadow-lg mx-4 flex flex-col md:flex-row">
          <img className="w-full md:w-1/2" src="travel.jpeg" alt="Placeholder Image" />
          <div className="w-full md:w-1/2 px-6 py-4">
            <div className="font-bold text-xl mb-2">500+ Our Worldwide Guide</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="mt-4">
              <a href="#" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Read More</a>
            </div>
          </div>
        </div>

        <div className="max-w-lg rounded overflow-hidden shadow-lg mx-4 flex flex-col md:flex-row">
          <img className="w-full md:w-1/2" src="trip.jpg" alt="Placeholder Image" />
          <div className="w-full md:w-1/2 px-6 py-4">
            <div className="font-bold text-xl mb-2">85% Of Our Travellers Happy</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="mt-4">
              <a href="#" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
