import React from "react";

function CardForm ({front, handleFrontChange, back, handleBackChange, handleCancel, handleSubmit}) {

    return (
        <>
        <form>
            <label>
                Front
                <br />
                <textarea 
                id="front"
                name="front"
                onChange={handleFrontChange}
                value={front}
                ></textarea>
            </label>
            <br />
            <label>
                Back
                <br />
                <textarea 
                id="back"
                name="back"
                onChange={handleBackChange}
                value={back}
                ></textarea>
            </label>
            <br />
            <button onClick={handleCancel}>Cancel</button><button onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}

export default CardForm;