import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { SimpleContext } from '../context';

const PropertySearch = () => {
  const { setType } = useContext(SimpleContext);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="search p-4 md:p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/2">
        <div className=" flex flex-col space-y-4">
          <div className="flex md:justify-between space-x-2 md:space-x-4">
            <Link to={'/properties'} onClick={()=>setType('buy')} className="flex-1 md:flex-none md:p-10 md:text-3xl px-4 py-3 bg-blue-500 text-white rounded-md">
              Buy
            </Link>
            <Link to={'/properties'} onClick={()=>setType('rent')} className="flex-1 md:flex-none md:p-10 md:text-3xl px-4 py-3 bg-green-500 text-white rounded-md">
              Rent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
