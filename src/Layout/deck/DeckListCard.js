import React from "react";
import { deleteDeck ,listDecks} from "../../utils/api";
import {useHistory } from "react-router-dom";

function DeckListCard({deck, setUpdate}){
    const history = useHistory();

    function deleteHandler(event){

        event.preventDefault();
        window.confirm("Delete this deck? You will not be able to recover it.");


        deleteDeck(deck.id)
            .then(() => setUpdate(() => true));
        
    }

    return (
        <div className="card" key={deck.id}>
            <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{deck.cards.length} cards</h6>
                <p className="card-text">{deck.description}</p>
                <button type="button" onClick={() => history.push(`/decks/${deck.id}`)}>View</button>
                <button type="button" onClick={() => history.push(`/decks/${deck.id}/study`)}>Study</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}

export default DeckListCard;