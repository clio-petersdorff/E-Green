import React from 'react'

export default function Form() {
  return (
        <form>
            <input placeholder='Enter your URL' />
            <button>Submit</button>

            <button className='quizOnlyButton'>Take the quiz only</button>
        </form>
  )
}
