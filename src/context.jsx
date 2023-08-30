import React, { createContext, useContext, useState ,useEffect} from 'react';

// Create a context
const SimpleContext = createContext();

// Create a provider component
const SimpleProvider = ({ children }) => {
  const [propertiesType, setPropertiesType] = useState("apartment");
  const [properties, setProperties] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [profile , setProfile] = useState(null)
  const [type , setType] = useState('buy')
  
      useEffect(()=>{
        const  profileInfo = localStorage.getItem('userProfile');
        const user = JSON.parse(profileInfo)
        setProfile(user)
    },[])
  return (
    <SimpleContext.Provider value={{setProfile,profile,notFound , setNotFound,properties,  setProperties,propertiesType, setPropertiesType ,type ,setType}}>
      {children}
    </SimpleContext.Provider>
  );
};

export { SimpleProvider, SimpleContext };
