import React, { useState } from 'react'

import QuizQuestions from './QuizQuestions'
import QuizRecommendations from './QuizRecommendations'

import "../style/Quiz.css"

export default function Quiz() {
    const EMPTY_FORM = {
      profile : "",
      when : ""
    }

    const [step,setStep] = useState("questions")
    const [answers,setAnswers] = useState(EMPTY_FORM)

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
        {step==="recommendations" && <QuizRecommendations takeQuizAgain={()=>setStep("questions")} />}
    </div>
  )
}
