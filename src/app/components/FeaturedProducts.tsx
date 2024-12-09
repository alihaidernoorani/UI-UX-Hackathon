import Image from 'next/image';
import { BsCartDash } from "react-icons/bs";

import product1 from '@/assets/Library Stool Chair 1.png';
import product2 from '@/assets/Library Stool Chair 2.png';
import product3 from '@/assets/Library Stool Chair 3.png';
import product4 from '@/assets/Library Stool Chair 4.png';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  onSale: boolean;
  isNew: boolean;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Library Stool Chair',
    price: 20,
    image: product1.src, 
    onSale: false,
    isNew: true,
  },
  {
    id: 2,
    name: 'Library Stool Chair',
    price: 20,
    image: product2.src, 
    onSale: true,
    isNew: false,
  },
  {
    id: 3,
    name: 'Library Stool Chair',
    price: 20,
    image: product3.src, 
    onSale: false,
    isNew: false,
  },
  {
    id: 4,
    name: 'Library Stool Chair',
    price: 20,
    image: product4.src, 
    onSale: false,
    isNew: false,
  }
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="rounded-md overflow-hidden relative">
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
        width={200}
        height={200}
        className="w-full h-auto object-cover mb-4"
      />
     <div className='flex justify-between'>
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

const FeaturedProducts = () => {
  return (
    <section className="w-[80%] mx-auto">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;