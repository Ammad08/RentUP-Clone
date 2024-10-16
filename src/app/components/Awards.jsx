import React from "react";
import { FaTrophy } from "react-icons/fa";
import { IoBagRemoveSharp } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Awards = () => {
  return (
    <div className="min-h-screen bg-[#122947] text-white flex flex-col items-center justify-center">
      <div className="text-center mt-10 mb-28">
        <h2 className="text-xl text-green-600 font-semibold mb-2">
          Our Awards
        </h2>

        <h2 className="text-4xl font-semibold mb-2">
          Over 1,24,000+ Happy User Bieng With Us
        </h2>
        <h2 className="text-4xl font-semibold">Still They Love Our Services</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-36 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <div
            className=" bg-white bg-opacity-10  p-6 "
            style={{ borderRadius: "4% 50%" }}
          >
            <FaTrophy className="text-6xl h-10 w-10 mb-4 text-white" />
          </div>
          <h3 className="text-4xl font-semibold mt-2">32M</h3>
          <p className="text-sm text-gray-500">Blue Burmin Award</p>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="bg-white bg-opacity-10 p-6 "
            style={{ borderRadius: "4% 50%" }}
          >
            <IoBagRemoveSharp className="text-6xl mb-4 h-10 w-10 text-white" />
          </div>
          <h3 className="text-4xl font-semibold mt-2">43M</h3>
          <p className="text-sm text-gray-500">Mimo X11 Award</p>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="bg-white bg-opacity-10  p-6"
            style={{ borderRadius: "4% 50%" }}
          >
            <FaLightbulb className="text-6xl mb-4 h-10 w-10 text-white" />
          </div>
          <h3 className="text-4xl font-semibold mt-2">51M</h3>
          <p className="text-sm text-gray-500">Australian UGC Award</p>
        </div>

        <div className="flex flex-col items-center mb-4">
          <div
            className="bg-white bg-opacity-10 p-6 "
            style={{ borderRadius: "4% 50%" }}
          >
            <FaHeart className="text-6xl mb-4 h-10 w-10 text-white " />
          </div>
          <h3 className="text-4xl font-semibold mt-2">42M</h3>
          <p className="text-sm text-gray-500">IITCA Green Award</p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
