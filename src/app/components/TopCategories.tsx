"use client"

import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import CategoryCard from './cards/CategoryCard';

interface CategoryCardType {
  id: string;
  title: string;
  products: string | number;
  image: string; 
}

const TopCategories: React.FC = () => {

  const [products, setProducts] = useState<CategoryCardType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "categories"]
          {
            _id,
            title,
            "imageUrl": image.asset->url,
            products
          }`;

        const fetchedProducts = await client.fetch(query);

        const formattedProducts = fetchedProducts.map((product: any) => ({
          id: product._id,
          title: product.title, 
          image: product.imageUrl,
          products: product.products
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* Top Categories Section */}
      <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
      <section className="h-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((category) => (
            <CategoryCard key={category.id} products={category.products} name={category.title} image={category.image} /> 
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopCategories;