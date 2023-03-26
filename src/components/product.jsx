import React, {useContext} from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';
// import cart context
import { CartContext } from '../contexts/cart-context';


export default function Product({ product }) {
  const {addToCart} = useContext(CartContext);
  // destructure product
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className='border rounded h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300'
              src={image}
              alt={title} 
            />
          </div>
        </div>
        {/* buttons */}
        <div className='opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-2 -right-11 group-hover:right-2 bg-blue-50 flex flex-col'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center rounded-t bg-blue-400 hover:bg-blue-500 transition duration-300 text-white w-10 h-10'>
              <BsPlus className='text-3xl'/>
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-10 h-10 bg-neutral-200 hover:bg-neutral-300 transition duration-300 rounded-b flex justify-center items-center text-neutral-900'>
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <div className='text-sm capitalize text-neutral-400 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-bold text-blue-500'>${price}</div>
      </div>
    </div>
  )
};
