import React from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { RiAdminLine } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';
import { GiWoodenFence } from 'react-icons/gi';

const Heroblog = () => {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] p-4 lg:p-8 gap-6">
        {/* Image Section */}
        <div className="flex justify-center w-full lg:w-2/3">
          <div className="rounded-md overflow-hidden shadow-lg h-fit">
            <Image
              className="object-cover object-center"
              src="/images/glasslaptop.jpg"
              alt="glasslaptop"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col w-full lg:w-1/3 space-y-6">
          {/* Search Input */}
          <div className="relative mt-6 lg:mt-0">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-12 md:h-14 lg:h-16">
              <CiSearch />
              <input
                type="text"
                placeholder=""
                className="flex-grow px-4 text-sm md:text-base lg:text-lg focus:outline-none"
              />
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <h1 className="text-xl md:text-2xl font-semibold mb-4 ml-10 mt-6">Categories</h1>
            <div className="space-y-4 text-gray-600 ml-12">
              {[
                { name: 'Craft', count: 2 },
                { name: 'Wood', count: 2 },
                { name: 'Interior', count: 2 },
                { name: 'Handmade', count: 2 },
                { name: 'Design', count: 2 },
              ].map((category, index) => (
                <div key={index} className="flex justify-between mt-6">
                  <h2 className="text-base font-medium">{category.name}</h2>
                  <h2 className="text-base">{category.count}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Metadata Section */}
      <div className="flex flex-col sm:flex-row justify-start sm:justify-start gap-6 mt-8 p-4 text-gray-500 text-sm md:text-base">
        <div className="flex items-center gap-2 ml-6">
          <RiAdminLine />
          <h2>Admin</h2>
        </div>
        <div className="flex items-center gap-2">
          <SlCalender />
          <h2>14 Dec 2024</h2>
        </div>
        <div className="flex items-center gap-2">
          <GiWoodenFence />
          <h2>Wood</h2>
        </div>
      </div>
    </>
  );
};

export default Heroblog;