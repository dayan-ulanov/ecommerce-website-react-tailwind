import React, { useContext } from 'react'
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// import components
import CartItem from './cart-item';
// import sidebar context
import { SidebarContext } from '../contexts/sidebar-context';
// import cart context
import { CartContext } from '../contexts/cart-context';

export default function Sidebar() {
  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart, total, clearCart} = useContext(CartContext);

  return (
    <div className={` ${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full px-4 shadow-2xl md:w-[47vw] transition-all duration-300 z-20 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
        {/* icon */}
        <div onClick={handleClose} className='cursor-pointer hover:bg-blue-50 border rounded w-8 h-8 flex items-center justify-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[440px] lg:h-[520px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => { return <CartItem item={item} key={item.id} /> })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 my-4'>
        <div className='flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total: $ {parseFloat(total).toFixed(2)}</span>
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className='cursor-pointer py-2 bg-blue-500 hover:bg-blue-300 text-white w-10 h-10 flex justify-center rounded items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
        <div className='flex flex-col gap-y-2'>
          <Link to={'/'} className='bg-neutral-200 hover:bg-neutral-300 flex p-4 justify-center items-center text-neutral-900 w-full font-medium'>View cart</Link>
          <Link to={'/'} className='bg-neutral-900 hover:bg-neutral-700 flex p-4 justify-center items-center text-neutral-200 w-full font-medium'>Checkout</Link>
        </div>
      </div>
    </div>
  )
}
