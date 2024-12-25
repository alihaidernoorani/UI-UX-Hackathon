import React from 'react';
import Image, { StaticImageData } from "next/image";
import WingChair from '@/assets/Wing-Chair.png';
import StoolChair from '@/assets/Stool-Chair.png';
import DeskChair from '@/assets/Desk-Chair.png';

interface CategoryCardAttributes {
  title: string;
  products: string | number;
  img: StaticImageData;
}

const TopCategories = () => {
  const categories: CategoryCardAttributes[] = [
    { title: "Wing Chair", products:"3,584", img: WingChair },
    { title: "Wooden Chair", products:157, img: StoolChair },
    { title: "Desk Chair", products:154, img: DeskChair },
  ];

  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* Top Categories Section */}
      <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
      <section className="h-full">     
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, idx) => (
            <CategoryCard key={idx} products={category.products} title={category.title} img={category.img} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopCategories;


// Category Card
const CategoryCard = ({ title, products, img }: CategoryCardAttributes) => {
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden group">
      <Image
        src={img}
        alt={title}
        width={400}
        height={400}
        className="object-cover w-full h-full"
      />
      <div className="absolute bg-black bg-opacity-70 w-full h-[85px] bottom-0 pl-4 pt-4">
        <p className="text-white text-xl font-semibold">{title}</p>
        <p className='text-white text-sm text-opacity-70'>{products} Products</p>
      </div>
    </div>
  );
};
