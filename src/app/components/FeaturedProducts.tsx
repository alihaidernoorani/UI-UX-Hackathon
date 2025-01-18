"use client"
import React, { useState, useEffect } from 'react';
import ProductCard from './cards/ProductCard';
import { client } from '@/sanity/lib/client';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  onSale: boolean;
  isNew: boolean;
}

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // GROQ query to fetch products with "featured" in their tags
      const query = `*[_type == "products" && "featured" in tags][0...4]{
        _id,
        title,
        price,
        "imageUrl": image.asset->url,
        badge,
        description,
        inventory
      }`;

      const fetchedProducts = await client.fetch(query);

      // Map the fetched data to match the Product interface
      const formattedProducts = fetchedProducts.map((product: any) => ({
        id: product._id,
        name: product.title,
        price: product.price,
        image: product.imageUrl,
        onSale: product.badge === 'On Sale',
        isNew: product.badge === 'New',
      }));

      setProducts(formattedProducts);
    };

    fetchProducts();
  }, []);

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