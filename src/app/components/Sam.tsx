import React from "react";
import Image from "next/image";
import { FaClock, FaTruck } from "react-icons/fa"; // Icons for time and delivery

const Sam = () => {
  return (
    <div>
      {/* Blog Header */}
      <h1 className="flex items-center justify-center text-4xl lg:text-5xl text-black font-bold mt-9">
        Our Blogs
      </h1>
      <p className="flex items-center justify-center text-sm lg:text-xl text-black mt-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </p>

      {/* Blog Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-4 sm:px-6 lg:px-8 py-10 mx-auto">
          {/* Blog Cards */}
          <div className="flex flex-wrap -m-4">
            {[
              {
                src: "/images/tea headphone.jpg",
                alt: "tea headphone",
                title: "Read More",
                description: "An elegant workspace featuring a laptop and aesthetics.",
              },
              {
                src: "/images/glasslaptop.jpg",
                alt: "glasslaptop",
                title: "Read More",
                description: "An elegant workspace featuring a laptop and aesthetics.",
              },
              {
                src: "/images/laptoplcd.jpg",
                alt: "laptoplcd",
                title: "Read More",
                description: "An elegant workspace featuring a laptop and aesthetics.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 sm:w-full md:w-1/2 lg:w-1/3"
              >
                <div className="h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center shadow-lg">
                  {/* Image */}
                  <div className="overflow-hidden sm:h-60 md:h-64 lg:h-72">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Paragraph */}
                    <p className="text-sm text-gray-500 mb-3">{item.description}</p>
                    {/* Title */}
                    <h1 className="title-font sm:text-xl md:text-2xl font-medium text-gray-900 mb-3">
                      {item.title}
                    </h1>
                    {/* Icons */}
                    <div className="flex justify-center items-center space-x-4 text-gray-500">
                      {/* Time Icon */}
                      <div className="flex items-center">
                        <FaClock  />
                        <span>2 mins ago</span>
                      </div>
                      {/* Delivery Icon */}
                      <div className="flex items-center">
                        <FaTruck  />
                        <span>Delivery Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* View All Posts Section */}
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-2xl lg:text-3xl text-black font-semibold">View All Posts</h2>
        <div className="h-[2px] w-16 bg-black mt-2"></div>
      </div>
    </div>
  );
};

export default Sam;