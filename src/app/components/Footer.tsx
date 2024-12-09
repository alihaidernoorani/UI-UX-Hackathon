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
    <footer className="bg-white text-black">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <Image src={Logo} alt="Logo" width={150} height={50} />
            <p>
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href={"/"}>
                <FaFacebook aria-label="Facebook" />
              </Link>
              <Link href={"/"}>
                <FaTwitter aria-label="Twitter" />
              </Link>
              <Link href={"/"}>
                <FaInstagram aria-label="Instagram" />
              </Link>
              <Link href={"/"}>
                <FaPinterest aria-label="Pinterest" />
              </Link>
              <Link href={"/"}>
                <FaYoutube aria-label="YouTube" />
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORY
            </h2>
            <nav className="space-y-2">
              <Link href={"/"}>Sofa</Link>
              <Link href={"/"}>Armchair</Link>
              <Link href={"/"}>Wing Chair</Link>
              <Link href={"/"}>Wooden Chair</Link>
              <Link href={"/"}>Park Bench</Link>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="space-y-2">
              <Link href={"/"}>Help & Support</Link>
              <Link href={"/"}>Terms & Conditions</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Help</Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              NEWSLETTER
            </h2>
            <div className="flex flex-col items-center md:items-start gap-2">
              <input
                type="text"
                placeholder="Your email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-4"
              />
              <button className="w-full md:w-auto bg-[#029FAE] text-white py-2 px-6 rounded hover:bg-indigo-600">
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
      <div className="bg-gray-100 w-full py-4">
        <div className="w-full max-w-[80%] mx-auto flex flex-col items-center">
          <p className="text-gray-500 text-sm">
            © 2021 Blogy - Designed & Developed by Zakirsoft
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
