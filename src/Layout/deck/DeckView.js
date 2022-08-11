import React, {useEffect, useState} from "react";
import Breadcrumb from "../general/Breadcrumb";
import {useParams} from "react-router-dom";
import {readDeck} from "../../utils/api/index";
import DeckViewCard from "./DeckViewCard";
import CardList from "./CardList";

function DeckView({update, setUpdate}) {
    const [deck, setDeck] = useState({});
    const params = useParams();

    useEffect(() => {

        async function loadDeck() {
            const response = await readDeck(params.deckId);
            const deckFromAPI = await response;
            setDeck(deckFromAPI);
            // setCard(deckFromAPI.cards[cardIndex]);
        }

        loadDeck();
    }, [update])

    return (
        <>
            <Breadcrumb current={deck.name} />
            <DeckViewCard deck={deck} setUpdate={setUpdate} />
            <CardList deck={deck} setUpdate={setUpdate}/>
        </>
    )
}

export default DeckView;