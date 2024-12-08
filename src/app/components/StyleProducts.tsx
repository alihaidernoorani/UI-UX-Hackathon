import React from "react";
import Image, { StaticImageData } from "next/image";

// Import images
import Style1 from "@/assets/Library Stool Chair 3.png";
import Style2 from "@/assets/Library Stool Chair 4.png";
import Style3 from "@/assets/Style Chair 3.png";
import Style4 from "@/assets/Library Stool Chair 1.png";
import Style5 from "@/assets/Library Stool Chair 1.png";

// components/PopularStyles.js
export default function PopularStyles() {
        const styles = [
            { img: Style2, alt: "Style 2" },
            { img: Style3, alt: "Style 3" },
            { img: Style4, alt: "Style 4" },
            { img: Style5, alt: "Style 5" },
          ];

    return (
      <div className="mt-12">
        <div className="w-[80%] mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">Explore New and Popular Styles</h2>
        <div className="grid grid-cols-3 gap-4">
          {styles.map((style, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden">
              <Image
                src={style.img}
                alt={style.alt}
                width={312}
                height={312}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  }
  