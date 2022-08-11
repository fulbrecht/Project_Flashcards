import React from "react";
import {useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function DeckViewCard({deck,setUpdate}) {
    const history = useHistory();

    function deleteHandler(event){

        event.preventDefault();
        if(window.confirm("Delete this deck? You will not be able to recover it.")){
            deleteDeck(deck.id)
                .then(() => history.push("/"))
                .then(() => setUpdate(() => true));
        }
    }

    return (
        <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                <p className="card-text">{deck.description}</p>
                <button type="button" onClick={() => history.push(`/decks/${deck.id}/edit`)}>Edit</button>
                <button type="button" onClick={() => history.push(`/decks/${deck.id}/study`)}>Study</button>
                <button type="button" onClick={() => history.push(`/decks/${deck.id}/cards/new`)}>Add Cards</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
        </>
    )
}

export default DeckViewCard;