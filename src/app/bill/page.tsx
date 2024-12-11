

'use client'
import React, { useState } from "react";
import { CiShoppingCart, CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Shophero from "../components/Shophero";
import Delivery from "../components/Delivery";
import Amount from "../components/Amount";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <div className="bg-mywhite w-full">
        <nav className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8 md:py-6 lg:py-8 w-full">
          {/* Logo Section */}
          <div className="text-xl md:text-2xl lg:text-3xl font-bold">
            <Link href="/">
              <span className="cursor-pointer"></span>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="block md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

          {/* Links Section */}
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-mywhite md:static md:flex md:space-x-6 md:w-auto md:bg-transparent text-center md:text-left space-y-4 md:space-y-0 text-base md:text-lg lg:text-2xl`}
          >
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
          <div className="hidden md:flex gap-4 lg:gap-6 text-2xl md:text-3xl lg:text-4xl">
            <Link href="/user">
              <button className="hover:text-gray-400">
                <CiUser title="User" />
              </button>
            </Link>
            <Link href="/bloges">
              <button className="hover:text-gray-400">
                <CiSearch title="Search" />
              </button>
            </Link>
            <Link href="/wishes">
              <button className="hover:text-gray-400">
                <CiHeart title="Wishes" />
              </button>
            </Link>
            <Link href="/cart">
              <button className="hover:text-gray-400">
                <CiShoppingCart title="Cart" />
              </button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Other Components */}
      <Shophero />
      <Amount />
      <Delivery />
    </>
  );
};

export default Navbar;
