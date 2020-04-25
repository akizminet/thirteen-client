import React, { useEffect,useContext} from 'react';
import {DeckContext} from './DeckContext';
import DeckRender from './components/DeckRender';
import './2B.svg';
import HitButton from './components/HitButton';
import io from 'socket.io-client';

let socket;
const App = () => {
  const playerDeck = useContext(DeckContext);
  const resizeWindow = () => {
    const root = document.getElementById('root');
    const width = window.innerHeight * 16 / 9;
    if (width>window.innerWidth) {
      const height = window.innerWidth*9/16
      root.style.height = height+"px";
      root.style.width = window.innerWidth+"px";
      root.style.marginTop = (window.innerHeight-height)/2+"px";
    } else{
    root.style.width = width + "px";
    root.style.height = window.innerHeight+"px";
    root.style.margin = "0 auto";
    }
  }
  useEffect(()=>{
    resizeWindow();
    window.addEventListener('resize',resizeWindow);
    socket = io('localhost:8000');
    socket.on('randomDecks',(Deck)=>{
      let cards = Deck.decks;
      cards.sort((a,b)=>(a[0]===b[0])?a[1]-b[1]:a[0]-b[0]);
      playerDeck.setDeck(cards);
      playerDeck.setPos(Array(13).fill(0));
    });
    socket.on('full',()=>{
      alert("Phòng đã đủ dân chơi!");
    });
  },[]);

    return (
      <>
      <image href="2B.svg" x={100} y={145} width={70} transform="rotate(90 100 145)"></image>
      <image href="2B.svg" x={538} y={215} width={70} transform="rotate(-90 538 215)"></image>
      <image href="2B.svg" x={285} y={2} width={70}></image>
      <DeckRender type="player"></DeckRender>
      {(playerDeck.Deck.length===0 && playerDeck.curDeck.length===0)?<text x={230} y={200}>Đang đợi người chơi khác...</text>:null} 
      <DeckRender type="table" disableClick></DeckRender>
      <HitButton></HitButton>
      </>
    )

}

export default App;