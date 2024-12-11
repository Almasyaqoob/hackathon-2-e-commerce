import React from 'react';
import Image from 'next/image';


const Chair = () => {
  return (
    <div>
      <section className="text-gray-600 body-font m-4">
        <div className="container px-5 py-10 mx-auto">
          {/* Header Section */}
          <div className="text-center w-full mb-8">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
              Top Picks for You
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify
            </p>
          </div>

          {/* Card Section */}
          <div className="flex flex-wrap justify-center m-6">
            {/* Cards */}
            {['wood chair', 'round table chair', 'sofa chair', 'slim table'].map((item, index) => (
              <div
                key={index}
                className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4 border rounded-lg text-center">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-4"
                    src={`/images/${item}.jpg`}
                    alt={item}
                    width={500}
                    height={500}
                  />
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8
                  </p>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    $1256
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Section */}
        <div className="flex flex-col items-center mt-4">
  <div className="text-black text-2xl hover:text-gray-600 transition duration-300">
    View More
  </div>
  {/* Divider line */}
  <div className="h-[1px] w-[120px] mt-6 bg-gray-500 "></div>
</div>

      </section>
    </div>
  );
};

export default Chair;
