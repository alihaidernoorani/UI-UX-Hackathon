import React from 'react';
import ProductCard from './ui/ProductCard';

import product1 from '@/assets/Library-Stool-Chair-1.png';
import product2 from '@/assets/Library-Stool-Chair-2.png';
import product3 from '@/assets/Library-Stool-Chair-3.png';
import product4 from '@/assets/Library-Stool-Chair-4.png';
import product5 from '@/assets/Wing-Chair.png';
import product6 from '@/assets/Style-Chair-3.png';
import product7 from '@/assets/Library-Sofa-Chair.png';
import product8 from '@/assets/Library-Stool-Chair-1.png';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  onSale: boolean;
  isNew: boolean;
};

const products: Product[] = [
  {id: 1, name: 'Library Stool Chair 1', price: 20, image: product1.src, onSale: false, isNew: true},
  {id: 2, name: 'Library Stool Chair 2', price: 20, image: product2.src, onSale: true, isNew: false},
  {id: 3, name: 'Library Stool Chair 3', price: 20, image: product3.src, onSale: false, isNew: false},
  {id: 4, name: 'Library Stool Chair 4', price: 20, image: product4.src, onSale: false, isNew: false},
  {id: 5, name: 'Wing Chair', price: 20, image: product5.src, onSale: false, isNew: true},
  {id: 6, name: 'Library Stool Chair', price: 20, image: product6.src, onSale: true, isNew: false},
  {id: 7, name: 'Library Sofa Chair', price: 20, image: product7.src, onSale: false, isNew: false},
  {id: 8, name: 'Library Stool Chair', price: 20, image: product8.src, onSale: false, isNew: false}
];

const OurProducts = () => {
  return (
    <section className="w-[80%] mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
