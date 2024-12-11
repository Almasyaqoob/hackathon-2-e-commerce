import React from 'react';

const Insta = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh] w-full bg-cover bg-center bg-no-repeat rounded-lg"
        style={{ backgroundImage: "url('/images/bg (1).jpg')" }}
      >
        {/* Content Section */}
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-black text-4xl sm:text-7xl font-bold mb-4">
            Our Instagram
          </h1>
          <p className="text-black text-lg mb-6">
            Lorem ipsum dolor sit amet.
          </p>
          <button className="px-8 py-3 bg-white text-black rounded-full shadow-lg shadow-gray-500 hover:shadow-gray-700 transition duration-300">
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insta;