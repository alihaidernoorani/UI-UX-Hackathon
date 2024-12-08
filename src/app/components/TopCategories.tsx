import React from 'react';
import Image, { StaticImageData } from "next/image";
import WingChair from '@/assets/Wing Chair.png';
import StoolChair from '@/assets/Stool Chair.png';
import DeskChair from '@/assets/Desk Chair.png';

const TopCategories = () => {
  const categories = [
    { title: "Wing Chair", img: WingChair },
    { title: "Wooden Chair", img: StoolChair },
    { title: "Desk Chair", img: DeskChair },
  ];

  return (
    <div className="w-[80%] mx-auto mt-10 my-6">
      {/* Top Categories Section */}
      <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
      <section className=" h-full">     
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category, idx) => (
            <CategoryCard key={idx} title={category.title} img={category.img} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopCategories;

interface CategoryCardAttributs {
    title: string;
    img: string | StaticImageData;
}

const CategoryCard = ({ title, img }: CategoryCardAttributs) => {
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden group">
      <Image
        src={img}
        alt={title}
        width={400}
        height={400}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center h-[85px] top-44">
        <p className="text-white text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
};
