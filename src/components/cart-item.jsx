import React from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdClose, IoMdRemove } from 'react-icons/io';

export default function CartItem({ item }) {
  // destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img
            className='max-w-[80px]'
            src={image}
            alt={title} />
        </Link>
        <div className='w-full flex flex-col'>
          {/* title & remove icon */}
          <div className='flex justify-between mb-2'>
            {/* title */}
            <Link
            className="text-sm uppercase font-medium max-w-[240px] text-neutral-900 hover:underline"
              to={`/product/${id}`}>
              {title}
            </Link>
            {/* remove icon */}
            <div className='text-xl cursor-pointer'>
              <IoMdClose className='text-neutral-500 hover:text-neutral-900 transition duration-300 w-6 h-6 border rounded hover:bg-blue-50'/>
            </div>
          </div>
          <div className='bg-blue-200 flex gap-x-2 h-[36px]'>
            {/* qty */}
            <div>
              {/* minus icons */}
              <IoMdRemove />
            </div>
            {/* item price */}
            <div>item price</div>
            {/* final price */}
            <div>final price</div>
          </div>
        </div>
      </div>
    </div>
  )
};
