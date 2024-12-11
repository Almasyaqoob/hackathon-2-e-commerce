import React from "react";

const LoginAndSubmit = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section: Login Form */}
      <div className="flex items-center justify-center  flex-1">
        <div className="h-[570px] bg-white p-8 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[70%] max-w-[500px]">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right Section: Submit Form */}
      <div className="flex items-center justify-center  flex-1">
        <div className="h-[570px] bg-white p-8 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[70%] max-w-[500px]">
          <h2 className="text-3xl font-bold mb-6">Submit</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                aliquid neque tenetur laborum minus adipisci et dignissimos
                soluta eligendi a?
              </p>
              <p className="mt-2 text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                optio ipsa, aliquid quas veritatis, eum aut eius magni
                exercitationem adipisci, suscipit tenetur ex? Neque eos hic illo
                dolorem praesentium maxime!
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSubmit;