import React from 'react';
import Image from 'next/image';
import WingChair from '@/assets/Waing Chair.png';
import StoolChair from '@/assets/Stool Chair.png';
import DeskChair from '@/assets/Desk Chair.png';

const TopCategories = () => {
  const categories = [
    { title: "Wing Chair", img: WingChair },
    { title: "Wooden Chair", img: StoolChair },
    { title: "Desk Chair", img: DeskChair },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Top Categories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, idx) => (
            <CategoryCard key={idx} title={category.title} img={category.img} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopCategories;

// interface CategoryCardAttributs {
//     title: string;
//     img: string | StaticImageData;
// }

const CategoryCard = ({ title, img }: any) => {
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden group">
      <Image
        src={img}
        alt={title}
        width={400}
        height={400}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 flex items-center justify-center transition">
        <p className="text-white text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
};
