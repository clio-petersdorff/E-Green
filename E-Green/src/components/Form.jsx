import React, { useState } from 'react'

export default function Form() {
  const [url,setUrl] = useState("");
  const [validUrl,setValidUrl] = useState(true);

  function handleChange(event){
    setUrl(event.target.value);
  }

  function checkIfValidUrl(url){
    try {
      let result = Boolean(new URL(url));
      setValidUrl(result);
      return result;
    }
    catch(e){
      setValidUrl(false);
      return false;
    }
  }

  function handleSubmit(event){
    event.preventDefault();

    if(checkIfValidUrl(url)){
      //Cb function
      console.log("good");
    }

    console.log('bad');

    setUrl("");
  }


  return (
        <form onSubmit={(event)=>handleSubmit(event)}>
            <input placeholder='Enter your URL' value={url} onChange={(event)=>handleChange(event)} />
            <button>Submit</button>

            {!validUrl && <p>Try again, this isn't a valid URL</p>}

            <button className='quizOnlyButton'>Take the quiz only</button>
        </form>
  )
}
