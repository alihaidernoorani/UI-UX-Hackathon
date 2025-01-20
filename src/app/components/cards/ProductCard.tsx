import Image from "next/image";
import Link from "next/link";

import { BsCartDash } from "react-icons/bs";

interface Product {
  name: string;
  price: number;
  image: string;
  onSale: boolean;
  isNew: boolean;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="rounded-md overflow-hidden relative shadow-md transition-transform transform hover:scale-105 bg-white">
      <Link href={`/product/${product.name.split(" ").join("-")}`}>
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-sm text-sm font-semibold">
            New
          </div>
        )}
        {product.onSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-sm text-sm font-semibold">
            Sale
          </div>
        )}

        <Image
          src={product.image}
          alt={product.name}
          width={280}
          height={200}
          className="object-cover mb-4"
        />
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
          <button
            className="p-2 rounded-full hover:bg-[#029FAE] hover:text-white transition-all duration-200"
            aria-label="Add to cart"
          >
            <BsCartDash className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
