import React from 'react';
import { FaCheck } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        {/* Top header */}
        <div className='bg-[#272343] w-full h-[45px] flex justify-around items-center text-white'>
            <div className='flex justify-between gap-2 items-center opacity-[70%]'>
            <FaCheck className='text-base'/> <span className=' text-[13px]'>Free shipping on all orders over $50</span> 
            </div>
            <div className='text-[13px]'>
                <select name="" id="" className='bg-[#272343] '>
                    <option value="">Eng</option>
                </select>
                <span>Faqs</span>
                <span>Need Help</span>
            </div>
        </div>

    </div>
  )
}

export default Navbar