import React from 'react'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap md:text-left text-center order-first">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            CATEGORIES
          </h2>
          <p>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus </p>
          <nav className=" flex list-none mb-10">
            
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800"><FaFacebook /></Link>
            </li>
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800"><FaTwitter /></Link>
            </li>
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800"><FaInstagram /></Link>
            </li>
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800">First Link</Link>
            </li>
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800">Second Link</Link>
            </li>
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800">Third Link</Link>
            </li>
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800">First Link</Link>
            </li>
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800">Second Link</Link>
            </li>
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800">Third Link</Link>
            </li>
            <li>
              <Link href={''} className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            SUBSCRIBE
          </h2>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label
                htmlFor="footer-field"
                className="leading-7 text-sm text-gray-600"
              >
                Placeholder
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
            Bitters chicharrones fanny pack
            <br className="lg:block hidden" />
            waistcoat green juice
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gray-100">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <Link href={''} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © 2020 Tailblocks —
          <Link 
            href="https://twitter.com/knyttneve"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
          >
            @knyttneve
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        
          </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer