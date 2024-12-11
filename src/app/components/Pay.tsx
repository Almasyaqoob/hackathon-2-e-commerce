
import React from "react";
import Image from "next/image";

const ShoppingCart = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] bg-gray-100">
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-4/6 bg-white p-4">
        {/* Product Details */}
        <div className="bg-myyellow flex flex-col p-4 space-y-2 rounded-md mx-4 md:mx-8 lg:ml-10">
          <div className="flex justify-between text-sm md:text-base">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
        </div>
        {/* Individual Product */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 mx-4 md:mx-8 lg:ml-10 space-y-4 sm:space-y-0">
          <Image
            src="/images/sofa.jpg"
            alt="sofa"
            width={180}
            height={180}
            className="object-cover"
          />
          <div className="text-sm md:text-base">$50</div>
          <div className="flex flex-col sm:flex-row justify-between w-full sm:w-2/5 text-sm md:text-base">
            <span>$50</span>
            <span>$100</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/6 bg-gray-50 p-6 space-y-4">
        <h2 className="text-lg md:text-xl font-bold mx-4 md:mx-8 lg:ml-10 mb-4 md:mb-10">
          Cart Details
        </h2>
        <div className="flex justify-between mx-4 md:mx-8 lg:ml-10 mb-4 md:mb-10 text-sm md:text-base">
          <span>Subtotal</span>
          <span>$100</span>
        </div>
        <div className="flex justify-between mx-4 md:mx-8 lg:ml-10 mb-4 md:mb-10 text-sm md:text-base">
          <span>Total</span>
          <span>$120</span>
        </div>
        <button className="bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded hover:bg-gray-300 transition mx-4 md:mx-8 lg:ml-10 mb-4 md:mb-10">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
