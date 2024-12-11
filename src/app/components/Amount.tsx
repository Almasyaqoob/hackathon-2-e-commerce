import React from "react";

const BillingDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-6 lg:px-8">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Billing Details Form */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">Billing Details</h2>
          <form className="grid grid-cols-1 gap-4">
            {Array.from({ length: 10 }, (_, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Input Field ${index + 1}`}
                className="border border-gray-300 px-5 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            ))}
          </form>
        </div>

        {/* Right Side: Product Details and Summary */}
        <div className="bg-white p-6 rounded-md shadow-md flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Product Summary</h2>
          <div className="flex flex-col gap-4">
            {/* Product and Subtotal */}
            <div className="flex justify-between items-center">
              <span>Product Name</span>
              <span>$100.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>$100.00</span>
            </div>
          </div>

          {/* Text Content */}
          <ul className="list-disc pl-5">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              venenatis ligula euismod vehicula efficitur.
            </li>
          </ul>
          <ul className="list-disc pl-5">
            <li>Direct Bank Transfer</li>
            <li>Cash on Delivery</li>
          </ul>
          <ul className="list-disc pl-5">
            <li>
              Pellentesque ac nisi id risus malesuada pellentesque. Sed
              tincidunt felis in turpis suscipit, at viverra ligula fringilla.
              Nullam non metus nec neque fermentum tincidunt.
            </li>
          </ul>

          {/* Submit Button */}
          <button className="w-full bg-gray-300 text-gray-700 border border-gray-400 px-5 py-3 rounded-md hover:bg-gray-400 hover:text-white transition-all">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;