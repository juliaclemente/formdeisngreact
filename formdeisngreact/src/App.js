import React from 'react'
import Home from "./Views/Home";
import {Container} from './Views/styled'
import './App.css'
function App() {
  return (
    <div className='container'>
      <div className="p-r">
         <h5 className="header_title"><strong>Learn to code by<br/>watching others</strong></h5>
       <span className="a_paragraph">See how experienced developers solve problems
      in real-time.<br/>Watching scripted tutorials is great, but understanding 
       how<br/> developers think is invaluable.</span>  
      </div>
      <div className="p-l">
      <button className="try_button"><strong> Try it free 7 days</strong> then $20/mo. thereafter</button>
      <form class="form_container">
      <input type="text" id="firstname" name="firstname" placeholder="First Name"/>
      <input type="text" id="lastname" name="lname" placeholder="Last Name"/>
      <input type="email" id="email" name="email" placeholder="E-mail"/>
      <input type="password" id="password" name="password" placeholder="Password"/>
      <button class="freetrial_button">CLAIM YOUR FREE TRIAL</button>
       <p class="small_text">By clicking the button, you are agreeing to our<span class="red_text">
           Terms and Services
        </span>
     </p>
   </form>
    </div>
    </div>
  );
}

export default App;
