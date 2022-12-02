import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actionCreator/productAction';
import { FaTrashAlt, FaRegHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div>
      <div
        className='shadow-lg relative rounded-3xl border  p-3 flex flex-col text-indigo-900'
        key={product._id}
      >
        <div className='grid place-content-center bg-indigo-500 h-8 w-8 rounded-full absolute top-2 right-2'>
          <p className='text-white font-bold'>{product.quantity}</p>
        </div>
        <div className='h-52 w-52 mx-auto'>
          <img src={product.image} alt={product.model} />
        </div>
        <h1 className='font-bold text-center'>{product.model}</h1>
        <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
        <div className=' flex-1'>
          <ul className='space-y-2'>
            {product.keyFeature.map((feature) => {
              return <li className='text-sm ' key={feature}>{feature}</li>;
            })}
          </ul>
        </div>
        <div className='flex gap-2 mt-5'>

          {!pathname.includes('cart') && <button
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>}
          {!pathname.includes('cart') && <button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
          >
            <FaRegHeart className='text-white' />
          </button>}

          {pathname.includes('cart') && <button
            className='bg-red-500 flex flex-1 justify-between items-center rounded-full py-2 px-4 text-white text-bold'
            onClick={() => dispatch(removeFromCart(product))}
          >
            <p className="font-bold">Remove</p>
            <FaTrashAlt />
          </button>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;