import React, { useContext } from 'react';
// import Link
import { Link } from 'react-router-dom';
// import sidebar context
import { SidebarContext } from '../contexts/sidebar-context';
// import cart context
import { CartContext } from '../contexts/cart-context';
// import icons
import { BsBag } from 'react-icons/bs';

export default function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header className='bg-white border-b z-10 flex justify-between py-6 px-4 fixed top-0 left-0 right-0'>
      <Link to={'/'}>
        <div className='text-xl font-semibold text-blue-500'>
          <h2>Ecco-me</h2>
        </div>
      </Link>
      {/* cart */}
      <div
        className='max-w-[50px] flex justify-center items-center border rounded w-8 h-8 cursor-pointer hover:bg-blue-50 relative'
        onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='text-2x' />
        <div className='bg-blue-400 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
    </header>
  )
};
