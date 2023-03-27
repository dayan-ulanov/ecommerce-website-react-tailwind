import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';
// import cart context
import { CartContext } from '../contexts/cart-context';


export default function CartItem({ item }) {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  // destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-neutral-200 w-full font-line text-neutral-500'>
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
            <div
              onClick={() => removeFromCart(id)}
              className='text-xl cursor-pointer'>
              <IoMdClose className='text-neutral-500 hover:text-neutral-900 transition duration-300 w-6 h-6 border rounded hover:bg-blue-50'/>
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px]'>
            {/* qty */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border rounded text-neutral-900 font-medium'>
              {/* minus icon */}
              <div onClick={() => decreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer hover:bg-neutral-100'>
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className='h-full flex justify-center items-center px-3 border-x border-neutral-100'>{ amount }</div>
              {/* plus icon */}
              <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer hover:bg-neutral-100'>
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className='flex-1 flex items-center justify-around'>$ {price}</div>
            {/* final price */}
            {/* make the price at 2 decimal */}
            <div className='flex-1 flex justify-end items-center text-neutral-900 font-medium'>{`$ ${parseFloat(item.price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
};
