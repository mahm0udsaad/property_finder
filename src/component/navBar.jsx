import React, { Profiler, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [profile , setProfile] = useState({})
  useEffect(()=>{
      const  profileInfo = localStorage.getItem('userProfile');
      const user = JSON.parse(profileInfo)
      setProfile(user)
  },[])
  return (
    <nav className="bg-blue-500 p-4">
      <div className="nav-bar container mx-auto flex flex-wrap justify-between items-center">
        <Link to={'/'} className="text-white font-semibold text-lg mb-4 sm:mb-0 sm:w-1/4">
          Property Finder
        </Link>
        <div className="flex items-center space-x-4 mb-4 sm:mb-0 sm:w-1/2">
          <Link to={`/`} className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to={`/properties`} className="text-white hover:text-gray-200">
            Properties
          </Link>
          <Link to={`/stillOnWork`} className="text-white hover:text-gray-200">
            Contact
          </Link>
          {profile? (''):(
            <Link to={`/login`} className="text-white hover:text-gray-200">
            Sign In
          </Link>
          )}
        </div>
        <div className="flex items-center w-full sm:w-1/4 space-x-4">
         {profile ? (
            <img
            src={profile.picture}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          ):(
            ''
          )}
          <input
            type="text"
            placeholder="Search properties"
            className=" px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 w-full sm:w-auto"
          />
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
