"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from "@/sanity/lib/client";
import { BsCartDash } from "react-icons/bs";

interface ProductType {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
}

const ProductPage = ({ params }: { params: { name: string } }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "products"]{
          _id,
          name,
          price,
          "imageUrl": image[0].asset->url,
          "slug": slug.current
        }`;
        const fetchedProducts = await client.fetch(query);

        const formattedProducts = fetchedProducts.map((product: any) => ({
          id: product._id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          slug: product.slug,
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const product = products.find((p) => p.slug === params.name);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-[80%] mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
            objectFit="contain"
          />
        </div>
        <div className="text-center md:text-start space-y-4">
          <h1 className="text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-4">{product.name}</h1>
          <span className="bg-[#029FAE] text-white rounded-full p-2">{`$${product.price.toLocaleString()}.00 USD`}</span>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sunt sit aperiam at ab consequuntur architecto quia hic perferendis aspernatur.
          </p>
          <button className="bg-[#029FAE] text-white px-6 py-3 rounded-lg">
            <BsCartDash className="inline mr-2 text-xl" />
            Add To Cart
          </button>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="md:text-xl lg:text-2xl xl:text-3xl font-bold mb-10 text-center md:text-start">FEATURED PRODUCTS</h1>
        <div className="flex flex-col flex-wrap md:flex-row gap-2 justify-around items-center">
          {products.map((product) => (
            <div key={product.id} className="p-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={187}
                height={187}
              />
              <p className="text-center mt-2">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
