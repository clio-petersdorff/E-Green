import React from 'react'
import Form from './Form'

import "../style/RaiseAwareness.css"

export default function RaiseAwareness() {
  return (
    <>
        <section className='align-left'>
            <div>
                <h2>WHY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <img />
        </section>

        <section className='align-right'>
            <Form />

            <div>
                <h2>HOW</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>


        <footer>
            <nav>
                <button>Check my website</button>
                <button>Take the quiz only</button>
                <button>Learn more on eco-conception</button>
            </nav>

            <section>
                <img src='src/assets/main-logo.svg'/>
                <p className='align-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu adipiscing elit, sed do eiusmod tempor incididu adipiscing elit, sed do eiusmod tempor incididu </p>
            </section>
            

        </footer>
    </>
  )
}
