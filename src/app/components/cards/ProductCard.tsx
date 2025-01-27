import Image from "next/image";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="rounded-md overflow-hidden relative shadow-md transition-transform transform hover:scale-105 bg-white">
      <Link href={`/product/${product.slug}`}>
        <div className="relative w-full h-[230px] overflow-hidden rounded-md">
          {product.isNew && (
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-sm text-sm font-semibold">
              New
            </div>
          )}
          {product.onSale && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-sm text-sm font-semibold">
              Sale
            </div>
          )}

          {/* Center image vertically using flexbox and set sizes directly on Image */}
          <div className="flex items-center justify-center h-full">
            <Image
              src={product.image}
              alt={product.name}
              width={280} 
              height={280} 
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-base font-semibold">{product.name}</h3>
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