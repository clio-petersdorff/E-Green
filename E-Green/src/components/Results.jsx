import React from 'react'
import "../style/Results.css"

export default function Results({emissions}) {
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
        let g=emissions;

        if(g<1){
            score = Math.round(((g*60)/2));
            score = 100-score;
        } else {
            score = Math.round(((g*50)/2.5));
            score = score>=50? 100-score : 50+score;
        }
    }

    calculateScore();

  return (
    <div id="results">
        <div id="logo"> 
            <img src='src/assets/logo-inline-clear.svg'/>
            <hr />
        </div>

        <div id="quiz">
            <h2>Quiz</h2>
        </div>

        <div id="score">{score}</div>

        <p id="co2Emissions">You have {emissions}g of Co2 per view!</p>

        <p id="infos">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>

    </div>
  )
}
