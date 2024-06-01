import React from 'react'
import Form from './Form'

import "../style/Homepage.css"

export default function Homepage({submittedURLCb,changeView}) {
  return (
    <div id="homepage">
        <img src='src/assets/logo-inline-clear.svg' />
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>

        <Form submittedURLCb={(url)=>submittedURLCb(url)} changeView={(view)=>changeView(view)}/>

        <button className='scrollDown'>↓</button>
    </div>
  )
}
