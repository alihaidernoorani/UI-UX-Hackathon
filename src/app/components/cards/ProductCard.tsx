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
    <div className="rounded-md overflow-hidden relative w-[280px]"> {/* Set fixed width */}
      <Link href={`/product/${product.name.split(" ").join("-")}`}>
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-sm">
            New
          </div>
        )}
        {product.onSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-sm">
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
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">${product.price}</p>
        </div>
        <button
          className="p-4 rounded-lg hover:bg-[#029FAE] hover:text-white transition-all duration-200"
          aria-label="Add to cart"
        >
          <BsCartDash className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;