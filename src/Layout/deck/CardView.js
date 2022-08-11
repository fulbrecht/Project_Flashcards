import React from "react";
import {useHistory} from "react-router-dom";
import {deleteCard} from "../../utils/api";

function CardView({card, setUpdate}){
    const history = useHistory();


    function deleteHandler(event){
        event.preventDefault();
        if(window.confirm("Delete this card? You will not be able to recover it.")){
            deleteCard(card.id)
                .then(() => setUpdate(()=> true))
        }

    }

    return (
        <div className="card" key={card.id}>
        <div className="card-body">
            <p className="card-text">{card.front}</p>
            <p className="card-text">{card.back}</p>
            <button type="button" onClick={() => history.push(`/decks/${card.deckId}/cards/${card.id}/edit`)}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    </div>
    )
}

export default CardView;