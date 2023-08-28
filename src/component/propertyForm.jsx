import React, { useState } from 'react';
import axios from 'axios' ;
const PropertyForm = () => {
  const [bedNum, setBedNum] = useState(1);
  const [bathNum, setBathNum] = useState(1);
  const [sqft, setSqft] = useState(1000);
  const [sqm, setSqm] = useState(93);
  const initialProperty = {
    date: '',
    id: 0,
    imgSrc: '',
    location: '',
    price: 100,
    specifications: [`${bedNum} bedroom`, `${bathNum} bathroom`, `${sqft} sqft / ${sqm}sqm`],
    title: '',
    type: '',
  };
  const [property, setProperty] = useState(initialProperty);
  const addList =()=>{
    axios.post('https://getproperties-api.onrender.com/List-new' ,property)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProperty({
          ...property,
          imgSrc: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the property data, such as sending to an API or storing in state
    console.log('Submitted property:', property);
  };

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-4">Create Property</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
      <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            name="imgSrc"
            onChange={handleImageUpload}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={property.title}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">property type</label>
          <input
            type="text"
            name="type"
            value={property.type}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">price</label>
          <input
            type="number"
            name="price"
            value={property.price}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="flex mb-4">
      <div className="w-1/2 mr-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
        <input
          type="number"
          min={1}
          max={4}
          name="Bedrooms"
          value={bedNum}
          onChange={handleInputChange}
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="w-1/2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
        <input
          type="number"
          name="Bathrooms"
          value={bathNum}
          onChange={handleInputChange}
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">sqm</label>
            <input
            type="number"
            name="sqm"
            value={sqm}
            onChange={(e)=>setSqm(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">sqft</label>
            <input
              type="number"
              name="sqft"
              value={sqft}
              onChange={(e)=>setSqft(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
    </div>

        <button
          onClick={addList}
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
        >
          Create Property
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;
