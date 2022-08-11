import React, {useEffect, useState} from "react";
import Breadcrumb from "../general/Breadcrumb";
import StudyCards from "./StudyCards";
import NotEnoughCards from "./NotEnoughCards";
import {readDeck} from "../../utils/api/index";
import { useParams } from "react-router-dom";

function Study(){
    const [deck, setDeck] = useState({});
    const params = useParams();

    useEffect(() => {
        //setDeck();

        async function loadDeck() {
            const response = await readDeck(params.deckId);
            const deckFromAPI = await response;
            setDeck(deckFromAPI);
            // setCard(deckFromAPI.cards[cardIndex]);
        }

        loadDeck();
    }, [params.deckId])


    if(Object.keys(deck).length === 0) {
        return <p>Loading...</p>
    } else {
        return (
            <>
            <Breadcrumb crumbName={deck.name} crumbLink={`/decks/${deck.id}`} current="Study" />
            
            <h1>Study: {deck.name}</h1>
            {deck.cards.length < 3 ? <NotEnoughCards numCards={deck.cards.length}/> :<StudyCards deck={deck} />}

            </>
        )
    }
}

export default Study;