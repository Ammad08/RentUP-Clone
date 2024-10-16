import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";

const FeaturedAgents = () => {
  const agents = [
    {
      id: 1,
      name: "Michael P. Grimaldo",
      city: "2272 Briarwood Drive",
      listings: "50 Listings",
    },
    {
      id: 2,
      name: "Harijeet M. Siller",
      city: "Montreal, Canada",
      listings: "70 Listings",
    },
    {
      id: 3,
      name: "Anna K. Young",
      city: "Denver, USA",
      listings: "80 Listings",
    },
    {
      id: 4,
      name: "Michael P. Grimaldo",
      city: "2272 Briarwood Drive",
      listings: "51 Listings",
    },
    {
      id: 5,
      name: "Sargam S. Singh",
      city: "Liverpool, Canada",
      listings: "42 Listings",
    },
    {
      id: 6,
      name: "Sara Wilson",
      city: "Berlin, Germany",
      listings: "38 Listings",
    },
  ];

  return (
    <div className="container bg-gray-100 mx-auto py-16 px-4">
      <h2 className="text-4xl text-gray-700 font-bold text-center mb-6">
        Our Featured Agents
      </h2>
      <p className="text-center text-slate-500 text-base mb-12">
        Our top agents with a proven track record in finding the perfect venues.
        <br />
        We are professionals who know how to find exactly what you're looking
        for.
        <br />
        Seamless experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white shadow-lg rounded-lg p-6 relative"
          >
            <button className="absolute top-6 left-20 bg-orange-500 text-white font-semibold py-3 px-6 rounded-full ">
              {agent.listings}
            </button>

            <div className="relative flex justify-center mt-16 mb-4">
              <img
                src={`/Agent${agent.id}.jpg`}
                alt={agent.name}
                className="rounded-full p-2 border-4 border-gray-300 w-24 h-24 relative"
              />

              <FaCheckCircle
                className="text-blue-500 w-4 h-4 absolute top-1/2 right-[95px] lg:right-[130px] md:right-[130px] transform -translate-y-1/2
"
                // style={{
                //   top: "50%",
                //   right: "130px",
                //   transform: "translateY(-50%)",
                // }}
                title="Popular Creator"
              />
            </div>

            <div className="flex justify-center items-center text-gray-600 mb-2">
              <FaMapMarkerAlt className="mr-2" />
              <span>{agent.city}</span>
            </div>

            <h3 className="text-xl font-semibold text-center mb-4">
              {agent.name}
            </h3>

            <div className="flex justify-center space-x-4 mb-4">
              <FaFacebookF className="text-gray-600 bg-gray-100 rounded-full m-2 h-8 w-8 px-2 py-2 cursor-pointer" />
              <FaLinkedinIn className="text-gray-600 bg-gray-100 rounded-full m-2 h-8 w-8 px-2 py-2 cursor-pointer" />
              <FaTwitter className="text-gray-600 bg-gray-100 rounded-full m-2 h-8 w-8 px-2 py-2 cursor-pointer" />
              <FaInstagram className="text-gray-600 bg-gray-100 rounded-full m-2 h-8 w-8 px-2 py-2 cursor-pointer" />
            </div>

            <div className="flex justify-center gap-4">
              <button className="flex items-center justify-center bg-green-600 text-white py-4 px-8 rounded-lg">
                <FaEnvelope className="mr-1" /> Message
              </button>

              <button className="flex items-center justify-center bg-black text-white py-4 px-8 rounded-lg">
                <FaPhoneAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAgents;
