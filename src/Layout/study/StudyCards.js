import { useParams, useHistory } from "react-router-dom";
import React, {useState, useEffect} from "react";


function StudyCards({deck}) {
    const history = useHistory();
    const [card, setCard] = useState({});
    const [cardIndex, setCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [showNext, setShowNext] = useState(false);
    

    function flipHandler(event) {
        event.preventDefault();
        setIsFlipped((currentState) => !currentState);
        setShowNext(true);
    }

    function nextHandler(event) {
        event.preventDefault();
        console.log(cardIndex,deck.cards.length);
        if (cardIndex + 1 < deck.cards.length){
            setCardIndex((currentIndex) => {
            setCard(() => {
                return deck.cards[cardIndex + 1];
            })
            return currentIndex + 1}
            )
        } else {
            if(window.confirm("Restart cards? Click 'Cancel' to return to the home page")) {
                setIsFlipped(false);
                setShowNext(false);
                setCardIndex(0);
                setCard(deck.cards[0]);
            } else {
                history.push("/");
            }
        }
    
        setIsFlipped(false);
        setShowNext(false);
    }

    useEffect( () => {setCard(deck.cards[cardIndex])}, []);

    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Card {cardIndex + 1} of {deck.cards.length}</h5>
                <p className="card-text">{isFlipped ? card.back : card.front}</p>
                <button onClick={flipHandler}>Flip</button>
                {showNext ? <button onClick={nextHandler}>Next</button>:null}

            </div>
        </div>
    )
}

export default StudyCards;