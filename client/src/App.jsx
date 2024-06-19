import React, { useState } from 'react'
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom'

import FirstPage from './components/FirstPage'
import Login from './components/Login'
import History from './components/History'

import '../src/App.css'

export default function App() {

  return(
   <BrowserRouter>
    <div>
      <Routes>
        <Route path = "/" element = {<FirstPage/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/history" element = {<History/>}/>
      </Routes>  
    </div>   
   </BrowserRouter>
  )
}
