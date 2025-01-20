import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PopularProductCardType {
  img: string;
  name: string;
  price: number;
}

const PopularProductCard = ({ img, name, price }: PopularProductCardType) => {
  return (
    <Link href={`/product/${name.split(" ").join("-")}`} className="flex flex-col items-center"> 
       <div className="relative h-[375px]">
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority
        />
        </div>
        <div className="">
          <h3>{name}</h3>
          <span>${price.toFixed(2)}</span> 
        </div>
      
    </Link>
  );
};

export default PopularProductCard;