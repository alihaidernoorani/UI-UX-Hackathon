import React from 'react';
import { FaCheck } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsCartDash } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';


const Navbar = () => {
  return (
    <div>
        {/* Top header */}
        <div className='bg-[#272343] w-full h-[45px] flex justify-around items-center text-white '>
            <div className='flex justify-between gap-2 items-center opacity-[70%]'>
            <FaCheck className='text-base'/> <span className=' text-[13px]'>Free shipping on all orders over $50</span> 
            </div>
            <div className='flex text-[13px] space-x-6 opacity-[70%]'>
                <select name="" id="" className='bg-[#272343] '>
                    <option value="">Eng</option>
                </select>
                <span>Faqs</span>
                <div className='flex justify-between items-center gap-[6px]'><AiOutlineExclamationCircle className='text-base'/> <span>Need Help</span></div>
            </div>
        </div>
        {/* Second Header */}
        <div className='bg-[#F0F2F3] flex justify-around items-center w-full h-[84px]'>
            <div>
              <Image src={Logo} alt='Logo'/>
            </div>
            <button className='bg-white text-xs px-4 py-[11px] gap-3 rounded-sm flex justify-center items-center'>
              <BsCartDash />
              Cart
            </button>
        </div>
        {/* Navbar */}
        <div className='flex justify-around items-center bg-white w-full h-[74px] text-sm'>
          <div>
            <ul className='flex gap-8'>
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link  href={'/'}>Shop</Link>
              </li>
              <li>
                <Link  href={'/'}>Product</Link>
              </li>
              <li>
                <Link  href={'/'}>Pages</Link>
              </li>
              <li>
                <Link  href={'/'}>About</Link>
              </li>
            </ul>
          </div>
          <div>
              <span>Contact: <span className='font-medium'>(808) 555-0111</span></span>
          </div>
        </div>

    </div>
  )
}

export default Navbar