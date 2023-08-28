import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import PropertyCard from './propertyCard';
import { SimpleContext } from '../context';
import FixedPropertySearch from './fixedSearchBar';


const Main = () => {
  const [isLoading ,setIsLoading] = useState(false)
  const { propertiesType ,type , properties , setProperties ,notFound} = useContext(SimpleContext);


  useEffect(() => {
     if(type){
      axios.get(`https://getproperties-api.onrender.com/for-${type}-properties/${propertiesType}`)
      .then(response => {
        setProperties(response.data)
        setIsLoading(true)
    })
      .catch(error => console.error(error));
     }
  }, [type]);
  return (
    <>
      <div className="min-h-screen  bg-gray-100">
        <FixedPropertySearch />
       {isLoading ? (
         <div className="w-full md:w-85 lg:w-85 lg:mx-auto lg:px-4 grid grid-cols-1  gap-6">
         {notFound? (
         <div className="container h-screen flex flex-col justify-center items-center">
           <h1>404 not found</h1>
         </div>
         ):
         (
          properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))
         )}
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