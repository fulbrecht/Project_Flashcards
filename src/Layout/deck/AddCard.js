import React, {useEffect, useState}from "react";
import Breadcrumb from "../general/Breadcrumb";
import CardForm from "./CardForm";
import {readDeck, createCard} from "../../utils/api/index";
import {useParams, useHistory} from "react-router-dom";

function AddCard({setUpdate}){
    const history = useHistory();
    const params = useParams();
    const [deck, setDeck] = useState({});
    const [front, setFront] = useState("");
    const [back, setBack] = useState("")
    const handleFrontChange = (event) => setFront(event.target.value);
    const handleBackChange = (event) => setBack(event.target.value);


    const handleSave = (event) => {
        event.preventDefault()
        // console.log('Front:', front, ' Back:', back)

        const newCard = {
            front: front,
            back: back,
        }
        createCard(deck.id, newCard )
        setFront("")
        setBack("")
        handleDone()
        setUpdate(true)
    }

    const handleDone = () => {history.push(`/decks/${deck.id}`)}

    useEffect(() => {

        async function loadDeck() {
            const response = await readDeck(params.deckId);
            const deckFromAPI = await response;
            setDeck(deckFromAPI);
        }

        loadDeck();
    }, [params.deckId])

    return (
        <>
        <Breadcrumb crumbName={deck.name} crumbLink={`/decks/${deck.id}`} current={"Add Card"} />
        <h1>{deck.name}: Add Card</h1>
        <CardForm front={front} back={back} handleBackChange={handleBackChange} handleFrontChange={handleFrontChange} handleCancel={handleDone} handleSubmit={handleSave} />
        </>
    )
}

export default AddCard;