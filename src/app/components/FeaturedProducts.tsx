import React from 'react';
import ProductCard from './ui/ProductCard';
import product1 from '@/assets/Library-Stool-Chair-1.png';
import product2 from '@/assets/Library-Stool-Chair-2.png';
import product3 from '@/assets/Library-Stool-Chair-3.png';
import product4 from '@/assets/Library-Stool-Chair-4.png';

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
  {id: 4, name: 'Library Stool Chair', price: 20, image: product4.src, onSale: false, isNew: false}
];

const FeaturedProducts = () => {
  return (
    <section className="w-[80%] mt-20 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;