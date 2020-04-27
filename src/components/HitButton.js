import React, { useContext } from 'react';
import { DeckContext } from '../DeckContext';

const HitButton = () => {
    const playerDeck = useContext(DeckContext);
    const check = (hitDeck, curDeck) => {
        return true;
    }
    const hit = () => {
        if (playerDeck.playable) {
            const pos = playerDeck.pos;
            const curDeck = playerDeck.curDeck;
            const Deck = playerDeck.Deck.filter((e, i) => pos[i] === 0);
            const hitDeck = playerDeck.Deck.filter((e, i) => pos[i] !== 0);
            if (check(hitDeck, curDeck)) {
                console.log("Đánh bài");
                playerDeck.setPos(Array(Deck.length).fill(0));
                playerDeck.setDeck(Deck);
                playerDeck.setCurDeck(hitDeck);
            }
            else {
                alert("Đánh bài không hợp lệ!");
            }
            if (Deck.length === 0) alert('Win cmnr!');
        }
        else {
            playerDeck.setPos(Array(playerDeck.pos.length).fill(0));
            alert("Chưa tới lượt của bạn!");
            
        }
    }

    return (
        <image href="Button.svg" x={505} y={300} width={130} onClick={hit}></image>
    )

}

export default HitButton;
