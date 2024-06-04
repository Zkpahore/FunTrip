// src/components/Boxes.jsx
import React from 'react';
import Box from './PageComp/Box';
import { FaHiking, FaPlane, FaHotel, FaLifeRing } from 'react-icons/fa';

const boxesData = [
  {
    icon: <FaHiking className="text-3xl text-white" />,
    title: 'Hiking',
    text: 'Explore the best hiking trails.',
    bgColor: 'bg-green-500',
  },
  {
    icon: <FaPlane className="text-3xl text-white" />,
    title: 'Travel',
    text: 'Discover new destinations.',
    bgColor: 'bg-blue-500',
  },
  {
    icon: <FaHotel className="text-3xl text-white" />,
    title: 'Tours',
    text: 'Find the best tours available.',
    bgColor: 'bg-yellow-500',
  },
  {
    icon: <FaLifeRing className="text-3xl text-white" />,
    title: 'Support',
    text: '24/7 customer support.',
    bgColor: 'bg-red-500',
  },
];

const Facities = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {boxesData.map((box, index) => (
        <Box
          key={index}
          icon={box.icon}
          title={box.title}
          text={box.text}
          bgColor={box.bgColor}
        />
      ))}
    </div>
  );
};

export default Facities;
