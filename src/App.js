import React, { useEffect} from 'react';
import DeckRender from './components/DeckRender';
import './2B.svg';
import HitButton from './components/HitButton'

const App = () => {

  const resizeWindow = () => {
    const root = document.getElementById('root');
    const width = window.innerHeight * 16 / 9;
    if (width>window.innerWidth) {
      const height = window.innerWidth*9/16
      console.log(`height: ${height}`);
      root.style.height = height+"px";
      root.style.width = window.innerWidth+"px";
      root.style.marginTop = (window.innerHeight-height)/2+"px";
    } else{
    root.style.width = width + "px";
    root.style.height = window.innerHeight+"px";
    root.style.margin = "0 auto";
    console.log(width);
    }
  }

  useEffect(()=>{
    resizeWindow();
    window.addEventListener('resize',resizeWindow)
  })
    return (
      <>
      <image href="2B.svg" x={100} y={145} width={70} transform="rotate(90 100 145)"></image>
      <image href="2B.svg" x={538} y={215} width={70} transform="rotate(-90 538 215)"></image>
      <image href="2B.svg" x={285} y={2} width={70}></image>
      <DeckRender type="player"></DeckRender>
      <DeckRender type="table" disableClick></DeckRender>
      <HitButton></HitButton>
      </>
    )

}

export default App;