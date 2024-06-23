// Component displays e-green score history
import React, {useContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 


import axios from "axios";

export default function History(){
    let navigate = useNavigate()
    const { logout, loggedIn } = useAuth();

    useEffect(()=> {
        requestData()
    }, [])

    function goToHomepage(){
        navigate('/')
    }

    const handleLogout = () => {
        logout();
        // Redirect or handle state change after logout
    };

    const goToLogin = () => {
        navigate('/login')
    }

    const requestData = async () => {
        try {
          const {data} = await axios("/api/auth/history", {
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

    return (
        <>
            <button onClick = {goToHomepage} className="home-btn"><i className="fa fa-home"></i></button>
            <button onClick = {handleLogout}>Log out</button>

            <div id="history">
                <img src='src/assets/logo-inline-clear.svg' />
                <hr />
                    History
                    {
                        loggedIn &&
                        <div>
                            No history to show
                        </div>
                    }

                    {
                        !loggedIn &&
                        <div>
                            You are not logged in.
                            <button onClick = {goToLogin} >Login</button>
                        </div>
                    }
                
                {/* Footer */}
                <footer>
                    <nav>
                        <button onClick={goToHomepage} >Back to homepage</button>
                        <a href='https://www.greenit.fr/categorie/bonnes-pratiques/' target='blank' title='Green IT - In french'><button>Learn more on eco-conception</button></a>
                    </nav>

                    <section>
                        <img src='src/assets/main-logo.svg'/>

                        <p className='align-right'>This web app was created with the APIs : <br/><a href='https://developers.google.com/speed/docs/insights/v5/get-started?hl=fr'>Google LightHouse</a>, <a href='https://www.whoisxmlapi.com/'>Who Is XML</a>, <a href='https://developers.thegreenwebfoundation.org/api/greencheck/v3/check-single-domain/'>Green Check (The Green Web Foundation)</a> and the library <a href='https://developers.thegreenwebfoundation.org/co2js/methods/'>Co2.js (The Green Web Foundation)</a>. <br/>The recommendations are from the Green IT collective.</p>
                    </section>
                    
                    <button onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>To top</button>
                </footer>
            </div>        
        </>
        
    )
}