import React, {useState}from "react";
import Breadcrumb from "../general/Breadcrumb";
import {useHistory} from "react-router-dom";
import { createDeck } from "../../utils/api";


function CreateDeck({setUpdate}){
    const history = useHistory();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    const handleSubmit = (event) => {
        const newDeck = {name: name, description: description}

        event.preventDefault();
        console.log('Name:', name, ' Description:', description)
        createDeck(newDeck)
        setName("")
        setDescription("")
        history.push("/")
        setUpdate(true)
    }

    const handleCancel = () => {history.push("/")}

    return (
        <>
            <Breadcrumb current="Create Deck"/>
            <h1>Create Deck</h1>
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

export default CreateDeck;