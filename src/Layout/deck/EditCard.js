import React, {useEffect, useState}from "react";
import Breadcrumb from "../general/Breadcrumb";
import {readDeck} from "../../utils/api/index";
import {useParams, useHistory} from "react-router-dom";
import CardForm from "./CardForm";

function EditCard(){
    const history = useHistory();
    const params = useParams();
    const [deck, setDeck] = useState({});
    const [front, setFront] = useState("");
    const [back, setBack] = useState("")
    const handleFrontChange = (event) => setFront(event.target.value);
    const handleBackChange = (event) => setBack(event.target.value);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Front:', front, ' Back:', back)

        
        setFront("")
        setBack("")
    }

    const handleCancel = () => {history.push(`/decks/${deck.id}`)}

    useEffect(() => {
        //setDeck();

        async function loadDeck() {
            const response = await readDeck(params.deckId);
            const deckFromAPI = await response;
            setDeck(deckFromAPI);
        }

        loadDeck();
    }, [])

    useEffect(() => {
        if(Object.keys(deck).length) {
            
            const card = deck.cards.find((card) => card.id == params.cardId);
            setFront(card.front);
            setBack(card.back);
        }
    }, [deck])

    return (
        <>
        <Breadcrumb crumbName={deck.name} crumbLink={`/decks/${deck.id}`} current={`Edit Card ${params.cardId}`} />
        <h1>Edit Card</h1>
        <CardForm front={front} back={back} handleBackChange={handleBackChange} handleFrontChange={handleFrontChange} handleCancel={handleCancel} handleSubmit={handleSubmit} />
        </>
    )
}

export default EditCard;