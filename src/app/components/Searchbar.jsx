"use client";
import React from 'react';
import { FaSearch } from "react-icons/fa";

export default function SearchSection() {
  return (
    <div
      className="relative bg-[url('/BG.png')] bg-cover bg-center bg-black min-h-screen flex flex-col justify-center items-center text-white  lg:pt-20 md:pt-20"
    >
      <div className="text-center mb-8 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Search Your Next</h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Home</h1>
        <p className="text-lg md:text-xl">
          Find new & featured property located in your local city.
        </p>
      </div>

      <div className="absolute bottom-12 transform translate-y-1/2 bg-white p-4 rounded-lg shadow-md w-full max-w-4xl z-10"> {/* Adjust positioning */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-gray-700 font-semibold mb-2">City/Street</label>
            <input
              type="text"
              placeholder="Location"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-gray-700 font-semibold mb-2">Property Type</label>
            <input
              type="text"
              placeholder="Property type"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-gray-700 font-semibold mb-2">Price Range</label>
            <input
              type="text"
              placeholder="Enter price range"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="w-full flex items-center justify-center border md:w-auto">
            <h2 className="text-black font-semibold mx-2 my-2">Advance Filter</h2>
            <button className="bg-green-600 text-white font-semibold mx-2 px-8 py-4 rounded-md hover:bg-green-600 transition duration-300">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
