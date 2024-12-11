import React from 'react';
import Image from 'next/image';
import Link from "next/link";
const Sofa = () => {
  return (
    <div className="bg-[#F5F5DC] flex flex-col sm:flex-row justify-between align-center p-4 sm:p-8">
      {/* Image Section */}
      <div className="sm:h-[700px] sm:w-[700px] w-full mb-4 sm:mb-0">
        <Image
          className="object-cover object-center"
          src={'/images/Asgaard sofa 1.jpg'}
          alt='Asgaard sofa 1'
          width={950}
          height={900}
        />
      </div>

      {/* Text and Button Section */}
      <div className="text-center sm:text-left sm:m-8 flex flex-col justify-center sm:ml-8">
        <h2 className="text-3xl mt-4 sm:mt-20">New Arrival</h2>
        <h1 className="text-4xl sm:text-5xl mt-6 font-bold">Asgard Sofa</h1>
      <Link href="/asgrad">  <button className="py-2 px-5 mt-6 text-3xl bg-gray-100 border-2 border-transparent rounded-lg hover:border-black hover:bg-gray-200 transition-all duration-300">
          Order Now
        </button></Link>
      </div>
    </div>
  );
}

export default Sofa;