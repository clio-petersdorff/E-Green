import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';

import Quiz from './Quiz';
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useAuth } from '../context/AuthContext'; 

import "../style/Results.css"

export default function Results({url, emissions,isGreenHoster,changeView,currentView}) {
    // const {loggedIn, setLoggedIn } = useContext(AuthContext);
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const [visitors,setVisitors] = useState(100);
    let score;

    let loggedIn = null
    localStorage.getItem('token') ? loggedIn = true : loggedIn = false

    function calculateScore (){
        let g=emissions-0.1;

        if(g<1){
            score = Math.round(((g*50)/1.5));
            score = 100-score;
        } else {
            score = Math.round(((g*50)/1.5));
            score = score<=50? 100-score : 50+score;
        }
    }

    calculateScore()
    let navigate = useNavigate()
    
    function handleChange(event){
        setVisitors(event.target.value);
    }

    async function saveResults(score) {
        // event.target.disabled = true
        console.log("SAVING RESULTS")

            let body = {
                score: score, 
                date: new Date().toISOString().slice(0, 19).replace('T', ' '),
                url: url
            }
            console.log(body.date)

            try{
               const results = await axios.post("/api/auth/user-history", body, {
                    headers: {
                        'authorization': "Bearer " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    } 
                })
                console.log(results.data)
                setButtonDisabled(true)
            } catch(e){
                console.log(e)
                navigate('/login')
            }            
    }

    function goToHistory(){
        navigate('/history')
    }

    function goToLogin(){
        navigate('/login')
    }

  return (
    <div id="results">
        <div id="logo"> 
            <img src='src/assets/logo-inline-clear.svg'/>
            <hr />
            <p id='testAnotherWebsite' onClick={()=>changeView("Homepage")}>Test another website</p>
        </div>


        <div id="score"><span>{score}</span><br/>/100</div>

        <div id="co2Emissions">
            <p>This page emits <span >{emissions.toFixed(2)}g</span> of Co2 per visit. <br/><br/></p>

            <p>For <input value={visitors} id="inputVisitors" type='number' onChange={(event)=>handleChange(event)}/> 
                visitors a month, <br/>
                This page would emit  
                <span>{emissions*visitors>1000? ` ${((emissions*visitors)/1000).toFixed(2)}Kg` : ` ${(emissions*visitors).toFixed(2)}g`}</span> of Co2.
            </p>
        </div>
        <div id="infos">
            {isGreenHoster && <p style={{color:'#82BA95'}}>Your website's hoster is green !</p>}
            {!isGreenHoster && <p><span style={{color:'red'}}>You don't have a green hoster for your website.</span><br/>
                Or we don't know the hoster on <a target='blank' href='https://app.greenweb.org/directory/'>this database</a>.</p>}
        </div>
        <div>
            {loggedIn && (
            <>
                <button
                    onClick={() => saveResults(score)}
                    className={!isButtonDisabled ? "disabledButton" : null}
                    disabled={isButtonDisabled}
                >
                    Save results
                </button>
                {isButtonDisabled && (
                    <button onClick={goToHistory}>View all results</button>
                )}
            </>
            )}

            {
                !loggedIn &&
                <>
                <p>To save your result, please log in</p>
                <button onClick = {goToLogin}>Login</button>
                </>
            }
        </div>
       
        
        <Quiz id="quiz" currentView={currentView} changeView={(view)=>changeView(view)}/>

    </div>
  )
}
