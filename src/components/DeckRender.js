import React, {useContext} from 'react';
import {DeckContext} from '../DeckContext';
const DeckRender = (props) => {
  const deckContext = useContext(DeckContext);
  const Deck = (props.type === 'player')?deckContext.Deck:deckContext.curDeck;
  const y = (props.type === 'player')?260:130;
  const pos = deckContext.pos;
  const inc = 25;
  const x = (640 - inc * Deck.length + inc - 70) / 2;
  function changeAnimate(i){
    let copyOfPos = [...pos];
    copyOfPos[i] = (pos[i]===0)?-25:0;
    deckContext.setPos(copyOfPos);
  }
  return (
      Deck.map((card, i) => {
        return <use key={i} className="card" 
                href={`#${card[0]}_${card[1]}`} 
                x={x + inc * i} y={y} width={70}
                onClick={e=>changeAnimate(i)}>
                  {(props.type === 'player')?<animate 
                                              attributeName="y" 
                                              to={y+pos[i]} 
                                              dur="0.5s" 
                                              fill="freeze">
                                              </animate>:null}
                </use>
      })
  );
}

export default DeckRender;