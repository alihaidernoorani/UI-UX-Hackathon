"use client";

import React, { useState, useEffect } from "react";
import CategoryCard from "./cards/CategoryCard";
import { client } from "../../sanity/lib/client";

// Define an interface for the category type
interface CategoryType {
  title: string;
  image: string; 
  products: string | number; 
}

const TopCategories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true); 
        const query = `*[_type == "categories"]{
          title,
          "image": image.asset->url,
          products
        }`;

        const fetchedCategories: CategoryType[] = await client.fetch(query); 
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* Top Categories Section */}
      <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
      <section className="h-full">
        {loading ? ( 
          <p>Loading categories...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category: CategoryType, index: number) => (
              <CategoryCard
                key={index}
                products={category.products}
                name={category.title}
                image={category.image} 
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default TopCategories;
