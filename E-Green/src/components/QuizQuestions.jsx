import React, { useState } from 'react'

export default function QuizQuestions({submitAnswersCb}) {
  const [profile,setProfile] = useState('Beginner');
  const [when,setWhen] = useState("Before");

  function handleClick (event){
    event.preventDefault();
    const {name} = event.target;

    if(name === "Beginner" || name === "Intermediate" || name === "Expert"){
      setProfile(name);
    }else {
      setWhen(name);
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    submitAnswersCb(profile,when);
  }

  return (
    <div style={{display:"flex",alignItems:"center",height:"100%"}}>

    <form onSubmit={(event)=>handleSubmit(event)}>
      <h2>Improve your footprint ↓</h2>

        <p>What is your skill level in technology ?</p>
            <button name="Beginner" onClick={(event)=>handleClick(event)} 
                    className={profile==="Beginner" ? "selected" :""}>Beginner</button>
            <button name="Intermediate" onClick={(event)=>handleClick(event)} 
                    className={profile==="Intermediate" ? "selected" :""}>Intermediate</button>
            <button name="Expert" onClick={(event)=>handleClick(event)} 
                    className={profile==="Expert" ? "selected" :""}>Expert</button>

        <p>Is your website already created ?</p>
            <button name='After' onClick={(event)=>handleClick(event)} 
                    className={when==="After" ? "selected" :""}>Yes</button>
            <button name='Before' onClick={(event)=>handleClick(event)} 
                    className={when==="Before" ? "selected" :""}>No</button>


        {/* <p styl>When you're ready ↓</p> */}

        <button id="submitQuizQuestions" type='submit'>Submit</button>
    </form>

    </div>
  )
}
