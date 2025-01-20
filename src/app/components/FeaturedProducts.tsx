"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./cards/ProductCard";
import { client } from "@/sanity/lib/client";

// Define an interface for the Product type
interface ProductType {
  _id: string;
  title: string;
  price: number;
  image: string;
  badge: string;
}

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]); // State for products
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        // GROQ query to fetch products with "featured" in their tags
        const query = `*[_type == "products" && "featured" in tags][0...4]{
          title,
          price,
          "image": image.asset->url,
          badge
        }`;

        const fetchedProducts: ProductType[] = await client.fetch(query); // Explicitly type the fetched data
        setProducts(fetchedProducts); // Directly set the fetched products
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="w-[80%] mt-20 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      {loading ? ( // Show loading message while data is being fetched
        <p>Loading featured products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: ProductType, index: number) => (
            <ProductCard
              key={index}
              product={{
                name: product.title,
                price: product.price,
                image: product.image,
                onSale: product.badge === "On Sale", // Determine onSale based on badge
                isNew: product.badge === "New", // Determine isNew based on badge
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
