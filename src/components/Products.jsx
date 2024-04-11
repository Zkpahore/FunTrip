import React from 'react';
import Banner from './banner';

import { FaPlay } from "react-icons/fa6";
function FeaturedProducts() {
  

  return (
   <>
<div className='w-full min:h-screen flex flex-wrap'>
  <div className='text w-full lg:w-1/2 lg:p-12 p-4 items-center justify-center bg-green-50 rounded-t-[70px] lg:rounded-t-none lg:rounded-tl-[80px]'>
<h1 className='text-6xl font-extrabold font-sans'>Find Your Perfect Place To Travel</h1>
<p className='py-10 font-serif'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Provident vitae tenetur fuga ratione voluptatibus totam sed obcaecati nisi? Architecto,
  maiores sint? Harum voluptas eligendi vel nihil nesciunt sequi cumque ea?</p>
  <div className='flex items-center space-x-1'>
      <FaPlay className='bg-white p-2 text-4xl rounded-full' />
      <span className='font-bold'>Watch Video</span>
    </div>
    <Banner />
  </div>

  <div className='image w-full lg:w-1/2'>
    <img src='Burj.jpg' className='rounded-t-[70px] lg:rounded-t-none lg:rounded-tr-[80px]' />

  </div>
</div>
   </>
  );
}

export default FeaturedProducts;
