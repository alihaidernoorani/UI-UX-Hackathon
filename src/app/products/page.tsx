import React from 'react';
import Image from 'next/image';
import { BsCartDash } from "react-icons/bs";

import product1 from '@/assets/Library Stool Chair 1.png';
import product2 from '@/assets/Library Stool Chair 2.png';
import product3 from '@/assets/Library Stool Chair 3.png';
import product4 from '@/assets/Library Stool Chair 4.png';
import product5 from '@/assets/Wing Chair.png';
import product6 from '@/assets/Style Chair 3.png';
import product7 from '@/assets/Library Sofa Chair.png';
import product8 from '@/assets/Library Stool Chair 1.png';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    onSale: boolean;
    isNew: boolean;
  };
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Library Stool Chair',
      price: 20,
      image: product1.src, 
      onSale: false,
      isNew: true,
    },
    {
      id: 2,
      name: 'Library Stool Chair',
      price: 20,
      image: product2.src, 
      onSale: true,
      isNew: false,
    },
    {
      id: 3,
      name: 'Library Stool Chair',
      price: 20,
      image: product3.src, 
      onSale: false,
      isNew: false,
    },
    {
      id: 4,
      name: 'Library Stool Chair',
      price: 20,
      image: product4.src, 
      onSale: false,
      isNew: false,
    },
    {
      id: 5,
      name: 'Wing Chair',
      price: 20,
      image: product5.src, 
      onSale: false,
      isNew: true,
    },
    {
      id: 6,
      name: 'Library Stool Chair',
      price: 20,
      image: product6.src, 
      onSale: true,
      isNew: false,
    }
    ,
    {
      id: 7,
      name: 'Library Stool Chair',
      price: 20,
      image: product7.src, 
      onSale: false,
      isNew: false,
    },
    {
      id: 8,
      name: 'Library Stool Chair',
      price: 20,
      image: product8.src, 
      onSale: false,
      isNew: false,
    }
  ];
  
  const ProductCard = ({ product }: { product: Product }) => {
    return (
      <div className="rounded-md overflow-hidden relative">
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-sm">
            New
          </div>
        )}
        {product.onSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-sm">
            Sale
          </div>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-auto object-cover mb-4"
        />
        <div className='flex justify-between'>
          <div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">${product.price}</p>
          </div>
          <button
              className="p-4 rounded-lg hover:bg-[#029FAE] hover:text-white transition-all duration-200"
              aria-label="Add to cart"
          >
              <BsCartDash className="text-2xl" />
          </button>
        </div>
      </div>
    );
  };

const Products = () => {
  return (
    <section>
      <div className="w-[80%] mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* Newsletter Section */}
      <div className='bg-[#1E28320D] flex flex-col items-center mx-auto py-10 mt-20'>
        <div className='max-w-[760px]'>
          <h1 className='text-3xl xl:text-4xl text-center font-medium pt-20 pb-10 mt-20'>Or Subscribe To The Newsletter</h1>
          <input type="text" placeholder='Email Address...' className='bg-[#1E28320D] w-2/3 mr-3 border-none border-b-black'/>
          <input type="submit" />
        </div>
        {/* Instagram Section */}
      <div className="flex flex-col items-center text-center mx-auto py-20">
        <h1 className="text-3xl xl:text-4xl font-medium mb-10">
          Follow Products And Discounts on Instagram
        </h1>
        <div className="flex gap-2 w-[80%] justify-center">
             <Image
              src={product5}
              alt={'Chair'}
              width={200}
              height={200}
              className="rounded-md w-full h-auto object-cover"
            />
            <Image
              src={product4}
              alt={'Chair'}
              width={200}
              height={200}
              className="rounded-md w-full h-auto object-cover"
            />
            <Image
              src={product2}
              alt={'Chair'}
              width={200}
              height={200}
              className="rounded-md w-full h-auto object-cover"
            />
            <Image
              src={product1}
              alt={'Chair'}
              width={200}
              height={200}
              className="rounded-md w-full h-auto object-cover"
            />
            <Image
              src={product3}
              alt={'Chair'}
              width={200}
              height={200}
              className="rounded-md w-full h-auto object-cover"
            />
            <Image
              src={product5}
              alt={'Chair'}
              width={200}
              height={200}
              className="rounded-md w-full h-auto object-cover"
            />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Products