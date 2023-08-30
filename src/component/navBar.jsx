import React, { Profiler, useEffect, useState ,useContext} from 'react';
import { Link } from 'react-router-dom';
import { SimpleContext } from '../context';

const Navbar = () => {
  const {profile} = useContext(SimpleContext)


  return (
    <nav className="bg-blue-500  py-4 lg:p-4 md:p-4 pt-4">
      <div className="nav-bar container w-full lg:mx-auto md:mx-auto mx-2  flex justify-between items-center">
        <Link to={'/'} className="justify-start text-white font-semibold text-lg lg:mb-1 md:mb-4 mb-1 sm:w-1/4">
          Property Finder
        </Link>
        <div className=" flex justify-end  space-x-4  sm:mb-0 sm:w-1/2">
          <Link to={'/createAD'} className='bg-green-500 text-white p-2 lg:p-3 rounded'>List with us</Link>
          {profile? (
               <img
               src={profile.picture}
               alt="User"
               className="w-10 h-10 rounded-full"
             />
          ):(
            <Link to={`/login`} className="text-white hover:text-gray-200 flex items-center">
            Sign In
          </Link>
          
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;