import React, { useState, useContext } from "react";
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import axios from "axios";
import AuthContext from "../context/AuthContext";

import '../style/Login.css'

export default function Login() {
    const { loggedIn, setLoggedIn } = useContext(AuthContext);
    let navigate = useNavigate(); 

  const [credentials, setCredentials] = useState({
    username: "test",
    password: "test",
  });

  const [data, setData] = useState(null);

  const { username, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const register = async ()=>{
    try {

    } catch(e){
      console.log(e)
    }
  }
  
  const startRegister = async ()=>{
    try {

    } catch(e){
      console.log(e)
    }
  }
  
  const login = async () => {
    try {
      const {data} = await axios("/api/auth/login", {
        method: "POST",
        data: credentials
      })
      console.log(data)
      localStorage.setItem("token", data.token) // store token locally
      setData(data.message)
      setLoggedIn(true)
    } catch(e){
      console.log(e)
    //   setData(data.message)
    }
  };

  const logout = () => {
    // remove token from local storage
    localStorage.removeItem("token")
  };

  const requestData = async () => {
    try {
      const {data} = await axios("/api/auth/profile", {
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      }) 
      console.log(data)

    } catch(e){
      console.log(e)
    }
  };

  function goToHomepage(){
    navigate("/")
  }

  return (
    <>
        <div id = 'login'> 
                <img src='src/assets/logo-inline-clear.svg' />
                <hr />
        </div>

        <div>
            <div>
                <input
                value={username}
                onChange={handleChange}
                name="username"
                type="text"
                className="form-control mb-2"
                />
                <input
                value={password}
                onChange={handleChange}
                name="password"
                type="password"
                className="form-control mb-2"
                />
                <div className="d-flex gap-2 justify-content-center">
                <button className="btn btn-primary" onClick={login}>
                    Log in
                </button>
                </div>
                <div>
                    <p>If you don't have an account, you can register below <br/></p>
                    <button onClick = {startRegister}>
                        Register
                    </button>
                </div>
            </div>

            {data && (
                <div className="text-center p-4">
                <div className="alert">{data}</div>
                <button onClick={goToHomepage}>Test website</button>
                </div>
            )}
        </div>

        {/* Footer */}
        <footer>
            <nav>
                <button onClick={()=> changeView("Homepage")} >Check my website</button>
                <button onClick={()=>changeView("QuizOnly")}>Take the quiz only</button>
                <a href='https://www.greenit.fr/categorie/bonnes-pratiques/' target='blank' title='Green IT - In french'><button>Learn more on eco-conception</button></a>
            </nav>

            <section>
                <img src='src/assets/main-logo.svg'/>

                <p className='align-right'>This web app was created with the APIs : <br/><a href='https://developers.google.com/speed/docs/insights/v5/get-started?hl=fr'>Google LightHouse</a>, <a href='https://www.whoisxmlapi.com/'>Who Is XML</a>, <a href='https://developers.thegreenwebfoundation.org/api/greencheck/v3/check-single-domain/'>Green Check (The Green Web Foundation)</a> and the library <a href='https://developers.thegreenwebfoundation.org/co2js/methods/'>Co2.js (The Green Web Foundation)</a>. <br/>The recommendations are from the Green IT collective.</p>
            </section>
            
            <button onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>To top</button>
        </footer>

    </>
    
  );
}


 