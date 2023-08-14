import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router';
const PropertyPage = () => {
    const [property , setProperty] = useState({})
    const [isLoading , setIsLoading] = useState(false)
    const { id } = useParams();

    useEffect(()=>{
        axios.get(`https://getproperties-api.onrender.com/properties/${id}`)
            .then(res => {
                setProperty(res.data)
                setIsLoading(true)
            })
            .catch(err=> console.error(err))
    },[])
  return (
    <div className="min-h-screen bg-gray-100 py-10">
    {isLoading ? (
      <div className="bg-white shadow-md rounded-lg p-6 flex">
        <div className="w-full lg:w-2/3">
          <img src={property.image} alt={property.name} className="mx-auto mb-4" />
        </div>
        <div className="hidden lg:block lg:w-1/3 ml-4">
          <div className="bg-gray-100 p-4 rounded-lg">
          <div className="mx-auto">
           <h2 className="text-2xl font-semibold mb-2">{property.name}</h2>
          <p className="text-gray-600 mb-4">{property.location}</p>
          <p className="text-gray-700 mb-4">{property.description}</p>
           </div>
            <div className="text-gray-600 mb-2">Price: {property.totalPrice}</div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Message
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ml-2">
              Call
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ml-2">
              Love
            </button>
          </div>
        </div>
      </div>
    ):(
     <div className="flex justify-center items-center h-screen">
     <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
   </div>
    )}
   </div>
  );
};

export default PropertyPage;

