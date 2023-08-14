import React from 'react';
import { Link } from 'react-router-dom';
const OnWork = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-700">
        We're Still Working on This!
      </h1>
      <img
        src="..\public\1583772_219347-P0VB16-493.jpg"
        alt="Under Construction"
        className="h-96 mb-8"
      />
      <p className="text-sm text-center text-gray-500">
        In the meantime, check out some of our other pages:
      </p>
      <ul className="list-none mt-4">
        <li>
        <Link to={`/properties`} className="text-blue-600 hover:text-gray-200">
            Properties
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default OnWork;