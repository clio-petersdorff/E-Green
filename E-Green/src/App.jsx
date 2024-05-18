import React from 'react'
import Homepage from './components/Homepage'
import RaiseAwareness from './components/RaiseAwareness'
import axios from 'axios';
import { co2 } from '@tgwf/co2';

import '../src/App.css'

export default function App() {
  let myKeySpeed = "AIzaSyBbPGKJV_6KhpruB8Q2Ra15LdU95i0MWzA"

  function getBytesNumber(url){

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

  

    function getHostName(url,bytes){
      const parsedUrl = new URL(url); // Parse the URL
      axios.get(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_fcNZEBwlbIhvWR5qKGQP1v0MJibor&domainName=${url}`,{
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


  function getCO2gramsPerView(bytes,isGreen){
    const swd = new co2({model: "swd"});

    console.log(swd.perVisit(bytes,isGreen));
  }

  // getBytesNumber('https://orlanebdesign.com');

  return (
    <div>
      < Homepage />
      {/* Results */}
      <RaiseAwareness />
    </div>
  )
}

