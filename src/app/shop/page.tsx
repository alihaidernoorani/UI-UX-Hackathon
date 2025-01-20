"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

// Define the Product interface
interface ProductType {
  title: string; // Product title
  price: number; // Product price
  image: string; // Image URL
  badge?: string; // Optional badge for sale or new products
}

// Define Instagram Product interface
interface InstagramProductType {
  image: string; // Instagram product image URL
}

const OurProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]); // State for products
  const [instagramProducts, setInstagramProducts] = useState<InstagramProductType[]>([]); // State for Instagram products
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true); // Loading state for products
  const [loadingInstagram, setLoadingInstagram] = useState<boolean>(true); // Loading state for Instagram products

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoadingProducts(true); // Start loading for products
        setLoadingInstagram(true); // Start loading for Instagram products

        // GROQ query to fetch products
        const query1 = `*[_type == "products"][0...12]{
          title,
          price,
          badge,
          "image": image.asset->url
        }`;

        const query2 = `*[_type == "products" && "instagram" in tags][0...6]{
          "image": image.asset->url
        }`;

        // Fetch products and Instagram products
        const [fetchedProducts, fetchedInstagram] = await Promise.all([
          client.fetch(query1),
          client.fetch(query2),
        ]);

        setProducts(fetchedProducts); // Directly use fetched products
        setInstagramProducts(fetchedInstagram); // Directly use fetched Instagram products
      } catch (error) {
        console.error("Error fetching products or Instagram products:", error);
      } finally {
        setLoadingProducts(false); // Stop loading for products
        setLoadingInstagram(false); // Stop loading for Instagram products
      }
    };

    fetchProducts();
  }, []);

  // Component to render products
  const Products = () => (
    <section>
      {/* All Products Section */}
      <div className="w-[80%] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">All Products</h2>
        {loadingProducts ? ( // Show loading message while fetching products
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
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#1E28320D] flex flex-col items-center mt-20 mx-auto">
        <div className="max-w-[760px] text-center">
          <h1 className="md:text-xl xl:text-2xl 2xl:text-4xl text-center font-medium pb-10 mt-20">
            Or Subscribe To The Newsletter
          </h1>
          <input
            type="email"
            placeholder="Email Address..."
            className="bg-transparent w-2/3 mr-3 border-b-2 pb-1 border-black"
          />
          <button className="bg-transparent mr-3 border-b-2 pb-1 border-black">
            SUBMIT
          </button>
        </div>

        {/* Instagram Section */}
        <div className="flex flex-col items-center text-center mx-auto py-20">
          <h1 className="md:text-xl xl:text-2xl 2xl:text-4xl font-medium mb-10">
            Follow Products And Discounts on Instagram
          </h1>
          {loadingInstagram ? ( // Show loading message while fetching Instagram products
            <p className="text-center">Loading Instagram products...</p>
          ) : (
            <div className="flex flex-col sm:flex-wrap lg:flex-row gap-2 justify-around">
              {instagramProducts.map((product: InstagramProductType, index: number) => (
                <Image
                  key={index}
                  src={product.image}
                  alt="Instagram Product"
                  width={187}
                  height={187}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );

  return <Products />;
};

export default OurProducts;
