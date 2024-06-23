import React, { createContext, useState, useContext } from 'react';
import axios from "axios";

// Create the AuthContext with default value
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const register = async ()=>{
        try {
    
        } catch(e){
          console.log(e)
        }
      }
      
      const login = async (credentials) => {
        console.log(credentials)
        try {
          const {data} = await axios("/api/auth/login", {
            method: "POST",
            data: credentials
          })
          console.log(data)
          localStorage.setItem("token", data.token) // store token locally
          setLoggedIn(true)
        } catch(e){
          console.log(e)
        }
      };
    
      const logout = () => {
        // remove token from local storage
        localStorage.removeItem("token")
        setLoggedIn(false); // Update logged in state
      };

    return (
        <AuthContext.Provider value={{ loggedIn, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);

export default AuthContext; 
