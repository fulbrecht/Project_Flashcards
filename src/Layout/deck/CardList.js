import React from "react";
import CardView from "./CardView";

function CardList({deck = {}, setUpdate}){

    if(Object.keys(deck).length > 0) {
        return (
            <>
                <h1>Cards</h1>
                {deck.cards.map((card, index) => {
                    return (
                        <div key={index}>
                            <CardView card={card} setUpdate={setUpdate}/>
                        </div>
                    )
                })}
            </>
        )
    } else {
        return <p>Loading Cards...</p>
    }

}

export default CardList;