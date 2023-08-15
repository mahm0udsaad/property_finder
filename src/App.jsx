import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './component/propertyCard';
import PropertyPage from './component/propertyPage';
import Navbar from './component/navBar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Main from './component/main';
import Home from './component/home';
import OnWork from './component/onWork';
import GoogleLoginPage from './component/googleAuth';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {

  return (
    <>
      <GoogleOAuthProvider>
          <Router>
        <Navbar />
          <Routes>
            <Route path='/login' element={<GoogleLoginPage />} />
            <Route path='/' element={<Home />} />
            <Route path='/stillOnWork' element={<OnWork />} />
            <Route path='/properties' element={<Main />} />
            <Route path="/property/:id" element={<PropertyPage />}/>
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;