import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react'
import sound from './sounds/music.mp3'
import jump from './sounds/stressedPikachu.mp3'



// import Sound from 'react-sound';

function App({hero,villian,gameOver,score}) {
  let cross=true;
  let Score=0;
// const [cross,setCross]=useState(true);


  // const [score,setScore]=useState(10)

  // for(let i=0;i<10;i--){
  //   villian.style.transition="all ease-in 0.8s";  
  // villian.style.right="100vw";
  // setTimeout(()=>{
  //   villian.style.transition="";
  //   villian.style.right="0"
  // },800);
  // }
  let notPressed=true;
  document.onkeydown=(e)=>{
    // new Audio(sound).play();
    // console.log(e.keyCode);
    // let char=document.getElementsByClassName('pikachu')
    // char.classList.add('animate')
    
    // console.log(hero.className)
    // hero.classList.add('animateHero');
    //     setTimeout(() => {
    //         hero.classList.remove('animateHero')
    //     }, 500);

    if(e.keyCode ===38 && notPressed){
      notPressed=false;
      setTimeout(() => {
        notPressed=true;
      },470)
      new Audio(jump).play();
      hero.style.transition="all ease-in 0.2s";

    // hero.transitiondelay="0.5s"
    hero.style.bottom="170px";
   
      setTimeout(()=>{
        // hero.transition="all ease-in 0.5s";
        // new Audio(jump).pause();
        hero.style.bottom="0"
      },300);

    }
    

      if (e.keyCode == 39) {
        let hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
        hero.style.transition="all ease-in 0.2s";
        hero.style.left = hx + 112 + "px";
    }
    if (e.keyCode == 37) {
      let hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
      hero.style.transition="all ease-in 0.2s";
      hero.style.left = (hx - 112) + "px";
    }

  }


  setInterval(()=>{
    let hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
    let hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue('top'));
    
    let vx = parseInt(window.getComputedStyle(villian, null).getPropertyValue('left'));
    let vy = parseInt(window.getComputedStyle(villian, null).getPropertyValue('top'));

    // console.log(dx);
    // if((hx-vx)<20)console.log("gameOver");
    let diffX=Math.abs(hx-vx);
    let diffY=Math.abs(hy-vy);
    if(diffX<65 && diffY<50){

    // villian.classList.remove("challenger");
    villian.style.animation="a";
    gameOver.style.visibility="visible";
    let a=new Audio(sound);
    a.play();
        setTimeout(() => {
          // new Audio(sound).pause();
          a.pause();
            // audiogo.pause();
            // audio.pause();
        }, 4800);

  }
  else if( diffX<140 && cross){
    // {Score += 1;}
      // console.log(Score);
      Score=Score+1;
      // console.log("after",Score);
      score.innerHTML="Score: " + Score;
        // setScore(score=>score+1);
        cross = false;
        // setCross(false);
        // console.log(cross);
        setTimeout(() => {
            // setCross(true);
            cross = true;
        }, 1000);
        
  }

  },10)
  
  return (
    <div className="App">
      
    
    
    </div>
  );
}

export default App;
