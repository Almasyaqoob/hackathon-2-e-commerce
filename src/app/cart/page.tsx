'use client';

import React from "react";
import { CiShoppingCart, CiHeart, CiSearch, CiUser } from "react-icons/ci";
import Link from "next/link";
import Shophero from "../components/Shophero";
import Delivery from "../components/Delivery";
import Pay from "../components/Pay";

const Cart = () => {
  return (
    <>
      <div className="bg-mywhite w-full">
        {/* Navbar */}
        <nav className="flex flex-col md:flex-row items-center justify-between text-black px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 h-auto md:h-20 lg:h-24 w-full">
          {/* Logo Section */}
          <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-0">
            <Link href="#"></Link>
          </div>

          {/* Links Section */}
          <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 lg:space-x-8 text-base md:text-lg lg:text-2xl mb-4 md:mb-0">
            <li className="hover:text-gray-400">
              <Link href="/home">Home</Link>
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
          <div className="flex gap-5 md:gap-4 lg:gap-6 text-2xl md:text-3xl lg:text-4xl mr-4">
        <Link href='/account'><button className="hover:text-gray-400">
            <CiUser title="User" />
          </button></Link>
          <Link href='/account'>
         <button className="hover:text-gray-400">
            <CiSearch title="Search" />
          </button></Link>
          <Link href='/asgrad'>  <button className="hover:text-gray-400">
            <CiHeart title="Wishes" />
          </button></Link>
          <Link href='/cart'> <button className="hover:text-gray-400">
          < CiShoppingCart  title="Cart" />
          </button></Link>
        </div>
        </nav>
      </div>

      {/* Hero Section */}
      <Shophero />

      {/* Payment Section */}
      <Pay />

      {/* Delivery Section */}
      <Delivery />
    </>
  );
};

export default Cart;