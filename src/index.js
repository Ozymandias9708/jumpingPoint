import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// {audio = new Audio('music.mp3');
// // audiogo = new Audio('gameover.mp3');
// setTimeout(() => {
//     audio.play()
// }, 1000);}

const root = ReactDOM.createRoot(document.getElementById('root'));
let hero=document.getElementById('hero')
let villian = document.getElementById('villian')
let gameOver = document.getElementById('gameOver');
root.render(
  <React.StrictMode>
    <App hero={hero} villian={villian} gameOver={gameOver}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
