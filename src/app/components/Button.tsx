import React from 'react';

const Button = () => {
  return (
    <div className="flex items-center justify-center h-[150px] bg-[#FDF7F4] px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
        {/* Button 1 */}
        <button className="w-12 sm:w-16 md:w-20 lg:w-24 h-10 bg-myyellow border border-gray-300 rounded-md shadow-sm text-gray-800 text-sm sm:text-base hover:bg-gray-100 hover:shadow-lg transition duration-200">
          1
        </button>

        {/* Button 2 */}
        <button className="w-12 sm:w-16 md:w-20 lg:w-24 h-10 bg-myyellow border border-gray-300 rounded-md shadow-sm text-gray-800 text-sm sm:text-base hover:bg-gray-100 hover:shadow-lg transition duration-200">
          2
        </button>

        {/* Button 3 */}
        <button className="w-12 sm:w-16 md:w-20 lg:w-24 h-10 bg-myyellow border border-gray-300 rounded-md shadow-sm text-gray-800 text-sm sm:text-base hover:bg-gray-100 hover:shadow-lg transition duration-200">
          3
        </button>

        {/* Button Next */}
        <button className="w-16 sm:w-20 md:w-24 lg:w-28 h-12 bg-myyellow border border-gray-300 rounded-md shadow-sm text-gray-800 text-sm sm:text-base hover:bg-gray-100 hover:shadow-lg transition duration-200">
          Next
        </button>
      </div>
    </div>
  );
};

export default Button;