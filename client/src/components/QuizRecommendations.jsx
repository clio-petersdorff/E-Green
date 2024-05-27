import React, { useState } from 'react'
import dataQuiz from "../dataQuiz.js"

export default function QuizRecommendations({takeQuizAgain}) {

  let profile = "Beginner";
  let when="Before";
 
  let reco = dataQuiz.filter((item)=>{
    return item.profile===profile && (item.when===when || item.when==="Doesn't matter");
  })

  const [featuredReco,setFeaturedReco] =useState(reco[0]);

  function handleClick(name){
    let newFeaturedReco = reco.find((item)=> item.name===name);

    setFeaturedReco(newFeaturedReco);
  }

  return (
    <>
      <button id='takeQuizAgain' onClick={()=>takeQuizAgain()}>←</button>

      <div id="featuredReco">
        <h2>{featuredReco.name}</h2>
        <p>{featuredReco.howTo}</p>
      </div>

      <ul>
        {reco.map((item)=>(
          <li key={item.name} onClick={()=>handleClick(item.name)}
              className={item.name===featuredReco.name?"selectedReco":""}
          >{item.name}</li>
        ))}
      </ul>

    </>
  )
}
