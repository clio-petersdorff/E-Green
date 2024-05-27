import React from 'react'
import "../style/Loading.css"

export default function Loading() {
  return (
    <div id="loading">
        <div>
            <img src='src/assets/logo-inline-clear.svg' />

            <div id="textDiv">
                <p className='text text-l'>L</p>
                <p className='text text-o'>O</p>
                <p className='text text-a'>A</p>
                <p className='text text-d'>D</p>
                <p className='text text-i'>I</p>
                <p className='text text-n'>N</p>
                <p className='text text-g'>G</p>
            </div> 

            <div id="green"></div>
        </div> 
    </div>
  )
}
