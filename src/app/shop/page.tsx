'use client';
import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import ProductListing from '../components/(shop)/ProductListing';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [instagramProducts, setInstagramProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // GROQ query to fetch products
        const query1 = `*[_type == "products"][0...12]{
          "id":_id, 
          "name": title,
          price,
          "onSale": badge == "Sales",
          "isNew": badge == "New",
          "image": image.asset->url
        }`;

        const query2 = `*[_type == "products" && "instagram" in tags][0...6]{
          "id":_id,
          "image": image.asset->url
        }`;

        const fetchedProducts = await client.fetch(query1);
        const fetchedInstagramProducts = await client.fetch(query2);

        setProducts(fetchedProducts);
        setInstagramProducts(fetchedInstagramProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ProductListing products={products} instagramProducts={instagramProducts} />
    </div>
  );
};

export default Shop;