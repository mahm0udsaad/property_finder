import React, { Profiler, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [profile , setProfile] = useState({})
  const [toggle, setToggle] = useState(false);
  const handleMenuToggle = () => {
    setToggle(true);
  };
  const toggleClose =()=>{
    setToggle(false)
  }
  const menuClassName = toggle
  ? "translate-x-0 ease-out duration-300 opacity-100"
  : "-translate-x-full ease-in duration-300 opacity-0 pointer-events-none";

  useEffect(()=>{
      const  profileInfo = localStorage.getItem('userProfile');
      const user = JSON.parse(profileInfo)
      setProfile(user)
  },[])
  return (
    <nav className="bg-blue-500 lg:p-4 md:p-4 pt-4">
      <div className="nav-bar container w-full lg:mx-auto md:mx-auto mx-2  flex justify-between items-center">
        <Link to={'/'} className="justify-start text-white font-semibold text-lg lg:mb-4 md:mb-4 mb-1 sm:w-1/4">
          Property Finder
        </Link>
        <div className="hidden md:flex lg:flex justify-center space-x-4 mb-4 sm:mb-0 sm:w-1/2">
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
        <div className="flex justify-end w-full sm:w-1/4 space-x-4">
          {profile ? (
            <img
            src={profile.picture}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          ):(
            ''
          )}
        <button onClick={handleMenuToggle} className="md:hidden lg:hidden text-4xl text-white ml-5 mb-18">
            ☰
          </button>
        </div>
          <div
        className={`z-50 fixed top-0 left-0 h-full bg-white transform w-full ${menuClassName}`}
         >
          <ul className="text-black flex flex-col bg-wheat items-center justify-center m:w-full h-full">
          <button className="absolute top-5 right-5 text-4xl" onClick={toggleClose}>X</button>
          <Link to={`/`} onClick={toggleClose}   className="p-3 text-5xl mb-8  hover:animate-bounce  ease-in duration-200">
            Home
          </Link>
          <Link to={`/properties`}  onClick={toggleClose}  className="p-3 text-5xl mb-8  hover:animate-bounce  ease-in duration-200">
            Properties
          </Link>
          <Link to={`/stillOnWork`} onClick={toggleClose}  className="p-3 text-5xl mb-8  hover:animate-bounce  ease-in duration-200">
            Contact
          </Link>
            <Link to={`/login`} onClick={toggleClose}   className="p-3 text-5xl mb-8  hover:animate-bounce  ease-in duration-200">
            Sign In
          </Link>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;