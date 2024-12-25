import React from 'react';
import Image from 'next/image';
import ProductCard from '../components/ui/ProductCard';

import product1 from '@/assets/Library-Stool-Chair-1.png';
import product2 from '@/assets/Library-Stool-Chair-2.png';
import product3 from '@/assets/Library-Stool-Chair-3.png';
import product4 from '@/assets/Library-Stool-Chair-4.png';
import product5 from '@/assets/Stool-Chair.png';
import product6 from '@/assets/Style-Chair-3.png';
import product7 from '@/assets/Library-Sofa-Chair.png';
import product8 from '@/assets/Library-Stool-Chair-1.png';
import product9 from '@/assets/Wing-Chair.png';
import product10 from '@/assets/Desk-Chair.png';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    onSale: boolean;
    isNew: boolean;
  };
  
  const products: Product[] = [
    {id: 1, name: 'Library Stool Chair', price: 20, image: product1.src, onSale: false, isNew: true},
    {id: 2, name: 'Library Stool Chair', price: 20, image: product2.src, onSale: true, isNew: false},
    {id: 3, name: 'Library Stool Chair', price: 20, image: product3.src, onSale: false, isNew: false},
    {id: 4, name: 'Library Stool Chair', price: 20, image: product4.src, onSale: false, isNew: false},
    {id: 5, name: 'Wing Chair', price: 20, image: product5.src, onSale: false, isNew: true},
    {id: 6, name: 'Library Stool Chair', price: 20, image: product6.src, onSale: true, isNew: false},
    {id: 7, name: 'Library Stool Chair', price: 20, image: product7.src, onSale: false, isNew: false},
    {id: 8, name: 'Library Stool Chair', price: 20, image: product8.src, onSale: false, isNew: false},
    {id: 9, name: 'Wing Chair', price: 20, image: product9.src, onSale: false, isNew: false},
    {id: 10, name: 'Library Stool Chair', price: 20, image: product2.src, onSale: true, isNew: false},
    {id: 11, name: 'Library Stool Chair', price: 20, image: product3.src, onSale: false, isNew: false},
    {id: 12, name: 'Desk Chair', price: 20, image: product10.src, onSale: false, isNew: false}
  ];

  let instagramProductsid: number[] = [5,9,10,1,11,12];

  let instagramProducts: Product[] = products.filter(product => instagramProductsid.includes(product.id))

  instagramProducts = instagramProducts.map(product => ({
    ...product, onSale:false, isNew:false
  }))

const Products = () => {
  return (
    <section>
      <div className="w-[80%] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* Newsletter Section */}
      <div className='bg-[#1E28320D] flex flex-col items-center mt-20 mx-auto '>
        <div className='max-w-[760px] text-center'>
          <h1 className='md:text-xl xl:text-2xl 2xl:text-4xl text-center font-medium pb-10 mt-20'>Or Subscribe To The Newsletter</h1>
          <input type="email" placeholder='Email Address...' className='bg-transparent w-2/3 mr-3 border-b-2 pb-1 border-black'/>
          <button className='bg-transparent mr-3 border-b-2 pb-1 border-black'>SUBMIT</button>
        </div>
        {/* Instagram Section */}
      <div className="flex flex-col items-center text-center mx-auto py-20">
        <h1 className="md:text-xl xl:text-2xl 2xl:text-4xl font-medium mb-10">
          Follow Products And Discounts on Instagram
        </h1>
        <div className="flex flex-col sm:flex-wrap lg:flex-row gap-2 justify-around"> 
          {
            instagramProducts.map(product=>(
              <Image key={product.id} src={product.image} alt={product.name} width={187} height={187}/>
            ))
          }
        </div>
      </div>
      </div>
    </section>
  )
}

export default Products
