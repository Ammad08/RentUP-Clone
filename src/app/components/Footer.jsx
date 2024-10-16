import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <div className="w-1/3">
            <img src="/logo2.png" alt="unknown" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            Do You Need Help With Anything?
          </h2>

          <p className=" text-gray-400">
            Receive updates, hot deals, tutorials, discounts sent straignt in
          </p>
          <p className="mb-6 text-gray-400">your inbox every month</p>

          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Email Adress"
              className="p-2 rounded-md w-full md:w-2/3 text-black focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 md:mb-0"
            />
            <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-600 transition-all md:ml-0">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">LAYOUTS</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-500 mb-3">
                  Home Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  About Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Service Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Property Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Contact Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Single Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">ALL SECTIONS</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Headers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Attractive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Videos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Footers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 mb-4">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <hr className="border-gray-600 mb-4" />
        <p className="text-center text-gray-400">
          © 2021 RentUP. Designd By GorkCoder.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
