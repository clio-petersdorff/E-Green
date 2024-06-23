import React, { useState, useContext } from "react";
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import AuthContext from "../context/AuthContext";
import { useAuth } from '../context/AuthContext'; 

import '../style/Login.css'

export default function Login() {
    const { loggedIn, setLoggedIn } = useContext(AuthContext);
    let navigate = useNavigate(); 

    const {login, logout} = useAuth();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [data, setData] = useState(null);

  const { username, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials);
    // Redirect or handle state change after login
};

 
  const startRegister = async ()=>{
    try {

    } catch(e){
      console.log(e)
    }
  }

  function goToHomepage(){
    navigate("/")
  }

  return (
    <>
      <button onClick = {goToHomepage} className="home-btn"><i className="fa fa-home"></i></button>
      <div id = 'login'> 
              <img src='src/assets/logo-inline-clear.svg' />
              <hr />
      </div>

      {
        !loggedIn &&
        <div>
            <div>
                <input
                value={credentials.username}
                onChange={handleChange}
                name="username"
                type="text"
                className="form-control mb-2"
                />
                <input
                value={credentials.password}
                onChange={handleChange}
                name="password"
                type="password"
                className="form-control mb-2"
                />
                <div className="d-flex gap-2 justify-content-center">
                <button className="btn btn-primary" onClick={handleSubmit}>
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
          </div>
          }
      
          {loggedIn && (
              <div className="text-center p-4">
                <p>You are logged in as 'username'</p>
                <button onClick={goToHomepage}>Test website</button>
                <button onClick = {logout}>Log in as other user</button>
              </div>
          )
          }
      

      {/* Footer */}
      <footer>
          <nav>
            <button onClick = {goToHomepage} >Go back to home page</button>
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


 