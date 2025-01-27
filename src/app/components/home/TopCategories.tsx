import React from "react";
import CategoryCard from "../cards/CategoryCard";

const TopCategories: React.FC<{ categories: CategoryType[] }> = ({ categories }) => {
  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* Top Categories Section */}
      <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
      <section className="h-full">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category: CategoryType, index: number) => (
              <CategoryCard
                key={index}
                products={category.products}
                name={category.name}
                image={category.image} 
              />
            ))}
          </div>
      </section>
    </div>
  );
};

export default TopCategories;
