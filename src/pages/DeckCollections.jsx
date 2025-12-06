import React, { useEffect, useState } from "react";
import axios from "axios";
import DeckCollection from "./DeckCollection";

export default function DeckCollections() {
  const [deckCollections, setDeckCollections] = useState([]);
  const [newDeckName, setNewDeckName] = useState("");

  useEffect(() => {
    fetchDeckCollections();
  }, []);

  const fetchDeckCollections = async () => {
    try {
      const response = await axios.get("http://localhost:8080/decks", {
        withCredentials: true
      });
      setDeckCollections(response.data);
    } catch (err) {
      console.error("Erreur lors du chargement des decks :", err);
    }
  };

  const createDeckCollection = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/decks/add",
        {name: newDeckName },
        {withCredentials: true }
      );
      setNewDeckName("");
      fetchDeckCollections();
    } catch (err) {
      console.error("Erreur lors de la création du deck :", err);
    }
  };

  return (
   <div className = "applicationContainer">
       <div className="text-center">00
            <h1>DECKS</h1>
        </div>
      <div>
          <div className="buttons flex gap-2 mb-4">
            <input
              type="text"
              value={newDeckName}
              placeholder="Nom du nouveau deck"
              onChange={(e) => setNewDeckName(e.target.value)}
            />
            <button onClick={createDeckCollection} className = "btn">CREATE DECK</button>
          </div>

          <div className="deck-container">
              <ul className = "deck-list">
            {deckCollections.map((deckCollection) => (
              <DeckCollection
                deckCollection = {deckCollection}
                onDeckChange={fetchDeckCollections}
              />
            ))}</ul>
          </div>
      </div>
   </div>
  );
}