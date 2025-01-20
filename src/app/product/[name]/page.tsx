"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/app/components/cards/ProductCard";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { BsCartDash } from "react-icons/bs";

interface ProductType {
  title: string;
  price: number;
  image: string;
  slug: string;
  badge: string;
}

const ProductPage = ({ params }: { params: { name: string } }) => {
  const [products, setProducts] = useState<ProductType[]>([]); 
  const [featuredproducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Start loading
        // GROQ query to fetch all products
        const query1 = `*[_type == "products"]{
          title,
          price,
          "image": image.asset->url,
          slug
        }`;

        const query2 = `*[_type == "products" && "featured" in tags][0...5]{
          title,
          price,
          "image": image.asset->url,
          badge
        }`;

       const [fetchedProducts, fetchedFeaturedProducts] = await Promise.all([
                 client.fetch(query1),
                 client.fetch(query2),
               ]);

        setProducts(fetchedProducts);
        setFeaturedProducts(fetchedFeaturedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>; // Display a loading message while data is being fetched
  }

  // Find the specific product based on the slug from the URL params
  const product = products.find((p) => p.slug === params.name);

  if (!product) {
    return <div className="text-center mt-20">Product not found</div>; // Handle cases where the product is not found
  }

  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            objectFit="contain"
          />
        </div>
        {/* Product Details */}
        <div className="text-center md:text-start space-y-4">
          <h1 className="text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-4">
            {product.title}
          </h1>
          <span className="bg-[#029FAE] text-white rounded-full p-2">{`$${product.price.toLocaleString()}.00 USD`}</span>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sunt
            sit aperiam at ab consequuntur architecto quia hic perferendis
            aspernatur.
          </p>
          <button className="bg-[#029FAE] text-white px-6 py-3 rounded-lg">
            <BsCartDash className="inline mr-2 text-xl" />
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-20">
      <h1 className="md:text-xl lg:text-2xl xl:text-3xl font-bold mb-10 text-center md:text-start">
        FEATURED PRODUCTS
      </h1>
      <div className="flex flex-row flex-wrap gap-4"> {/* Added flex-wrap for wrapping */}
        {featuredproducts.map((product: ProductType, index: number) => (
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
    </div>
  </div>
);
};

export default ProductPage;
