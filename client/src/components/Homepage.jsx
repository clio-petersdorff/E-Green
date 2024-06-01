import React from 'react'
import Form from './Form'

import "../style/Homepage.css"

export default function Homepage({submittedURLCb,changeView}) {
  return (
    <div id="homepage">
        <img src='src/assets/logo-inline-clear.svg' />
        <hr />
        <p>Welcome to E-Green, <br/>Enter the URL of a website page to get its Co2 emissions and eco-score</p>

        <Form submittedURLCb={(url)=>submittedURLCb(url)} changeView={(view)=>changeView(view)}/>

        <button className='scrollDown'>↓</button>
    </div>
  )
}
