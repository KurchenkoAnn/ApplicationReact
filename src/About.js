import React, { Component } from 'react';
import './App.css';

export default class About extends Component{
render(){
    return(
     <div>
         <h2>My About Components works !!!</h2>
        <h1><em>On the site you can see such project: </em></h1>
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