import React from 'react';
import { FaHeart } from 'react-icons/fa'; 
import { FaLocationDot } from "react-icons/fa6";

const properties = [
  {
    id: 1,
    image: 'p1.jpg', 
    name: 'Red Carpet Real Estate',
    address: '1234 Elm St, Springfield',
    price: 3700,
    type: 'For Sale',
    Category:'Apartment'
  },
  {
    id: 2,
    image: 'p2.jpg', 
    name: 'Fairmount Properties',
    address: '5698 Zirak Road, NewYork',
    price: 9750,
    type: 'For Rent',
    Category:'Condos'

  },
  {
    id: 3,
    image: 'p3.jpg', 
    name: 'The Real Estate Corner',
    address: ' 5624 Mooker Market, USA',
    price: 5860,
    type: 'For Rent',
    Category:'Offices'

  },
  {
    id: 4,
    image: 'p4.jpg',
    name: 'Herringbone Realty',
    address: ' 5621 Liverpool, London',
    price: 7540,
    type: 'For Rent',
    Category:'Homes & Villas'

  },
  {
    id: 5,
    image: 'p5.jpg', 
    name: 'Brick Lane Realty',
    address: '210 Montreal Road, Canada',
    price: 4850,
    type: 'For Sale',
    Category:'Commercials'

  },
  {
    id: 6,
    image: 'p6.jpg', 
    name: 'Banyon Tree Realty',
    address: '210 Zirak Road, Canada',
    price: 2742,
    type: 'For Rent',
    Category:'Apartment'

  },
];

const RecentProperty = () => {
  return (
    <div className="max-w-screen-lg mx-auto mb-16 p-4">
      <h2 className="text-4xl text-gray-700 font-bold text-center mt-8">Recent Property Listed</h2>
      <p className="text-center mt-2   text-slate-500">

      Discover our latest properties and apartments available for sale or rent.
      </p>
      <p className="text-center   text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptates provident incidunt? </p>
<p className="text-center mb-10  text-slate-600">Apartments?</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="border  shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover mb-3" />
            <div className="p-4 relative">
              <span
                className={`absolute top-4 left-4  text-sm font-semibold rounded mb-3 px-2 py-1 ${
                  property.type === 'For Sale' ? 'bg-orange-100 text-orange-500' : 'text-green-800 bg-green-100'
                }`}
              >
                {property.type}
              </span>
              <FaHeart className="absolute top-4 right-4 w-6 h-6 text-gray-500 cursor-pointer" />
              <h3 className="mt-10 text-lg font-semibold">{property.name}</h3>
              <div className='flex '>
              <FaLocationDot className='mx-1 mt-1 text-gray-600' />
              <p className="text-gray-600">{property.address}</p>
              </div>
              <div className="flex justify-between items-center mt-8 w-full border-t-2 pt-2">
                <button className="bg-green-600 text-white font-bold text-2xl px-6 py-3 rounded-full">
                  ${property.price}
                </button>/sqft
                <span className="text-black text-xl">{property.Category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProperty;
