import React from "react";

const PropertyType = () => {
  const propertyTypes = [
    {
      icon: (
        <img
          src="h1.png"
          className="border rounded-full w-16 h-26 my-2 bg-red-100 text-red-400 m-4"
        />
      ),

      title: "Family House",
      description: "122 Property",
    },
    {
      icon: (
        <img
          src="h2.png"
          className="border rounded-full w-16 h-26 my-2 bg-green-200 text-green-400 m-4"
        />
      ),
      title: "House & Villa",
      description: "155 Property",
    },
    {
      icon: (
        <img
          src="h3.png"
          className="border rounded-full w-16 h-26 my-2 bg-yellow-100 text-yellow-400 m-4"
        />
      ),
      title: "Apartment",
      description: "300 Property",
    },
    {
      icon: (
        <img
          src="h4.png"
          className="border rounded-full w-16 h-26 my-2 bg-purple-100 text-purple-400 m-4"
        />
      ),
      title: "Office & Studio",
      description: "80 Property",
    },
    {
      icon: (
        <img
          src="h5.png"
          className="border rounded-full w-16 h-26 my-2 bg-blue-100 text-blue-400 m-4"
        />
      ),
      title: "Villa & Condo",
      description: "80 Property",
    },
  ];

  return (
    <div className="relative bg-gray-100 py-12  z-20">
      <h1 className="text-4xl text-gray-700 font-bold text-center mb-4">
        Featured Property Types
      </h1>

      <p className="text-base text-gray-500 font-normal text-center mb-12 max-w-md mx-auto">
        Find All Type of Property.
      </p>

      <div className="flex justify-between items-center">
        <div></div>
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-5 gap-8 px-4  ">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 gap-1 rounded-lg shadow-md flex flex-col items-center text-center w-48"
            >
              <div className="text-5xl mb-1">{type.icon}</div>

              <h2 className="text-xl font-semibold mb-2">{type.title}</h2>

              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PropertyType;
