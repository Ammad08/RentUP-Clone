import React from "react";

const Question = () => {
  return (
    <div className="w-full h-auto bg-green-600 flex flex-col md:flex-row items-center justify-center md:gap-32 gap-8 p-6 md:p-12">
      <div className="text-white text-center md:text-left">
        <p className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Do You Have Questions?</p>
        <p className="text-base md:text-lg">We'll help you to grow your career and growth.</p>
      </div>

      <div className="mt-4 md:mt-0">
        <button className="border-4 rounded-full bg-white text-green-600 text-lg md:text-2xl py-3 px-6 md:py-5 md:px-8 hover:bg-green-100 transition-all duration-300">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default Question;
