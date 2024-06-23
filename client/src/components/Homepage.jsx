import React, {useState, useContext} from 'react';
import Form from './Form'
import {useNavigate} from 'react-router-dom'
import AuthContext from "../context/AuthContext"

import "../style/Homepage.css"

export default function Homepage({submittedURLCb, changeView}) {
  const navigate = useNavigate(); 
  const { loggedIn } = useContext(AuthContext);

  function goToLogin(){
    navigate('/login')
  }

  function goToHistory(){
    navigate('/history')
  }

  return (
    <div id="homepage">
        <img src='src/assets/logo-inline-clear.svg' />
        <hr />
        <p>Welcome to E-Green, <br/>Enter the URL of a website page to get its Co2 emissions and eco-score</p>

        <Form submittedURLCb={(url)=>submittedURLCb(url)} changeView={(view)=>changeView(view)}/>
        
        {!loggedIn && 
          <div>
            <p>OR <br/> <br/> Login to see your history<br/></p>
            <button onClick={goToLogin}>Login</button>           
          </div>
        }

        {loggedIn &&
          <>
          <p>You are logged in as "user.name"</p>
          <button onClick = {goToHistory}>View History</button>
          <button>Log out</button>
          </>

        }

        <button className='scrollDown'><img src='../src/assets/arrow-down.svg' style={{width:"50%", paddingTop:"20%"}}/></button>
    </div>
  )
}
