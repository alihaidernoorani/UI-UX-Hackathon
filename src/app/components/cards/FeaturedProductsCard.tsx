import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
    image: string;
    name: string;
    price: number;
    onSale?: boolean;
    isNew?: boolean;
  }
  
const FeaturedProductsCard = ( product : CardProps) => {
    return (
      <div className='relative bg-[#F9F9F9] text-[#007580] p-8 rounded-lg  flex flex-col items-start space-y-4'>
        <div className='text-[#007580]'><Link href={`/product/${product.name.split(" ").join("-")}`}>
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
      </div>
        <h3 className='text-lg font-bold'>{product.name}</h3>
        <p className='text-base leading-6'>${product.price.toFixed(2)}</p>
      </div>
    );
    
};
  
export default FeaturedProductsCard