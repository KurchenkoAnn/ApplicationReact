import React, { Component } from 'react';
import './App.css';

export default class Home extends Component{
render(){
    return(
     <div>
         <h2>My Home Components works !!!</h2>

         <article class="message">
  <div class="message-body">
    <strong>Weather Application</strong>
  </div>
</article>
<article class="message is-dark">
  <div class="message-body">
  <strong>StarsWar Application</strong>
  </div>
  </article>
  <article class="message">
  <div class="message-body">
    <strong>ToDo List Application</strong>
  </div>
</article>
     </div>
    );
  }
}
// export default Home;