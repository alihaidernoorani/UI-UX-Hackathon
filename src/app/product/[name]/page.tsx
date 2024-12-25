import React from 'react';
import Image, { StaticImageData } from 'next/image';
import product1 from '@/assets/Library-Stool-Chair-1.png';
import product2 from '@/assets/Library-Stool-Chair-2.png';
import product3 from '@/assets/Library-Stool-Chair-3.png';
import product4 from '@/assets/Library-Stool-Chair-4.png';
import product5 from '@/assets/Wing-Chair.png';
import { BsCartDash } from "react-icons/bs";

interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  onSale: boolean;
  isNew: boolean;
}

const products: Product[] = [
  { id: 1, name: 'Library Stool Chair 1', price: 20, image: product1, onSale: false, isNew: true },
  { id: 2, name: 'Library Stool Chair 2', price: 20, image: product2, onSale: true, isNew: false },
  { id: 3, name: 'Library Stool Chair 3', price: 20, image: product3, onSale: false, isNew: false },
  { id: 4, name: 'Library Stool Chair 4', price: 20, image: product4, onSale: false, isNew: false },
  { id: 5, name: 'Wing Chair', price: 20, image: product5, onSale: false, isNew: true },
];

const ProductPage = ({ params }: { params: { name: string } }) => {
  const product = products.find((p) => 
    p.name.toLowerCase().replace(/ /g, '-') === params.name.toLowerCase() 
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='w-[80%] mx-auto mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'> 
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            objectFit="contain"
          />
        </div>
        <div className='text-center md:text-start space-y-4'>
          <h1 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-4'>Library Stool Chair</h1>
          <span className='bg-[#029FAE] text-white rounded-full p-2'>{`$${product.price}.00 USD`}</span>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sunt sit aperiam at ab consequuntur architecto quia hic perferendis aspernatur.</p>
          <button className='bg-[#029FAE] text-white px-6 py-3 rounded-lg'><BsCartDash className='inline mr-2 text-xl'/>Add To Cart</button>
        </div>
      </div>

      <div className='mt-20'>
        <h1 className='md:text-xl lg:text-2xl xl:text-3xl font-bold mb-10 text-center md:text-start'>FEATURED PRODUCTS</h1>
        <div className="flex flex-col flex-wrap md:flex-row gap-2 justify-around items-center"> 
          {products.map(product => (
            <Image key={product.id} src={product.image} alt={product.name} width={187} height={187}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;