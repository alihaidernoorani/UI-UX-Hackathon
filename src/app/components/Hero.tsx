import React from 'react';
import Image from 'next/image';
import Product1 from '@/assets/Product Image.png';
import Logo1 from '@/assets/Zapier Logo.png';
import Logo2 from '@/assets/Pipedrive Logo.png';
import Logo3 from '@/assets/CIB Bank Logo.png';
import Logo4 from '@/assets/Seven Logo.png';
import Logo5 from '@/assets/Burnt Toast Logo.png';
import Logo6 from '@/assets/PandaDoc Logo.png';
import Logo7 from '@/assets/MOZ Logo.png';

const Hero = () => {
  return (
    <div className="flex flex-col justify-self-center items-center w-screen md:w-[80%] max-w-[1740px] h-[850px]">
      {/* Content Container */}
      <div className="bg-[#F0F2F3] flex flex-col items-center md:flex-row px-4 py-6">
        {/* Left Section */}
        <div className="flex flex-col justify-center md:w-2/3 lg:w-1/2 text-left">
          <span className="text-sm md:text-base text-gray-500 mb-2">
            WELCOME TO CHAIRY
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Best Furniture Collection <br /> For Your Interior.
          </h1>
          <button className="bg-[#00C2C5] text-white text-lg px-6 py-3 w-[171px] h-[52px] rounded-lg shadow-md hover:bg-[#00A9AA] transition">
            Shop Now →
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src={Product1}
            alt="Furniture Chair"
            className="w-[300px] md:w-[450px] lg:w-[500px] object-contain"
          />
        </div>
      </div>

      {/* Companies Logos Section */}
      <div className="flex flex-wrap justify-between items-center w-full max-w-[1740px]  mt-8 space-x-4">
        <Image src={Logo1} alt="Zapier Logo" width={85} height={87} />
        <Image src={Logo2} alt="Pipedrive Logo" width={85} height={87} />
        <Image src={Logo3} alt="CIB Bank Logo" width={85} height={87} />
        <Image src={Logo4} alt="Seven Logo" width={85} height={87} />
        <Image src={Logo5} alt="Burnt Toast Logo" width={85} height={87} />
        <Image src={Logo6} alt="PandaDoc Logo" width={85} height={87} />
        <Image src={Logo7} alt="MOZ Logo" width={85} height={87} />
      </div>
    </div>
  );
};

export default Hero;