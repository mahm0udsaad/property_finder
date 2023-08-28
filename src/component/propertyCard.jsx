import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faRuler ,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const PropertyCard = ({ property }) => {
 const formatedPrice =(price)=> price.toLocaleString()
  const iconMap = {
    'bedrooms': <FontAwesomeIcon icon={faBed} />,
    'bathrooms': <FontAwesomeIcon icon={faBath} />,
    'sqm': <FontAwesomeIcon icon={faRuler} />,
  };

  return (
    <Link to={`/property/${property.id}`}>
       <div className="card md:flex w-full bg-white md:h-64 lg:h-full border rounded-xl lg:p-4 md:m-2">
       <div className="image-wrapper md:w-72 lg:w-full lg:h-3/5 ">
       <img src={property.imgSrc} alt={property.name} className="h-full w-full" />
       </div>
       <div className="wrapper relative m-4 md:w-7/12  lg:h-2/5">
      <p className="truncate text-xs text-gray-500">{property.type}</p>
       <p className='text-lg font-semibold'>Price: {formatedPrice(property.price)} EG</p>
       <h2 className="text-gray-500">
              {property.title}
        </h2>
      <p className="text-gray-500 mt-2 truncate text-xs">
       <FontAwesomeIcon className='mr-2' icon={faMapMarkerAlt} />
        {property.location}</p>
      <div className="mt-4 lg:block flex justify-between items-center">
        <div className='flex justify-between w-full text-sm text-gray-500'>
        {property.specifications.map((spec, index) => (
          <span key={index}>
            {iconMap[spec.toLowerCase().split(' ')[1]]} {spec} 
          </span>
        ))}
        </div>
      </div>
       </div>
    </div>
    </Link>
  );
};

export default PropertyCard;