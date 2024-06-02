import React, { useEffect, useState } from 'react'

import Quiz from './Quiz';

import "../style/Results.css"

export default function Results({emissions,isGreenHoster,changeView,currentView}) {
    const [visitors,setVisitors] = useState(100);
    let score;

  
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

    useEffect(calculateScore(),[])
    

    function handleChange(event){
        setVisitors(event.target.value);
    }

  return (
    <div id="results">
        <div id="logo"> 
            <img src='src/assets/logo-inline-clear.svg'/>
            <hr />
            <p id='testAnotherWebsite' onClick={()=>changeView("Homepage")}>Test another website</p>
        </div>

        <Quiz id="quiz" currentView={currentView} changeView={(view)=>changeView(view)}/>

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

    </div>
  )
}
