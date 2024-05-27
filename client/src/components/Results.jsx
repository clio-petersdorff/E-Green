import React, { useState } from 'react'

import Quiz from './Quiz';

import "../style/Results.css"

export default function Results({emissions,isGreenHoster}) {
    const [visitors,setVisitors] = useState(100);
    let score;
    //100 is 0.10g and 0 is 5.1g

    //Emissions-0.1
    // 0    100  50    ?
    // 5g   0    2.5    xg


    //It is a percentage
    //100% is 0g
    //0% is 5g
    //50% is 2.5g
    //75% is 1.25
    //25% is 3,75
    // ? is 3g

    //Get the score with 100x x / 5
    function calculateScore (){
        let g=emissions-0.1;

        if(g<1){
            score = Math.round(((g*60)/2));
            score = 100-score;
        } else {
            score = Math.round(((g*50)/2.5));
            score = score>=50? 100-score : 50+score;
        }
    }

    calculateScore();

    function handleChange(event){
        setVisitors(event.target.value);
    }

  return (
    <div id="results">
        <div id="logo"> 
            <img src='src/assets/logo-inline-clear.svg'/>
            <hr />
        </div>

        <Quiz id="quiz"/>

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
