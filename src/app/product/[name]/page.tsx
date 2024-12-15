"use client"

import React from 'react';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';

// Importing assets
import product1 from '@/assets/Library Stool Chair 1.png';
import product2 from '@/assets/Library Stool Chair 2.png';
import product3 from '@/assets/Library Stool Chair 3.png';
import product4 from '@/assets/Library Stool Chair 4.png';
import product5 from '@/assets/Wing Chair.png';
import product6 from '@/assets/Style Chair 3.png';
import product7 from '@/assets/Library Sofa Chair.png';

interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
  onSale: boolean;
  isNew: boolean;
}

// Product data
const products: Product[] = [
  { id: 1, name: 'Library Stool Chair', price: 20, image: product1.src, onSale: false, isNew: true },
  { id: 2, name: 'Library Stool Chair 1', price: 20, image: product2.src, onSale: true, isNew: false },
  { id: 3, name: 'Library Stool Chair 2', price: 20, image: product3.src, onSale: false, isNew: false },
  { id: 4, name: 'Library Stool Chair 3', price: 20, image: product4.src, onSale: false, isNew: false },
  { id: 5, name: 'Wing Chair', price: 20, image: product5.src, onSale: false, isNew: true },
  { id: 6, name: 'Library Stool Chair 4', price: 20, image: product6.src, onSale: true, isNew: false },
  { id: 7, name: 'Library Stool Chair 5', price: 20, image: product7.src, onSale: false, isNew: false },
];

interface ProductProps {
  product: Product | null;
}

// Component to display product details
export default function ProductPage({ product }: ProductProps) {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* Product Information Section */}
      <div>
        {/* Left Image Section */}
        <div>
          <Image src={product.image} alt={product.name} width={500} height={500} />
        </div>
        {/* Right Product Information Section */}
        <div>
          <h1>{product.name}</h1>
          <p>Price: ${product.price}</p>
          {product.onSale && <p style={{ color: 'red' }}>On Sale!</p>}
          {product.isNew && <p style={{ color: 'green' }}>New Arrival</p>}
        </div>
      </div>
    </div>
  );
}

// Generate paths for all products dynamically
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { name: product.name.replace(/\s+/g, '-').toLowerCase() },
  }));

  return { paths, fallback: false };
};

// Fetch product details based on the name parameter
export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params!;
  const formattedName = (name as string).replace(/-/g, ' '); // Convert URL-friendly name back to original
  const product = products.find((p) => p.name.toLowerCase() === formattedName.toLowerCase()) || null;

  return {
    props: { product },
  };
};
