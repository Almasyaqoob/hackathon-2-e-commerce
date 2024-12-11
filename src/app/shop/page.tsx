
import React from 'react'
import { CiShoppingCart, CiHeart, CiSearch, CiUser } from "react-icons/ci";
import Link from "next/link";
import Shophero from '../components/Shophero';
import Fil from '../components/Fil';
import Image from "next/image"
import Button from '../components/Button';
import Delivery from '../components/Delivery';

const page = () => {
  
  return (
    <>
    <div>
      <div className="bg-mywhite w-full h-[80px]">
      <nav className="flex items-center justify-between text-black px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 h-16 md:h-20 lg:h-24 w-full">
        {/* Logo Section */}
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">
          <Link href="#"></Link>
        </div>

        {/* Links Section */}
        <ul className="flex justify-center space-x-4 md:space-x-6 lg:space-x-8 text-base md:text-lg lg:text-2xl">
          <li className="hover:text-gray-400">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/">Shop</Link>
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
          <button className="hover:text-gray-400">
            <CiUser title="User" />
          </button>
          <Link href='/bloges'>
         <button className="hover:text-gray-400">
            <CiSearch title="Search" />
          </button></Link>
          <button className="hover:text-gray-400">
            <CiHeart title="Wishes" />
          </button>
          <button className="hover:text-gray-400">
          < CiShoppingCart  title="Cart" />
          </button>
        </div>
      </nav>
    </div>
    </div>
    <Shophero/>
    <Fil/>
    <div className="flex flex-wrap justify-center m-6">
            {/* Cards */}
            {['whitesofa', 'round table chair', 'sofa chair', 'slim table'].map((item, index) => (
              <div
                key={index}
                className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4 border rounded-lg text-center">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-4"
                    src={`/images/${item}.jpg`}
                    
                    alt={item}
                    width={500}
                    height={500}
                  />
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8
                  </p>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    $1256
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center m-6">
            {/* Cards */}
            {['slim rectangle table', 'slim table', 'tables', 'round table'].map((item, index) => (
              <div
                key={index}
                className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4 border rounded-lg text-center">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-4"
                    src={`/images/${item}.jpg`}
                    alt={item}
                    width={500}
                    height={500}
                  />
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8
                  </p>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    $1256
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center m-6">
          
            {/* Cards */}
            {['square1table', 'sofa', 'black sofa', 'mirortable'].map((item, index) => (
              <div
                key={index}
                className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4 border rounded-lg text-center">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-4"
                    src={`/images/${item}.jpg`}
                    alt={item}
                    width={500}
                    height={500}
                  />
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8
                  </p>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    $1256
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center m-6">
            {/* Cards */}
            {['sofa', 'whitesofa (2)', 'whitesofa', 'mirortable'].map((item, index) => (
              <div
                key={index}
                className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4 border rounded-lg text-center">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-4"
                    src={`/images/${item}.jpg`}
                    alt={item}
                    width={500}
                    height={500}
                  />
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8
                  </p>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    $1256
                  </h2>
                </div>
              </div>
             
            ))}
          </div>
          <Button />
          <Delivery />
          
    </>
  )
}

export default page
