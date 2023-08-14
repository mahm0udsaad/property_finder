import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const PropertyCard = ({ property }) => {

  return (
    <Link to={`/property/${property.id}`}>
       <div className="bg-white h-30 shadow-md rounded-lg p-4">
       <div className="image-wrapper h-3/5 overflow-hidden">
       <img src={property.image} alt={property.name} className="mb-4" />
       </div>
       <div className="wrapper relative h-2/5">
       <h2 className="text-xl font-semibold">{property.name}</h2>
      <p className="text-gray-600 mb-2 truncate">{property.location}</p>
      <p className="truncate text-gray-700">{property.description}</p>
      <div className="mt-4 lg:block flex justify-between items-center">
        <div>
          <span className="text-gray-600">Price: {property.totalPrice}</span>
        </div>
        <div className='absolute bottom-0'>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Message
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ml-2">
            Call
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ml-2">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 inline-block align-text-bottom"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 20s-8-4.5-8-9.999A6 6 0 0112 4a6 6 0 018 6.001c0 5.499-8 9.999-8 9.999z"
                />
                </svg>
          </button>
        </div>
      </div>
       </div>
    </div>
    </Link>
  );
};

export default PropertyCard;