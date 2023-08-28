import React, { useEffect, useState ,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faExpandArrowsAlt, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useParams } from 'react-router';
import { SimpleContext } from '../context';

const PropertyInfoComponent = ({ icon, label, value }) => {
  return (
    <div className="flex items-center space-x-2 p-4  rounded-lg">
      <div className="text-2xl text-gray-600 mb-2">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className=" ">{label} :</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
};
const PropertyPage = () => {
    const [property , setProperty] = useState({})
    const [isLoading , setIsLoading] = useState(false)
    const {propertiesType , type} = useContext(SimpleContext)
    const { id } = useParams();
    const formatedPrice =(price)=> price.toLocaleString()

    useEffect(()=>{
        axios.get(`https://getproperties-api.onrender.com/for-${type}-properties/${propertiesType}/${id}`)
            .then(res => {
                setProperty(res.data)
                setIsLoading(true)
            })
            .catch(err=> console.error(err))
    },[])

  return (
    <div className="min-h-screen bg-gray-100 py-10">
    {isLoading ? (
      <div className="bg-white shadow-md rounded-lg p-6 lg:flex lg:justify-between">
        <div className="w-full lg:w-3/5">
          <img src={property.imgSrc} alt={property.title} className="mx-auto w-full mb-4" />
        </div>
        <div className="w-full mx-auto block lg:w-1/3 ">
          <div className="bg-gray-100 p-4 rounded-lg">
          <div className="mx-auto">
           <h2 className="text-2xl font-semibold mb-2">{property.title}</h2>
          <p className="text-gray-600 mb-4">{property.location}</p>
           </div>
            <div className="grid grid-cols-2 gap-4 mb-5">
            <PropertyInfoComponent icon={faHome} label="Property type" value="Duplex" />
           <PropertyInfoComponent icon={faExpandArrowsAlt} label="Property size" value="2,992 sqft / 278 sqm" />
           <PropertyInfoComponent icon={faBed} label="Bedrooms" value="3" />
           <PropertyInfoComponent icon={faBath} label="Bathrooms" value="3" />
            </div>
            <div className="text-gray-600 text-lg mb-2">Price: {formatedPrice(property.price)} EG</div>
          <div className="flex">
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
          <div className='text-gray-600 mt-2'>{property.date}</div>
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

