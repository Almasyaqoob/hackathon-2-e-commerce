
import React from 'react'
import Image from 'next/image'
const Twopic = () => {
  return (
    <div className="ml-0 mr-10 h-[500px] w-full bg-[#FDF7F4] flex flex-col lg:flex-row items-center justify-evenly gap-10 p-6 lg:p-10 ">
      <div className='h-[480px] w-[550px]'>
      <Image
                src="/images/sidetable1.jpg"
                alt="sidetable1"
                width={800}
                height={600}
                className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full object-cover bg-[#FDF7F4]"
              />
      </div>
      <div className='h-[480px] w-[550px]'>
      <Image
                src="/images/sidetable2..jpg"
                alt="sidetable2."
                width={800}
                height={600}
                className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full object-cover"
              />
      </div>
    </div>
  )
}

export default Twopic
