import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-[80%] mx-auto bg-white text-black body-font">
      <div className="container text-base px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Logo and Social Media */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-y-6 md:justify-start">
            <Image src={Logo} alt="Logo" width={150} height={50} />
            <p>
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
            <nav
              className="flex justify-center md:justify-start list-none gap-4"
              aria-label="Social Media Links"
            >
              <li>
                <Link href={'/'}>
                  <FaFacebook aria-label="Facebook" />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <FaTwitter aria-label="Twitter" />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <FaInstagram aria-label="Instagram" />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <FaPinterest aria-label="Pinterest" />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <FaYoutube aria-label="YouTube" />
                </Link>
              </li>
            </nav>
          </div>

          {/* Categories */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={'/'}>Sofa</Link>
              </li>
              <li>
                <Link href={'/'}>Armchair</Link>
              </li>
              <li>
                <Link href={'/'}>Wing Chair</Link>
              </li>
              <li>
                <Link href={'/'}>Wooden Chair</Link>
              </li>
              <li>
                <Link href={'/'}>Park Bench</Link>
              </li>
            </nav>
          </div>

          {/* Support */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={'/'}>Help & Support</Link>
              </li>
              <li>
                <Link href={'/'}>Terms & Conditions</Link>
              </li>
              <li>
                <Link href={'/'}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={'/'}>Help</Link>
              </li>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              NEWSLETTER
            </h2>
            <div className="flex gap-2 relative w-full xl:mr-4 lg:mr-0">
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                placeholder="Your email"
                className="w-[285px] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out"
              />
              <button className="inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © 2021 Blogy - Designed & Developed by Zakirsoft
        </p>
      </div>
    </footer>
  );
};

export default Footer;
