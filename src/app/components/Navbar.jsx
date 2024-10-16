"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 shadow-md z-50 ">
      <div className="container mx-auto px-4 flex justify-center items-center py-2">
        {/* Logo */}
        <div className="flex items-center justify-center mx-20">
          <img className="h-10" src="/logo1.png" alt="" />
        </div>

        {/* Links for small screens) */}
        <div className="hidden md:flex space-x-8 font-semibold gap-4">
          <a href="#" className="hover:text-green-500">
            Home
          </a>
          <a href="#" className="hover:text-green-500">
            About
          </a>
          <a href="#" className="hover:text-green-500">
            Services
          </a>
          <a href="#" className="hover:text-green-500">
            Pricing
          </a>
          <a href="#" className="hover:text-green-500">
            Blog
          </a>
          <a href="#" className="hover:text-green-500">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center relative font-semibold mx-12 w-48 mt-7 px-4">
          <button className="flex items-center bg-green-600 text-white px-5 py-2 lg:py-3 lg:absolute lg:transform lg:-translate-y-1/2 lg:top-1/2 rounded-md hover:bg-green-600">
            <IoIosLogOut className="mr-2 text-xl font-extrabold" />
            <span className="mr-2">Sign In</span>
          </button>
        </div>

        {/* Hamburger Menu for small screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-gray-800" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <a href="#" className="hover:text-green-500">
              Home
            </a>
            <a href="#" className="hover:text-green-500">
              About
            </a>
            <a href="#" className="hover:text-green-500">
              Services
            </a>
            <a href="#" className="hover:text-green-500">
              Pricing
            </a>
            <a href="#" className="hover:text-green-500">
              Blog
            </a>
            <a href="#" className="hover:text-green-500">
              Contact
            </a>
            <button className="flex items-center bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600">
              <span className="mr-2">Sign In</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
