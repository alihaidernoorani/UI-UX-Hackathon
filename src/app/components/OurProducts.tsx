"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./cards/ProductCard";
import { client } from "@/sanity/lib/client";

// Define the Product interface
interface ProductType {
  _id: string; // Unique ID
  title: string; // Product title
  price: number; // Product price
  image: string; // Image URL
  badge?: string; // Optional badge property
}

const OurProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]); // State for products
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data

        // GROQ query to fetch products
        const query = `*[_type == "products"][0...8]{
          title,
          price,
          badge,
          "image": image.asset->url
        }`;

        const fetchedProducts: ProductType[] = await client.fetch(query); // Explicitly type the fetched data
        setProducts(fetchedProducts); // Directly set the fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run only once

  // Render products
  return (
    <section className="w-[80%] mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      {loading ? ( // Show loading message while fetching data
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: ProductType, index: number) => (
            <ProductCard
              key={index}
              product={{
                name: product.title,
                price: product.price,
                image: product.image,
                onSale: product.badge === "On Sale",
                isNew: product.badge === "New",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default OurProducts;
