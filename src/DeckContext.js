import React, {createContext,useState} from 'react';

export const DeckContext = createContext();
const getDeck = () => {
    return [[3,1],[4,1],[5,1],[6,1]];
}

const getCurDeck = () => {
    return Array(0);
}

export const DeckProvider = ({children}) => {
    const [Deck, setDeck] = useState(getDeck());
    const [curDeck, setCurDeck] = useState(getCurDeck());
    const [pos, setPos] = useState(()=>{let temp = new Array(Deck.length); temp.fill(0); return temp;});
    return (
        <DeckContext.Provider value={{
            Deck,
            setDeck,
            curDeck,
            setCurDeck,
            pos,
            setPos
        }}>
            {children}
        </DeckContext.Provider>
    )
}