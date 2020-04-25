import React, {useContext} from 'react';
import {DeckContext} from '../DeckContext';
const DeckRender = (props) => {
  const playerDeck = useContext(DeckContext);
  const Deck = (props.type === 'player')?playerDeck.Deck:playerDeck.curDeck;
  const y = (props.type === 'player')?260:130;
  const pos = playerDeck.pos;
  const inc = 25;
  const x = (640 - inc * Deck.length + inc - 70) / 2;
  function changeAnimate(i){
    let copyOfPos = [...pos];
    copyOfPos[i] = (pos[i]===0)?-25:0;
    playerDeck.setPos(copyOfPos);
  }
  return (
      Deck.map((card, i) => {
        return <use key={i} className="card" 
                href={`#${card[0]}_${card[1]}`} 
                x={x + inc * i} y={y} width={70}
                onClick={e=>changeAnimate(i)}>
                  {(props.type === 'player' && pos.length===Deck.length)?<animate 
                                              attributeName="y" 
                                              to={y+pos[i]} 
                                              dur="0.25s" 
                                              fill="freeze" begin="click">
                                              </animate>:null}
                </use>
      })
  )
}

export default DeckRender;