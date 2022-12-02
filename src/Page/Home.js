import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { useSelector } from 'react-redux';

const Home = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [])

  const state = useSelector((state) => state);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products.map(item => <ProductCard
          key={item.id}
          product={item}
        ></ProductCard>)
      }
    </div>
  );
};

export default Home;