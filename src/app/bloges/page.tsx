
'use client';
import React, { useState } from "react";
import { CiShoppingCart, CiHeart, CiSearch, CiUser } from "react-icons/ci";
import Link from "next/link";
import Shophero from "../components/Shophero";
import Heroblog from "../components/Heroblog";
import Going from "../components/Going";
import Button from "../components/Button";
import Delivery from "../components/Delivery";

const Pictures = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-mywhite w-full">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between text-black px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 h-16 md:h-20 lg:h-24 w-full">
        {/* Logo Section */}
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">
          <Link href="/"></Link>
        </div>

        {/* Links Section */}
        <ul className={`sm:flex justify-center space-x-4 md:space-x-6 lg:space-x-8 text-sm md:text-base lg:text-lg ${isMobileMenuOpen ? "flex" : "hidden"} sm:hidden`}>
          <li className="hover:text-gray-400 transition duration-300">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:text-gray-400 transition duration-300">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-gray-400 transition duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-400 transition duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="sm:hidden flex items-center" onClick={toggleMobileMenu}>
          <button className="text-3xl">
            {isMobileMenuOpen ? "X" : "☰"} {/* Toggle between hamburger and close icon */}
          </button>
        </div>

        {/* Icons Section (Visible on both mobile and desktop) */}
        <div className="flex gap-5 md:gap-4 lg:gap-6 text-2xl md:text-3xl lg:text-4xl mr-4">
          <Link href='/account'>
            <button className="hover:text-gray-400">
              <CiUser title="User" />
            </button>
          </Link>
          <Link href='/account'>
            <button className="hover:text-gray-400">
              <CiSearch title="Search" />
            </button>
          </Link>
          <Link href='/asgrad'>
            <button className="hover:text-gray-400">
              <CiHeart title="Wishes" />
            </button>
          </Link>
          <Link href='/cart'>
            <button className="hover:text-gray-400">
              <CiShoppingCart title="Cart" />
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <Shophero />

      {/* Blog Section */}
      <Heroblog />

      {/* Additional Components */}
      <Going />
      <Button />
      <Delivery />
    </div>
  );
};

export default Pictures;
