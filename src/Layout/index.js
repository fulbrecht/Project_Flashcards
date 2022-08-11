import React, {useState, useEffect} from "react";
import Header from "./general/Header";
import NotFound from "./general/NotFound";
import {Route, Switch, useHistory} from "react-router-dom";
import DeckList from "./deck/DeckList";
import {listDecks} from "../utils/api/index";
import Study from "./study/Study";
import CreateDeck from "./deck/CreateDeck";
import DeckView from "./deck/DeckView";
import EditDeck from "./deck/EditDeck";
import AddCard from "./deck/AddCard";
import EditCard from "./deck/EditCard";

function Layout() {
  const [decks, setDecks] = useState([])
  const [update, setUpdate] =useState(false);
  const history = useHistory();

  useEffect(() => {
    setDecks([]);
    setUpdate(false);

    async function loadDecks() {
      const response = await listDecks();
      const decksFromAPI = await response;
      setDecks(decksFromAPI);
    }

    loadDecks();
  }, [update])

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <button type="button" onClick={() => history.push("/decks/new")}>Create Deck</button>
            <DeckList decks={decks} setDecks={setDecks} setUpdate={setUpdate}/>
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck setUpdate={setUpdate} />
          </Route>
          <Route exact path="/decks/:deckId">
            <DeckView update={update} setUpdate={setUpdate}/>
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck setUpdate={setUpdate} />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard setUpdate={setUpdate}/>
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard setUpdate={setUpdate} />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route><NotFound /></Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
