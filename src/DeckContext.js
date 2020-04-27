import React, {createContext,useState} from 'react';

export const DeckContext = createContext();

export const DeckProvider = ({children}) => {
    const [Deck, setDeck] = useState(Array(0));
    const [curDeck, setCurDeck] = useState(Array(0));
    const [pos, setPos] = useState(()=>{let temp = new Array(Deck.length); temp.fill(0); return temp;});
    const [playable, setPlayable] = useState(false);
    return (
        <DeckContext.Provider value={{
            Deck,
            setDeck,
            curDeck,
            setCurDeck,
            pos,
            setPos,
            playable,
            setPlayable
        }}>
            {children}
        </DeckContext.Provider>
    )
}