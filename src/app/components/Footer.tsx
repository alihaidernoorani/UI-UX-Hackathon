import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black body-font">
      {/* Main Content */}
      <div className="container mx-auto px-5 py-24 flex flex-col items-center text-center md:text-left">
        <div className="flex flex-wrap justify-center w-full gap-8">
          {/* Logo and Social Media */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-y-6">
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
                <Link href={"/"}>
                  <FaFacebook aria-label="Facebook" />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <FaTwitter aria-label="Twitter" />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <FaInstagram aria-label="Instagram" />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <FaPinterest aria-label="Pinterest" />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <FaYoutube aria-label="YouTube" />
                </Link>
              </li>
            </nav>
          </div>

          {/* Categories */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4 text-center md:text-left">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={"/"}>Sofa</Link>
              </li>
              <li>
                <Link href={"/"}>Armchair</Link>
              </li>
              <li>
                <Link href={"/"}>Wing Chair</Link>
              </li>
              <li>
                <Link href={"/"}>Wooden Chair</Link>
              </li>
              <li>
                <Link href={"/"}>Park Bench</Link>
              </li>
            </nav>
          </div>

          {/* Support */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center md:text-left">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={"/"}>Help & Support</Link>
              </li>
              <li>
                <Link href={"/"}>Terms & Conditions</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/"}>Help</Link>
              </li>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center md:text-left">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              NEWSLETTER
            </h2>
            <div className="flex flex-col md:flex-row gap-2 items-center md:items-start">
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                placeholder="Your email"
                className="w-full md:w-auto bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out"
              />
              <button className="text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 w-full py-6">
        <div className="container mx-auto flex flex-col items-center justify-center text-center text-gray-500 text-sm">
          <p>© 2021 Blogy - Designed & Developed by Zakirsoft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
