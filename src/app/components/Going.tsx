'use client';

import React from 'react';
import Image from 'next/image';
import { RiAdminLine } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';
import { GiWoodenFence } from 'react-icons/gi';

const Going = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Section 1 */}
        <div className="w-[730px] ml-12 mt-6">
          <h1 className="mt-6 text-4xl">Going All-in My Milamind Design</h1>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam obcaecati rem corrupti sunt officia facilis cupiditate, minima animi, illum ut numquam tenetur! Rerum deserunt quos quae veritatis optio maiores nesciunt quisquam error recusandae mollitia, doloremque magnam voluptate excepturi officia aperiam illo, consequatur velit eius inventore, libero voluptates quis? Autem iusto eaque exercitationem quam maiores quaerat doloribus reiciendis ipsa voluptatibus laudantium minus animi eum ab ducimus iste temporibus cupiditate totam, nulla ipsam error qui, porro odio. Beatae iste nesciunt provident!
          </p>
          <h2 className="mt-4 cursor-pointer text-blue-500 hover:underline">Read More</h2>
          <div className="h-[1px] w-[40px] bg-black mt-2"></div>
        </div>

        <div className="flex justify-center w-full lg:w-2/3">
          <div className="rounded-md overflow-hidden ml-10 mt-8 shadow-lg">
            <Image
              className="object-cover object-center"
              src="/images/girlshand (1).jpg"
              alt="girlshand (1)"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-start gap-6 mt-8 p-4 text-gray-500 text-sm md:text-base">
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

        {/* Section 2 */}
        <div className="w-[730px] ml-12 mt-6">
          <h1 className="mt-6 text-4xl">Going All-in My Milamind Design</h1>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam obcaecati rem corrupti sunt officia facilis cupiditate, minima animi, illum ut numquam tenetur! Rerum deserunt quos quae veritatis optio maiores nesciunt quisquam error recusandae mollitia, doloremque magnam voluptate excepturi officia aperiam illo, consequatur velit eius inventore, libero voluptates quis? Autem iusto eaque exercitationem quam maiores quaerat doloribus reiciendis ipsa voluptatibus laudantium minus animi eum ab ducimus iste temporibus cupiditate totam, nulla ipsam error qui, porro odio. Beatae iste nesciunt provident!
          </p>
          <h2 className="mt-4 cursor-pointer text-blue-500 hover:underline">Read More</h2>
          <div className="h-[1px] w-[40px] bg-black mt-2"></div>
        </div>

        <div className="flex justify-center w-full lg:w-2/3">
          <div className="rounded-md overflow-hidden ml-10 mt-8 shadow-lg">
            <Image
              className="object-cover object-center"
              src="/images/tea and book.jpg"
              alt="tea and book"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-start gap-6 mt-8 p-4 text-gray-500 text-sm md:text-base">
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
      </div>
    </>
  );
};

export default Going;