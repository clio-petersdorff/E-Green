import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import dataQuiz from "../dataQuiz.js"

export default function QuizRecommendations({takeQuizAgain, userAnswers}) {

  const {profile,when} = userAnswers;
  const [reco,setReco] = useState(null);
  const [featuredReco,setFeaturedReco] =useState();


  useEffect(()=>{
    getRecommendations();
  }, [])

  //Get the recommendations from the database
  function getRecommendations (){
    axios.get(`http://localhost:5000/api/goodpratices/${profile}/${when}`)
    .then((response)=> {setReco(response.data);
      setFeaturedReco(response.data[0]);
    }
    ).catch((err)=>console.log(err.message))
  }



  function handleClick(name){
    let newFeaturedReco = reco.find((item)=> item.name===name);

    setFeaturedReco(newFeaturedReco);
  }

  return (
    <>
      <button id='takeQuizAgain' onClick={()=>takeQuizAgain()}>←</button>

      { reco && <div>
      <div id="featuredReco">
        <h2>{featuredReco.name}</h2>
        <p>{featuredReco.how_to}</p>
      </div>

      <div className='recoBlock'>
        {reco.map((item)=>(
          <p key={item.name} onClick={()=>handleClick(item.name)}
              className={item.name===featuredReco.name?"selectedReco":""}
          >{item.name}</p>
        ))}
      </div>

      </div>}
      

    </>
  )
}
