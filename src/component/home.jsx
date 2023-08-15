import React from 'react';
import PropertySearch from './propertySearch';
import '../App.css'

const Home = () => {
    const services = [
        {
          title: 'Find Properties',
          description: 'Search for your dream property with our advanced search filters.',
          imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
        },
        {
          title: 'Property Listings',
          description: 'Explore a wide range of properties available for rent and sale.',
          imageUrl: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
        },
        {
          title: 'Expert Agents',
          description: 'Connect with experienced agents who can help you find the perfect property.',
          imageUrl: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
        },
      ];

  return (
    <div className="bg-gray-100 relative">
      {/* Top Section */}
      <div
        className="bg-cover bg-center md"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1512359953714-f0c9a632ab85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb3BlcnR5fGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60")',
        }}
        
      >
        <PropertySearch />
      </div>

   
      {/* Property Information Section */}
      <div className="container mx-auto mt-8 px-4 md:px-0" style={{ maxWidth: '85%' }}>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {services.map((service, index) => (
                 <div key={index} className="block lg:flex mb-8 border-b pb-4">
                 <div className="w-full lg:w-1/2 lg:pr-6">
                     <img src={service.imageUrl} alt={service.title} className="h-full w-full rounded-md shadow-md" />
                 </div>
                 <div className="w-full my-5 lg:my-0 lg:w-1/2 title">
                     <h2 className="border-b pb-4 text-2xl font-semibold mb-2">{service.title}</h2>
                     <p className="border-b pb-4 mb-10">{service.description}</p>
                 </div>
                 </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;