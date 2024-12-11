import React from 'react'
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
const Detail = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <Image
          className="object-cover object-center"
          src={'/images/Asgaard sofa 1.png'}
          alt='Asgaard sofa 1'
          width={480}
          height={400}
        />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
       
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          Asgraad Sofa
        </h1>
        <div className="flex mb-4">
          
         
        </div>
        <p className="leading-relaxed">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
          shorts keytar banjo tattooed umami cardigan.
        </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
         
               
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <button className="flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
             Cart
          </button>
          <button className=" w-20 h-10  p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-1">
          <FaPlus />
          </button>
          <button className=" w-20 h-10  p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-1">
          1
          </button>
          <button className=" w-20 h-10  p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-1">
          < FiMinus/>
          </button>
    
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Detail;