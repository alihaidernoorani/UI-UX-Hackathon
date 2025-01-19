"use client";

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/cards/ProductCard';
import Image from 'next/image'; // Import Image component
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

// Define Instagram Product interface
interface InstagramProductType {
  id: string;
  imageUrl: string;
}

const OurProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]); 
  const [instagramProducts, setInstagramProducts] = useState<InstagramProductType[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      // GROQ query to fetch products
      const query1 = `*[_type == "products"][0...12]{
        _id,
        title,
        price,
        badge,
        "imageUrl": image.asset->url,
        description
      }`;

      const query2 = `*[_type == "products" && "instagram" in tags][0...6]{
        _id,
        "imageUrl": image.asset->url
      }`;

      try {
        const fetchedProducts = await client.fetch(query1);
        const fetchedInstagram = await client.fetch(query2);

        // Map the fetched data to match the Product interface
        const formattedProducts = fetchedProducts.map((product: any) => ({
          id: product._id,
          name: product.title,
          price: product.price,
          image: product.imageUrl,
          onSale: product.badge === 'On Sale',
          isNew: product.badge === 'New',
        }));

        const formattedInstagram = fetchedInstagram.map((insta: any) => ({
          id: insta._id,
          imageUrl: insta.imageUrl,
        }));

        setProducts(formattedProducts);
        setInstagramProducts(formattedInstagram);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run only once

  
  const Products = () => (
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
        {instagramProducts.length > 0 && (
          <div className="flex flex-col items-center text-center mx-auto py-20">
            <h1 className="md:text-xl xl:text-2xl 2xl:text-4xl font-medium mb-10">
              Follow Products And Discounts on Instagram
            </h1>
            <div className="flex flex-col sm:flex-wrap lg:flex-row gap-2 justify-around">
              {instagramProducts.map((product) => (
                <Image
                  key={product.id}
                  src={product.imageUrl}
                  alt="Instagram Product"
                  width={187}
                  height={187}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );

  return <Products />;
};

export default OurProducts;
