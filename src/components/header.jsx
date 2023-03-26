import React, { useContext } from 'react';
// import sidebar context
import { SidebarContext } from '../contexts/sidebar-context';
// import icons
import { BsBag } from 'react-icons/bs';

export default function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className='bg-neutral-50 border-b flex justify-between py-6 px-4'>
      <div>Header</div>
      <div
        className='flex justify-center items-center border rounded w-8 h-8 cursor-pointer hover:bg-blue-50 relative'
        onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='text-2x' />
      </div>
    </header>
  )
};
