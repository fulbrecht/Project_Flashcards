import React from "react";
import DeckListCard from "./DeckListCard";

function DeckList({decks, setUpdate}){
    if (decks.length === 0){
        return <p>No Decks</p>
    } else {
        return (
            <>
                {decks.map((deck, index) => {
                return (
                    <div key={index}>
                        <DeckListCard deck={deck} index={index} setUpdate={setUpdate}/>
                    </div>
                )
                })}
            </>
        )
    }
}

export default DeckList;