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
  const {cart} = useContext(CartContext);

  return (
    <div className={` ${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full px-4 shadow-2xl md:w-[35vw] transition-all duration-300 z-20 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
        {/* icon */}
        <div onClick={handleClose} className='cursor-pointer hover:bg-blue-50 border rounded w-8 h-8 flex items-center justify-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div>
        {cart.map((item) => { return <CartItem item={item} key={item.id} /> })}
      </div>
    </div>
  )
}
