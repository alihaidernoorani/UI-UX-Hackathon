"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { BsCartDash } from "react-icons/bs";
import FeaturedProductsCard from "@/app/components/cards/FeaturedProductsCard";

const ProductPage = ({ params }: { params: { name: string } }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // GROQ query to fetch all products
        const query1 = `*[_type == "products"]{
              "id":_id, 
              "name": title,
              price,
              "onSale": badge == "Sales",
              "isNew": badge == "New",
              "image": image.asset->url
            }`;

        const query2 = `*[_type == "products" && "featured" in tags][0...5]{
              "id":_id, 
              "name": title,
              price,
              "onSale": badge == "Sales",
              "isNew": badge == "New",
              "image": image.asset->url
            }`;

        const [fetchedProducts, fetchedFeaturedProducts] = await Promise.all([
          client.fetch(query1),
          client.fetch(query2),
        ]);

        setProducts(fetchedProducts);
        setFeaturedProducts(fetchedFeaturedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Find the specific product based on the slug from the URL params
  const product = products.find((p) => p.name.split(' ').join('-') === params.name);

  if (!product) {
    return <div className="text-center mt-20">Product not found</div>;
  }

  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            objectFit="contain"
          />
        </div>
        {/* Product Details */}
        <div className="text-center md:text-start space-y-4">
          <h1 className="text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-4">
            {product.name}
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
        <div className="flex flex-row flex-wrap gap-4">
          {featuredProducts.map((product: ProductType) => (
            <FeaturedProductsCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              onSale={product.onSale}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
