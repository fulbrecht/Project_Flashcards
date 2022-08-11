import React, {useEffect, useState}from "react";
import Breadcrumb from "../general/Breadcrumb";
import {readDeck} from "../../utils/api/index";
import {useParams, useHistory} from "react-router-dom";

function EditDeck(){
    const history = useHistory();
    const params = useParams();
    const [deck, setDeck] = useState({});
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name, ' Description:', description)
        setName("")
        setDescription("")
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
    }, [])

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