import React from 'react';
import Image from 'next/image';
import { FaShippingFast } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { PiPlant } from "react-icons/pi";

import Chair from '@/assets/Library Stool Chair 1.png';
import Sofa from '@/assets/Large Sofa.png';
import DandyChair1 from '@/assets/Dandy Chair 1.png';
import DandyChair2 from '@/assets/Dandy Chair 2.png';

import BrandDifferentCard from '../components/BrandDifferentCard';
import ProductCard from '../components/ProductCard';

const About = () => {
  return (
    <div className='w-[80%] mx-auto my-20'>
      {/* Top picture section */}
      <div className='flex flex-col md:flex-row gap-4 items-stretch'>
        {/* About us section */}
        <div className='bg-[#007580] text-white flex-1 px-2 lg:px-16 py-10 space-y-4 flex flex-col justify-between'>
          <div>
            <h1 className='font-bold text-xl lg:text-[32px]'>About Us - Comforty</h1>
            <p className='leading-6 text-base lg:text-lg mt-4'>
              At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
            </p>
          </div>
          <button className='bg-[#F9F9F926] bg-opacity-15 w-fit text-base py-3 px-6 border border-white hover:bg-white hover:text-[#007580] transition-all self-start'>
            View Collection
          </button>
        </div>

        {/* Picture of chair */}
        <div className='flex-1'>
          <Image 
            src={Chair} 
            alt='Chair' 
            className='w-full h-full object-cover' 
            priority 
          />
        </div>
      </div>

      {/* What makes our brand different section */}
      <div className='mt-20'>
        <h2 className='font-semibold text-2xl lg:text-[32px] text-center mb-6'>What Makes Our Brand Different</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <BrandDifferentCard 
            icon={<FaShippingFast className='text-3xl' />} 
            heading='Next Day as Standard' 
            text='Order before 3pm and get your order the next day as standard' 
          />
          <BrandDifferentCard 
            icon={<CiCircleCheck className='text-3xl' />} 
            heading='Made by True Artisans' 
            text='Handmade crafted goods made with real passion and craftsmanship' 
          />
          <BrandDifferentCard 
            icon={<CiCreditCard1 className='text-3xl' />} 
            heading='Unbeatable Prices' 
            text='For our materials and quality, you won’t find better prices anywhere' 
          />
          <BrandDifferentCard 
            icon={<PiPlant className='text-3xl' />} 
            heading='Recycled Packaging' 
            text='We use 100% recycled materials to ensure our footprint is more manageable' 
          />
        </div>
      </div>
      <div className='mt-20'>
      <h2 className='font-semibold text-2xl lg:text-[32px] mb-6'>
            Our Popular Products
        </h2>
        <div className='flex flex-col md:flex-row gap-4'>
            <ProductCard img={Sofa} name='The Popular Suede Sofa'/>
            <ProductCard img={DandyChair1} name='The Dandy Chair'/>
            <ProductCard img={DandyChair2} name='The Dandy Chair'/>
        </div>
      </div>
    </div>
  );
};

export default About;