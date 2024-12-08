import React from "react";
import Image from "next/image";

// Import images
import Style1 from "@/assets/Library Stool Chair 3.png";
import Style2 from "@/assets/Library Stool Chair 4.png";
import Style3 from "@/assets/Style Chair 3.png";
import Style4 from "@/assets/Library Stool Chair 1.png";
import Style5 from "@/assets/Library Stool Chair 1.png";

export default function PopularStyles() {
  const styles = [
    { img: Style2, alt: "Style 2" },
    { img: Style3, alt: "Style 3" },
    { img: Style4, alt: "Style 4" },
    { img: Style5, alt: "Style 5" },
  ];

  return (
    <div className="mt-12">
      <div className="flex flex-col md:flex-row w-[90%] mx-auto mt-10 items-center">
        {/* Left section with rotated text and first image */}
        <h2 className="md:-rotate-90 text-lg md:text-2xl font-semibold mb-4 whitespace-nowrap">
            Explore New and Popular Styles
          </h2>
        <div className="flex flex-col items-center md:items-start md:mr-6">
          
          <Image
            src={Style1}
            alt="Style 1"
            width={312}
            height={312}
            className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover"
          />
        </div>

        {/* Grid section for other images */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {styles.map((style, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden">
              <Image
                src={style.img}
                alt={style.alt}
                width={312}
                height={312}
                className="w-full h-[200px] md:h-[250px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
