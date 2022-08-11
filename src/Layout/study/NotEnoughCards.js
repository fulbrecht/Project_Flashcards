import React from "react";
import {useHistory, useParams} from "react-router-dom";

function NotEnoughCards({numCards}) {
    const history = useHistory();
    const params = useParams();

    function clickHandler(event) {
        event.preventDefault();
        history.push(`/decks/${params.deckId}/cards/new`);
    }

    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Not Enough Cards.</h5>
                <p className="card-text">You need at least 3 cards to study. There are only {numCards} in this deck.</p>
                <button onClick={clickHandler}>Add Cards</button>
            </div>
        </div>
    )
}   

export default NotEnoughCards;