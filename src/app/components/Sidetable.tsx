
import React from 'react';

import { IoMdArrowDropright } from 'react-icons/io';

const Sidetable = () => {
  return (
    <div className="ml-0 mr-10 h-auto w-full bg-gray-200 flex flex-col lg:flex-row items-center justify-evenly gap-10 p-6 lg:p-10">
      {/* Right Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Side Table</h1>
        <h3 className="text-lg mb-2">View more</h3>
        <hr className="w-16 border-t-2 border-black" />
      </div>

      {/* Left Section */}
      <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Side Table</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* View More and Line */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg mb-2">View more</h3>
            <hr className="w-16 border-t-2 border-black" />
          </div>

          {/* Buttons */}
          <div className="flex">
  <button className="flex items-center px-6 py-2 bg-gray-100 text-gray-700 font-semibold rounded hover:bg-blue-400 transition-all gap-2">
    <span>Search</span>
    <IoMdArrowDropright  size={20} />
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default Sidetable;
