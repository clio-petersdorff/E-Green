import React from 'react'
import Form from './Form'

import "../style/RaiseAwareness.css"

export default function RaiseAwareness({submittedURLCb, currentView,changeView}) {


  return (
    <>
        {/* For the Results view, there's an extra hr to look better */}
        {currentView==="Results" && <hr className='hrRaiseAwareness' />}

        <section className='align-left'>
            <div>
                <h2>WHY</h2>
                <p>Reducing our digital footprint is more important now than ever. <br/><br/> The digital world is growing rapidly, and with it, its environmental impact.<br/> Did you know that the internet is responsible for about 3.8% of global greenhouse gas emissions?<br/> That's as much as civil airline industry!<br/><br/> However, by adopting eco-friendly design practices, we can make a big difference : optimizing a website can cut its carbon emissions by up to 50%.<br/> Imagine the collective impact if we all took steps towards greener web practices.</p>
            </div>

            <figure>
                <img src='src/assets/infographic.svg'/>
                <figcaption>Co2 emissions for countries and digital. <br/>Sources <a href='https://fr.statista.com/infographie/19739/empreinte-carbone-internet-et-univers-numerique-mondial-emission-de-co2/'>Statista</a> & <a href='https://ourworldindata.org/co2-emissions'>OurWorldInData</a></figcaption>
            </figure>
        </section>

        <section className='align-right'>
            <Form submittedURLCb={(url)=>submittedURLCb(url)} changeView={(view)=>changeView(view)} />

            <div>
                <h2>HOW</h2>
                <p>The digital world impacts the real one more than you think.<br/><br/> Data centers use electricty and water to keep our data, and fabrication of devices depletes our natural ressources.<br/> Every click, video stream, and website visit adds to this environmental load.<br/><br/> We use the Green Web Foundation’s API to measure your site's emissions, and draw from GreenIT’s expert tips to provide tailored, eco-friendly recommendations.<br/> Together, let's make your digital footprint smaller and greener!</p>
            </div>
        </section>


        <footer>
            <nav>
                <button onClick={()=> changeView("Homepage")} >Check my website</button>
                <button onClick={()=>changeView("QuizOnly")}>Take the quiz only</button>
                <a href='https://www.greenit.fr/categorie/bonnes-pratiques/' target='blank' title='Green IT - In french'><button>Learn more on eco-conception</button></a>
            </nav>

            <section>
                <img src='src/assets/main-logo.svg'/>

                <p className='align-right'>This web app was created with the APIs : <br/><a href='https://developers.google.com/speed/docs/insights/v5/get-started?hl=fr'>Google LightHouse</a>, <a href='https://www.whoisxmlapi.com/'>Who Is XML</a>, <a href='https://developers.thegreenwebfoundation.org/api/greencheck/v3/check-single-domain/'>Green Check (The Green Web Foundation)</a> and the library <a href='https://developers.thegreenwebfoundation.org/co2js/methods/'>Co2.js (The Green Web Foundation)</a>. <br/>The recommendations are from the Green IT collective.</p>
            </section>
            
            <button onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>To top</button>
        </footer>
    </>
  )
}
