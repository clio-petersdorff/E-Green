// Component displays e-green score history

import React from 'react';


export default function History(){
    return (
        <div id="homepage">
        <img src='src/assets/logo-inline-clear.svg' />
        <hr />
            History
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>URL tested</td>
                            <td>Date</td>
                            <td>score</td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        
        {/* Footer */}
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
        </div>
    )
}