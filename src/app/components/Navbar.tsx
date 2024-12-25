"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaCheck } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsCartDash } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const productNames = ['Library-Stool-Chair-1','Library-Stool-Chair-2','Library-Stool-Chair-3', 'Library-Stool-Chair-4', 'Wing-Chair']

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="bg-[#272343] flex justify-center w-full h-[45px]">
        <div className="flex justify-between items-center w-full md:w-[80%] h-full text-white text-xs px-2">
          <div className="flex items-center gap-2 opacity-70">
            <FaCheck className="text-base" />
            <span>Free shipping on all orders over $50</span>
          </div>
          <div className="flex items-center space-x-6 opacity-70">
            <select name="language" className="bg-[#272343] text-white outline-none">
              <option value="eng">Eng</option>
            </select>
            <span><Link href="/pages/faq">Faqs</Link></span>
            <div className="flex items-center gap-2">
              <AiOutlineExclamationCircle className="text-base" />
              <span><Link href="/pages/contact">Need Help</Link></span>
            </div>
          </div>
        </div>
      </div>
      {/* Second Header */}
      <div className="bg-[#F0F2F3] flex justify-center w-full h-[84px]">
        <div className="flex justify-between items-center w-full md:w-[80%] h-full px-2">
          <Link href="/"><Image src={Logo} alt="Logo" width={150} height={50} /></Link>
          <button className="bg-white text-xs px-4 py-2 rounded-sm flex items-center gap-2 shadow hover:shadow-lg">
            <BsCartDash />
            Cart
          </button>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="relative bg-white w-full h-[74px] flex justify-center border-b">
        <div className="flex justify-between items-center w-full md:w-[80%] h-full px-2">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center text-sm">
            <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
              <Link href="/shop">Shop</Link>
            </li><li className="relative group">
              Product
              <ul className="absolute z-10 hidden group-hover:inline-block left-0 top-full bg-white text-nowrap p-2 space-y-2 rounded-md shadow-md">
                {productNames.map((prod) => {
                  const cleanedProd = prod.replace(/-/g, " "); // Replace dashes with spaces
                  return (
                    <li key={prod} className="hover:text-[#029FAE] hover:font-bold transition-colors">
                      <Link href={`/product/${prod}`}>{cleanedProd}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="relative group">
              Pages
              <ul className="absolute z-10 hidden group-hover:inline-block left-0 top-full bg-white text-nowrap p-2 space-y-2 rounded-md shadow-md">
                  <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
                    <Link href="/pages/contact">Contact Us</Link>
                  </li>
                  <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
                    <Link href="/pages/faq">FAQ</Link>
                  </li>
              </ul>
            </li>
            <li className="hover:text-[#029FAE] transition-colors">
              <Link href="/about">About</Link>
            </li>
          </ul>

          {/* Contact Information */}
          <div className="hidden md:block text-sm">
            <span>
              Contact: <span className="font-medium">(808) 555-0111</span>
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center text-xl text-[#272343]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[74px] w-full bg-white shadow-lg p-4 md:hidden">
            <ul className="flex flex-col gap-4">
              <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="relative group">
              Product
              <ul className="absolute z-10 hidden group-hover:inline-block left-0 top-full bg-white text-nowrap p-2 space-y-2 rounded-md shadow-md">
                {productNames.map((prod) => {
                  const cleanedProd = prod.replace(/-/g, " "); // Replace dashes with spaces
                  return (
                    <li key={prod} className="hover:text-[#029FAE] hover:font-bold transition-colors">
                      <Link href={`/product/${prod}`}>{cleanedProd}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
              <li className="relative group">
              Pages
              <ul className="absolute z-10 hidden group-hover:inline-block left-0 top-full bg-white text-nowrap p-2 space-y-2 rounded-md shadow-md">
                  <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
                    <Link href="/pages/contact">Contact Us</Link>
                  </li>
                  <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
                    <Link href="/pages/faq">FAQ</Link>
                  </li>
              </ul>
            </li>
              <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
                <Link href="/about">About</Link>
              </li>
              {/* Mobile Contact Information */}
              <li className="mt-4 border-t pt-4 text-sm">
                Contact: <span className="font-medium">(808) 555-0111</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
