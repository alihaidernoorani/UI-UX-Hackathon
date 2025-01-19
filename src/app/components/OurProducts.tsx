"use client";

import React, { useEffect, useState } from 'react';
import ProductCard from './cards/ProductCard';
import { client } from "@/sanity/lib/client";

// Define the Product interface
interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  onSale: boolean;
  isNew: boolean;
}

const OurProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]); // State for products

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      // GROQ query to fetch products
      try{
      const query = `*[_type == "products"][0...8]{
        _id,
        title,
        price,
        badge,
        "imageUrl": image.asset->url,
        badge,
        description,
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
      setProducts(formattedProducts); // Update state
    } catch(error) {
      console.error("Error fetching products:", error);
    }
    }; fetchProducts();
  }, []); // Empty dependency array to run only once
  
  // Render products
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
