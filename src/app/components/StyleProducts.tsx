"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../../sanity/lib/client";

// Define the interface for products
interface StyleProductType {
  imageUrl: string; // URL of the product image
  slug: string; // Slug for the product
}

const StyleProducts: React.FC = () => {
  const [styleProducts, setStyleProducts] = useState<StyleProductType[]>([]); // State for products
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  // Fetch products with the "gallery" tag from Sanity
  useEffect(() => {
    const fetchStyleProducts = async () => {
      try {
        setLoading(true); // Set loading to true before fetching

        const query = `*[_type == "products" && "gallery" in tags][0...5]{
          "imageUrl": image.asset->url,
          slug
        }`;

        const fetchedProducts: StyleProductType[] = await client.fetch(query); // Explicitly type fetched data
        setStyleProducts(fetchedProducts); // Directly assign fetched products to state
      } catch (error) {
        console.error("Error fetching style products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchStyleProducts();
  }, []);

  // Separate the main image and secondary images
  const mainImage = styleProducts.find((product) => product.slug === "Citrus-Edge");
  const secondaryImages = styleProducts.filter((product) => product !== mainImage);

  return (
    <div className="flex justify-center mt-20">
      {/* Outer Container */}
      <div className="w-[80%] flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="flex-none w-full md:w-1/2 p-4 relative">
          {/* Vertical Rotated Text */}
          <div className="absolute md:-rotate-90 md:left-[-190px] left-8 top-1 md:top-1/2 text-center transform -translate-y-1/2 text-[10px] md:text-lg lg:text-xl font-semibold">
            EXPLORE NEW AND POPULAR STYLES
          </div>
          {loading ? ( // Show loading indicator while fetching data
            <p className="text-center">Loading styles...</p>
          ) : (
            mainImage && (
              <Image
                src={mainImage.imageUrl}
                alt="Main Style"
                className="w-full h-auto"
                priority
                width={500}
                height={500}
              />
            )
          )}
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4 p-4 md:w-1/2">
          {secondaryImages.map((product: StyleProductType, index: number) => (
              <Image
                key={index}
                src={product.imageUrl}
                alt={`Style ${product.slug}`}
                className="w-full h-auto"
                width={250}
                height={250}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default StyleProducts;
