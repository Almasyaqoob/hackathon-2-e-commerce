import React from "react";
import { FaChartArea, FaPhoneAlt } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";



const Address = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-start bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-12 gap-6">
      {/* Address Section */}
      <div className="mt-6 lg:mt-12 lg:ml-16 text-sm sm:text-base md:text-lg lg:text-xl">
        <div className="flex gap-6 items-center mb-8 md:mb-10 lg:mb-12">
          <FaChartArea  />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold">
              Address
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-center mb-8 md:mb-10 lg:mb-12">
          <IoIosTimer  />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold">
              Time
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
              Morning 9:00 AM to Evening 5:00 PM
            </h3>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
              Morning 9:00 AM to Evening 5:00 PM
            </h3>
          </div>
        </div>

        <div className="flex gap-6 items-center mb-8 md:mb-10 lg:mb-12">
          <FaPhoneAlt  />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold">
              Phone
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
              00000000000
            </h3>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
              00000000000
            </h3>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2 mt-12">
        <div>
          <label className="block text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            className="w-full h-16 sm:h-14 md:h-16 lg:h-18 border border-gray-300 rounded-md p-2 text-sm sm:text-base md:text-lg"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full h-16 sm:h-14 md:h-16 lg:h-18 border border-gray-300 rounded-md p-2 text-sm sm:text-base md:text-lg"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            className="w-full h-16 sm:h-14 md:h-16 lg:h-18 border border-gray-300 rounded-md p-2 text-sm sm:text-base md:text-lg"
            placeholder="Enter subject"
          />
        </div>
        <div>
          <label className="block text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-2">
            Your Message
          </label>
          <textarea
            className="w-full h-32 sm:h-28 md:h-32 lg:h-36 border border-gray-300 rounded-md p-2 text-sm sm:text-base md:text-lg"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button className="w-full sm:w-auto px-10 py-3 bg-white border border-gray-300 shadow-md text-gray-800 rounded-lg text-sm sm:text-base md:text-lg hover:bg-gray-100">
            Submit
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Address;