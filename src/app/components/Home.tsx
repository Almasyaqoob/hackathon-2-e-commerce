
import React from 'react';
import Link from "next/link";


const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-8">
      {/* Section 1 */}
      
      <Link href="/">
      <div className="text-black text-sm sm:text-base font-medium block">Home</div></Link>

      {/* Section 2 */}
      <Link href="/shop"> <div className="text-black text-sm sm:text-base font-medium block">Shop</div></Link>

      {/* Divider */}
      <div className="h-[1px] w-full sm:w-[1px] sm:h-[14px] bg-black"></div>

      {/* Section 3 */}
      <Link href="#"><div className="text-black text-sm sm:text-base font-medium block">Asgaard Sofa</div></Link>
    </div>
  );
};

export default Home;