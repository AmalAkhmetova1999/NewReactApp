import logo from './logo.svg';
import './App.css';
import {Comment,Reaction}  from './Comment'
import Clock from 'react-live-clock'
import React from 'react';
import Button from '@mui/material/Button';
import Counter from './Counter';
import Input from './Input';


function App() {
  return (
    <section>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <div class="clock">
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
          </div>
      <div>
          {Comment.map((comment)=>{
      return(
      <Reaction author={comment.author} title={comment.title} content={comment.content} likes={comment.likes} time={comment.time}/>
      
      ); })}
          </div>
          
    <div>
      <Button variant="contained">EXAMPLE</Button>
    </div>
    <div> <Counter/> </div>
    <div> <Input/> </div>

          </section>
      );
}


export default App;
