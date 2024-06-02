import React, { useState } from 'react'

import QuizQuestions from './QuizQuestions'
import QuizRecommendations from './QuizRecommendations'

import "../style/Quiz.css"

export default function Quiz({currentView,changeView}) {
    const EMPTY_FORM = {
      profile : "",
      when : ""
    }

    const [step,setStep] = useState("questions")
    const [answers,setAnswers] = useState(EMPTY_FORM)

    //Callback function for QuizQuestions component
    function submitAnswers(profile, when){
      let newAnswers = {...answers};
      
      newAnswers.profile = profile;
      newAnswers.when = when;

      setAnswers(newAnswers);
      setStep("recommendations");
    }


  return (
    <div id="quizComponent">

        {step==="questions" && <QuizQuestions submitAnswersCb={(profile,when)=>submitAnswers(profile,when)} />}
        {step==="recommendations" && <QuizRecommendations takeQuizAgain={()=>setStep("questions")} userAnswers={answers}/>}

        {currentView==="QuizOnly" && <p id="testAnotherWebsite" onClick={()=>changeView("Homepage")}>Go back to homepage.</p>}

    </div>
  )
}
