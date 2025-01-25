import React from "react";
import ProductCard from "../cards/ProductCard";

const FeaturedProducts: React.FC<{ products: ProductType[] }> = ({ products }) => {
  return (
    <section className="w-[80%] mt-20 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: ProductType) => (
            <ProductCard
              key={product.id}
              product={{
                name: product.name,
                price: product.price,
                image: product.image,
                onSale: product.onSale,
                isNew: product.isNew, 
              }}
            />
          ))}
        </div>
    </section>
  );
};

export default FeaturedProducts;
