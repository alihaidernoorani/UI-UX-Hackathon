import React from 'react';
import Image from "next/image";
import Style1 from "@/assets/Library Stool Chair 3.png";
import Style2 from "@/assets/Library Stool Chair 4.png";
import Style3 from "@/assets/Style Chair 3.png";
import Style4 from "@/assets/Library Stool Chair 1.png";
import Style5 from "@/assets/Library Stool Chair 1.png";

const StyleProducts = () => {
  return (
    <div className="flex justify-center mt-10">
      {/* Outer Container */}
      <div className="w-[80%] flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="flex-none w-full md:w-1/2 p-4 relative">
          {/* Vertical Rotated Text */}
          <div className="absolute md:-rotate-90 md:left-[-190px] left-8 top-1 md:top-1/2 text-center transform -translate-y-1/2 text-[10px] md:text-lg lg:text-xl font-semibold">
            EXPLORE NEW AND POPULAR STYLES
          </div>
          <Image
            src={Style1}
            alt="Main Style"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4 p-4 md:w-1/2">
          <Image src={Style2} alt="Style 2" className="w-full h-auto" />
          <Image src={Style3} alt="Style 3" className="w-full h-auto" />
          <Image src={Style4} alt="Style 4" className="w-full h-auto" />
          <Image src={Style5} alt="Style 5" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default StyleProducts;
