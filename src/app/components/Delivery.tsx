import React from 'react';

const Delivery = () => {
  return (
    <div className="h-auto bg-[#faf6f4] flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-4 sm:gap-8 p-4 sm:p-10">
      {/* Section 1 */}
      <div className="text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">Free Delivery</h1>
        <p className="text-base sm:text-lg lg:text-xl mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      {/* Section 2 */}
      <div className="text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">90 Days Return</h1>
        <p className="text-base sm:text-lg lg:text-xl mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      {/* Section 3 */}
      <div className="text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">Secure Payment</h1>
        <p className="text-base sm:text-lg lg:text-xl mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </div>
  );
};

export default Delivery;