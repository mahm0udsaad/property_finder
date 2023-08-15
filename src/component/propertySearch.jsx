import React from 'react';
import { Link } from 'react-router-dom';

const PropertySearch = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="search bg-white p-4 md:p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/2">
        <div className=" flex flex-col space-y-4">
          <div className="flex md:justify-between space-x-2 md:space-x-4">
            <Link to={'/properties'} className="flex-1 md:flex-none px-4 py-2 bg-blue-500 text-white rounded-md">
              Buy
            </Link>
            <Link to={'/properties'} className="flex-1 md:flex-none px-4 py-2 bg-green-500 text-white rounded-md">
              Rent
            </Link>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 lg:space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow px-4 py-2 border rounded-md"
            />
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 17l5-5m0 0l-5-5m5 5h-5"
                ></path>
              </svg>
              Search
            </button>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 lg:space-x-4">
            <select className="px-4 py-2 border rounded-md">
              <option value="">Property Type</option>
              {/* Add more options here */}
            </select>
            <select className="px-4 py-2 border rounded-md">
              <option value="">Beds</option>
              {/* Add more options here */}
            </select>
            <select className="px-4 py-2 border rounded-md">
              <option value="">Price</option>
              {/* Add more options here */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
