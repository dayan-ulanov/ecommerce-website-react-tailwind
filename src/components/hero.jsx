import React from 'react';
// women images
import ManImages from '../img/man-images.png';
// import link
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className='bg-blue-400 h-[800px] px-24 bg-center bg-no-repeat overflow-hidden'>
      <div className='mx-auto container flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pretitle */}
          <div className='font-semibold flex group items-center uppercase text-neutral-100'>
            <div className='w-10 h-[2px] bg-neutral-200 mr-3'></div>New Trend
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1] text-neutral-50 font-light mb-4'>
            AUTUMN SALE STYLISH <br />
            <span className='font-semibold'>MAN & WOMEN</span>
          </h1>
          <Link className='self-start uppercase font-semibold border px-4 py-2 border-neutral-100 text-white hover:bg-blue-300 transition duration-300' to={'/'}>Discover More</Link>
        </div>
        {/* image */}
        <div className='w-full h-full'>
          <img className='hidden lg:block bg-cover h-full w-full' src={ManImages} alt='Trend'/>
        </div>
      </div>
    </section>
  )
};
