import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './propertyCard';


const Main = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading ,setIsLoading] = useState(false)

  useEffect(() => {
      axios.get('https://getproperties-api.onrender.com/properties')
      .then(response => {
        setProperties(response.data)
        setIsLoading(true)
    })
      .catch(error => console.error(error));
      console.log(properties);
  }, []);
  return (
    <>
      <div className="min-h-screen  bg-gray-100 py-10">
       {isLoading ? (
         <div className="w-85 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
         {properties.map(property => (
           <PropertyCard key={property.id} property={property} />
         ))}
       </div>
       ):(
        <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
       )}
      </div>
    </>
  );
};

export default Main;