import React, { useState } from 'react'

import Homepage from './Homepage'
import RaiseAwareness from './RaiseAwareness'
import Loading from './Loading';
import Results from './Results';
import Quiz from './Quiz';

import axios from 'axios';
import { co2 } from '@tgwf/co2';

export default function FirstPage() {
  // let navigate = useNavigate(); 

  const [emissions, setEmissions] = useState(null);
  const [greenHoster, setGreenHoster] = useState(true);
  const [view, setView]= useState('Homepage');

    let myKeyXML = import.meta.env.VITE_APP_KEY_WHOISXML;
    let myKeySpeed = import.meta.env.VITE_APP_KEY_PAGESPEED;
  
  //These four functions are chained and calculates a website's Co2 emissions

  //Use the API PageSpeed Insight API by Google to get the number of bytes of the page
  function getBytesNumber(url){
    
    console.log(myKeySpeed)
    axios.get(`https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed`, {
      params:{
        url: url,
        key:myKeySpeed
      }
    })
    .then(function (response) {
      let bytes = response.data.lighthouseResult.audits['total-byte-weight'].numericValue;
      console.log(bytes);
      getHostName(url,bytes);
      // getCO2gramsPerView(bytes);
    })
    .catch(function (error) {
      console.log(error);
    });
    }

  
    //Use the Who is XML API to get the hosting service name
    function getHostName(url,bytes){
      const parsedUrl = new URL(url); // Parse the URL
      
      console.log(myKeyXML);
      axios.get(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${myKeyXML}&domainName=${url}`,{
        params:{
          outputFormat:"JSON"
        }
      })
      .then((response)=>{
          let hosterName = response.data.WhoisRecord.registrarName;
          console.log(hosterName);
          getIsGreenHosting(hosterName,bytes)
      })
      .catch(function(error){
          console.log(error);
      });
  }

  //Use the Green Check by The Green Web Foundation to see if the hosting service is considered green
  //Change the state isGreen.
  function getIsGreenHosting(hosterName,bytes){
    axios.get(`https://api.thegreenwebfoundation.org/api/v3/greencheck/${hosterName}`)
    .then((response)=>{
      let isGreen = response.data.green;
      console.log(response.data.green);
      getCO2gramsPerView(bytes,isGreen);
    })
    .catch(function(error){
      console.log(error);
  });
  }

  //Calculate the Co2 emissions with the Co2.js library
  //Change the state emissions
  function getCO2gramsPerView(bytes,isGreen){
    const swd = new co2({model: "swd"});

    let result = swd.perVisit(bytes,isGreen);

    setEmissions(result);
    setGreenHoster(isGreen);
    setView("Results");
  }

  //Callabck function for the form component to get the URL
  //And start the chaining of the 4 functions
  function submittedURL(url){
    setView("Loading");
    getBytesNumber(url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  //Callback function for many components to change the current view
  function changeView(newView){
    setView(newView);
    window.scrollTo({top:0, behavior: "smooth"});
  }


  return (
    <div id="FirstPage">

      {view==="Homepage" && < Homepage submittedURLCb={(url)=>submittedURL(url)} changeView={(view)=>changeView(view)} />}

      {view==="Loading" && <Loading />}

      {view==="Results" && <Results emissions={emissions} isGreenHoster={greenHoster} changeView={(view)=>changeView(view)} currentView={view}/>}

      {view==="QuizOnly" && <Quiz currentView={view} changeView={(view)=>changeView(view)} />}
      
      <RaiseAwareness submittedURLCb={(url)=>submittedURL(url)} currentView={view} changeView={(view)=>changeView(view)}/>

    </div>
  )
}

