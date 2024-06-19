import React from 'react'
import Form from './Form'
import {useNavigate} from 'react-router-dom'

import "../style/Homepage.css"

export default function Homepage({submittedURLCb,changeView}) {
  // let navigate = useNavigate(); 

  function goToLogin(){
    navigate('/login-page')
  }
  return (
    <div id="homepage">
        <img src='src/assets/logo-inline-clear.svg' />
        <hr />
        <p>Welcome to E-Green, <br/>Enter the URL of a website page to get its Co2 emissions and eco-score</p>

        <Form submittedURLCb={(url)=>submittedURLCb(url)} changeView={(view)=>changeView(view)}/>
        <p>OR <br/> <br/> Login to see your history<br/></p>
        
        <button onClick={()=>changeView("Login")}>Login</button>
        <button onClick={()=>changeView("Register")}>Register</button>
        {/* <button onClick={goToLogin()}>Login</button> */}


        <button className='scrollDown'><img src='../src/assets/arrow-down.svg' style={{width:"50%", paddingTop:"20%"}}/></button>
    </div>
  )
}
