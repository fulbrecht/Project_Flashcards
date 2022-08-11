import React, {useEffect, useState}from "react";
import Breadcrumb from "../general/Breadcrumb";
import {readDeck, updateDeck} from "../../utils/api/index";
import {useParams, useHistory} from "react-router-dom";

function EditDeck({setUpdate}){
    const history = useHistory();
    const params = useParams();
    const [deck, setDeck] = useState({});
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);


    const handleSubmit = (event) => {
        const updatedDeck = {...deck, name: name, description: description};

        event.preventDefault();
        // console.log('Name:', name, ' Description:', description)
        updateDeck(updatedDeck)
        setName("")
        setDescription("")
        history.push(`/`)
        setUpdate(true)
    }

    const handleCancel = () => {history.push(`/decks/${deck.id}`)}

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

    useEffect(() => {
        if(Object.keys(deck).length) {
            setName(deck.name);
            setDescription(deck.description);
        }
    }, [deck])

    return (
        <>
        <Breadcrumb crumbName={deck.name} crumbLink={`/decks/${deck.id}`} current={"Edit Deck"} />
        <h1>Edit Deck</h1>
        <form>
            <label>
                Name
                <br />
                <input 
                id="name"
                type="text" 
                name="name"
                onChange={handleNameChange}
                value={name}
                />
            </label>
            <br />
            <label>
                Description
                <br />
                <textarea 
                id="description"
                name="description"
                onChange={handleDescriptionChange}
                value={description}
                ></textarea>
            </label>
            <br />
            <button onClick={handleCancel}>Cancel</button><button onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}

export default EditDeck;