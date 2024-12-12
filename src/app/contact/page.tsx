import React from "react";
import { CiShoppingCart, CiHeart, CiSearch, CiUser } from "react-icons/ci";
import Link from "next/link";
import Shophero from "../components/Shophero";
import Get from "../components/Get";
import Address from "../components/Address";
import Delivery from "../components/Delivery";
import Contacthero from "../components/Contacthero";

const Contact = () => {
  return (
    <div className="bg-mywhite w-full">
      {/* Navbar Section */}
      <nav className="flex flex-wrap items-center justify-between text-black px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 h-auto">
        {/* Logo Section */}
        <div className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 md:mb-0">
          <Link href="/"></Link>
        </div>

        {/* Links Section */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-base lg:text-lg mb-2 md:mb-0">
          <li className="hover:text-gray-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex flex-wrap justify-end gap-3 md:gap-4 lg:gap-6 text-xl md:text-2xl lg:text-3xl">
          <button className="hover:text-gray-400">
            <CiUser title="User" />
          </button>
          <Link href="/bloges">
            <button className="hover:text-gray-400">
              <CiSearch title="Search" />
            </button>
          </Link>
          <button className="hover:text-gray-400">
            <CiHeart title="Wishes" />
          </button>
          <button className="hover:text-gray-400">
            <CiShoppingCart title="Cart" />
          </button>
        </div>
      </nav>

      {/* Hero and Content Sections */}
      <Contacthero />
      <Get />
      <Address/>
      <Delivery/>
      <Shophero />
    </div>
  );
};

export default Contact;
