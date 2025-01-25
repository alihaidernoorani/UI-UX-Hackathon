import React from "react";
import Image from "next/image";
import ProductCard from "../cards/ProductCard";

interface ProductListingProps {
  products: ProductType[];
  instagramProducts: InstagramProductType[];
}

const ProductListing: React.FC<ProductListingProps> = ({ products, instagramProducts }) => {
  return (
    <div>
      {/* All Products Section */}
      <div className="w-[80%] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">All Products</h2>
        {products.length === 0 ? (
          <p className="text-center">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#1E28320D] flex flex-col items-center mt-20 mx-auto py-10">
        <div className="max-w-[760px] text-center">
          <h1 className="md:text-xl xl:text-2xl 2xl:text-4xl text-center font-medium pb-10">
            Or Subscribe To The Newsletter
          </h1>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Email Address..."
              className="bg-transparent w-2/3 mr-3 border-b-2 pb-1 border-black"
            />
            <button className="bg-transparent border-b-2 pb-1 border-black">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
       <div className="flex flex-col items-center text-center mx-auto py-20">
        <h1 className="md:text-xl xl:text-2xl 2xl:text-4xl font-medium mb-10">
          Follow Products And Discounts on Instagram
        </h1>
        {instagramProducts.length === 0 ? (
          <p className="text-center">Loading Instagram products...</p>
        ) : (
          <div className="flex flex-col sm:flex-wrap lg:flex-row gap-2 justify-around">
            {instagramProducts.map((product) => (
              <Image
                key={product.id}
                src={product.image}
                alt="Instagram Product"
                width={187}
                height={187}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
