import React from 'react';

export default function Descr() {
  return (
    <div className='py-16 bg-green-50'>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <img className="w-full md:w-1/2" src="tuu.jpg" alt="Placeholder Image" />
        <div className="w-full md:w-1/2 px-6 py-4 text-center md:text-left">
          <div className="font-bold text-2xl mb-2">Discover Our History</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat deserunt similique vel perspiciatis ut, a consequuntur quibusdam repellendus suscipit, adipisci quasi iste recusandae blanditiis at. Veritatis sed error cumque.
          </p>
          <div className="mt-4 flex justify-center md:justify-start">
            <a href="#" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}
