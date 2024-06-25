import React, {useState, useContext, useEffect} from 'react';
import Form from './Form'
import {useNavigate} from 'react-router-dom'
import AuthContext from "../context/AuthContext"
import axios from "axios";

import "../style/Homepage.css"

export default function Homepage({submittedURLCb, changeView}) {

  useEffect(()=> {
      getUserName()
  }, [])

  const navigate = useNavigate(); 
  const { logout } = useContext(AuthContext);
  let loggedIn = null
  localStorage.getItem('token') ? loggedIn = true : loggedIn = false

  const [userName, setUserName] =useState('')

  function goToLogin(){
    navigate('/login')
  }

  function goToHistory(){
    navigate('/history')
  }

  const handleLogout = () => {
    logout();
};

  async function getUserName(){
    try {
      const results = await axios.get('/api/auth/users', {            
        headers: {
          'authorization': "Bearer " + localStorage.getItem("token")
        }
      })
      console.log(results)
      setUserName(results.data.username)
    } catch(e) {
      console.log(e)
    }
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
          <p>You are logged in as <em>{userName}</em></p>
          <button onClick = {goToHistory}>View History</button>
          <button onClick = {handleLogout}>Log out</button>
          </>

        }

        <button className='scrollDown'><img src='../src/assets/arrow-down.svg' style={{width:"50%", paddingTop:"20%"}}/></button>
    </div>
  )
}
