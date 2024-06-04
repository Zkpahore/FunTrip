// src/components/Box.jsx
import React from 'react';

const Box = ({ icon, title, text, bgColor }) => {
  return (
    <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
      <div className={`flex items-center justify-center h-24 ${bgColor}`}>
        {icon}
        <h2 className="text-xl font-bold text-white">{title}</h2>
        
      </div>
      <div className="p-4 bg-white">
        <p className="text-gray-700">{text}</p>
      </div>
      <div className="p-4 bg-white text-center">
        <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quia et placeat, aspernatur cumque adipisci veritatis consequuntur itaque maiores pariatur debitis. Molestias, praesentium nemo reiciendis rem sint fugiat consequatur beatae.</p>
      </div>
      <div className="p-4 bg-white text-center text-xl underline font-serif uppercase">
        <p className="text-gray-700">more</p>
      </div>
    </div>
  );
};

export default Box;
