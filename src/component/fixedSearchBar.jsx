 import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { SimpleContext } from "../context";
import axios from "axios";

const FixedPropertySearch = () => {
  const { setType ,setProperties , setNotFound} = useContext(SimpleContext);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [filters, setFilters] = useState({
    type: "",
    propertyType: "",
    beds: "",
    minPrice: "",
    maxPrice: "",
  });

const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
};
const generatePriceOptions = () => {
    const options = [];
  
    for (let price = 100000; price <= 40000000; ) {
      options.push(
        <option key={price} value={price}>
          {price.toLocaleString()} EGP
        </option>
      );
  
      if (price < 1000000) {
        price += 100000;
      } else {
        price += 500000;
      }
    }
  
    return options;

};

const sendFilters = async (filters) => {
    try {
      const response = await axios.post("https://getproperties-api.onrender.com/search", filters); // Send filters in the request body
      const results = response.data;
      
      if(results.length > 0){
        setProperties(response.data)
        setNotFound(false)

      }else{
        setNotFound(true)
      }
      console.log("Results from server:", results);
      // Handle results in your React component
    } catch (error) {
      console.error("Error sending filters:", error);
    }
    setFilters({
      type: "",
      propertyType: "",
      beds: "",
      minPrice: "",
      maxPrice: "",
    });
  };
  
  return (
    <div className="sticky top-0 w-full bg-white p-2 md:p-2  z-50">
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-x-4">
        <button onClick={()=>sendFilters(filters)} className="mt-4 lg:px-4 px-2 py-2 bg-green-500 text-white rounded-md flex items-center">
            Find
        </button>
      <div className="flex md:flex-row md:items-center md:space-y-0 md:space-x-2 lg:space-x-4 mt-4 md:mt-0">
        <select
          name="type"
          className="filter-item lg:px-4 px-2 py-2 border rounded-md"
          onChange={handleFilterChange}
          value={filters.type ? filters.type :'buy'}
        >
          <option
          onChange={handleFilterChange}
          value="buy">
            buy</option>
          <option
          onChange={handleFilterChange}
          value="rent">
            rent</option>
        </select>
        <select
          name="propertyType"
          className="filter-item lg:px-4 px-2 py-2 border rounded-md"
          onChange={handleFilterChange}
          value={filters.propertyType}
        >
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="townhouse">Townhouse</option>
          <option value="chalet">Chalet</option>
          <option value="duplexe">Duplex</option>
        </select>
        <select
          name="beds"
          className="filter-item lg:px-4 px-2 py-2 border rounded-md"
          onChange={handleFilterChange}
          value={filters.beds}
        >
          <option value="">Beds</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div
          onClick={() => setShowPriceFilter(!showPriceFilter)}
          className="lg:px-4 filter-item px-2 py-2 border rounded-md"
        >
          <div className="flex items-center">
            <span className="mr-2">Price</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>

        {showPriceFilter ? (
          <div className="flex space-x-2 absolute top-32 right-0 bg-white">
          <div className="relative flex flex-col justify-center items-center">
            <label htmlFor="minPrice">Min Price</label>
            <select
                id="minPrice"
                name="minPrice"
                className="lg:px-4 px-2 py-2 border rounded-md"
                onChange={handleFilterChange}
                value={filters.minPrice}
            >
                <option value="">Select Min Price</option>
                {generatePriceOptions()}
            </select>
            </div>
            <div className="relative flex flex-col justify-center items-center">
            <label htmlFor="maxPrice">Max Price</label>
            <select
                id="maxPrice"
                name="maxPrice"
                className="lg:px-4 px-2 py-2 border rounded-md"
                onChange={handleFilterChange}
                value={filters.maxPrice}
            >
                <option value="">Select Max Price</option>
                {generatePriceOptions()}
            </select>
            </div>

            </div>
          ) : (
            ""
          )}
      </div>
    </div>
  );
};

export default FixedPropertySearch;
