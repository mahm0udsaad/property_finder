import React, { useContext, useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SimpleContext } from '../context';

const clientId = '556177030262-19g1vli1979i99kjkuvosl1trqqlq9h0.apps.googleusercontent.com';

function GoogleLoginPage() {
        const [user, setUser] = useState({});
        const {profile ,setProfile} = useContext(SimpleContext)

      
        useEffect(() => {
          // Load profile data from localStorage on component mount
          const storedProfile = localStorage.getItem('userProfile');
          const profileInfo = JSON.parse(storedProfile)
          if (profileInfo) {
            setProfile(profileInfo);
          }else{
            setProfile(null)
          }
        }, []);
        const handelLogout = () => {
           localStorage.removeItem('userProfile')
           setProfile(null)
        };
        const getInfo = (res) => {
          const decoded = jwtDecode(res.credential);
          const { given_name, family_name, email, picture } = decoded;
          const newProfile = {
            name: given_name +''+family_name,
            email: email,
            picture: picture
          };
          setProfile(newProfile);
          // Store profile data in localStorage
          localStorage.setItem('userProfile', JSON.stringify(newProfile));
        };
      
        return (
          <>
            {profile ? (
            <h1 className='text-center'>you already sign in</h1>
            
            ) : (
              <GoogleOAuthProvider clientId={clientId}>
                <Google onSuccess={getInfo} />
              </GoogleOAuthProvider>
            )}
          </>
        );

}

export default GoogleLoginPage;