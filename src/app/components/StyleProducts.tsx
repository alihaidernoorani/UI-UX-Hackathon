"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

// Define the interface for products
interface StyleProductType {
  id: string;
  imageUrl: string;
  slug: string;
}

const StyleProducts: React.FC = () => {
  const [styleProducts, setStyleProducts] = useState<StyleProductType[]>([]);

  // Fetch products with "gallery" tag from Sanity

  useEffect(() => {
    try {
      const fetchStyleProducts = async () => {
        const query = `*[_type == "products" && "gallery" in tags][0...5]{
          _id,
          "imageUrl": image.asset->url,
          slug
        }`;

        const fetchedProducts = await client.fetch(query);

        // Map the fetched data to match the interface
        const formattedProducts = fetchedProducts.map((product: any) => ({
          id: product._id,
          imageUrl: product.imageUrl,
          slug: product.slug,
        }));

        setStyleProducts(formattedProducts);
      };

      fetchStyleProducts();
    } catch (error) {
      console.error("Error fetching style products:", error);
    }
  }, []);

  // Separate the main image and secondary images
  const mainImage = styleProducts.find((product) => product.slug === "Citrus-Edge");
  const secondaryImages = styleProducts.filter((product) => product !== mainImage);
  console.log(secondaryImages);

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
          {mainImage && (
            <Image
              src={mainImage.imageUrl}
              alt="Main Style"
              className="w-full h-auto"
              priority
              width={500}
              height={500} // Add fixed dimensions for optimization
            />
          )}
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4 p-4 md:w-1/2">
          {secondaryImages.map((product) => (
            <Image
              key={product.id}
              src={product.imageUrl}
              alt={`Style ${product.id}`}
              className="w-full h-auto"
              width={250}
              height={250} // Add fixed dimensions for optimization
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleProducts;