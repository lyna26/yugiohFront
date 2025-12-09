import CardS from "./CardSearcher";
import CardP from "./CardPreview";
import Deck from "./Deck";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/DeckBuilder.css";
import { useParams } from "react-router-dom";

export default function DeckBuilder() {
  const { id } = useParams();
  const [deckCollection, setDeckCollection] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);


  const handleAddCardToDeck = async (deckId, cardId) => {
      try{
      // API pour ajouter la carte dans le deck
      await axios.post(
        "http://localhost:8080/deckbuilder/addCard",
        {deckId: deckId, cardId: cardId },
        { withCredentials: true }
      )

        fetchDeckCollections();
          } catch (err) {
            alert(err.response?.data?.message || "Erreur lors de l'ajout de la carte");
          }
        };

    const handleRemoveCardToDeck = async (deckId, cardId) => {
          try{
        // API pour ajouter la carte dans le deck
        await axios.post(
          "http://localhost:8080/deckbuilder/removeCard",
          {deckId: deckId, cardId: cardId },
          { withCredentials: true }
        );

        fetchDeckCollections();
        } catch (err) {
                      alert(err.response?.data?.message || "Erreur lors de l'ajout de la carte");
                    }
    };

  useEffect(() => {
    fetchDeckCollections();
  }, [id]);

  const fetchDeckCollections = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/decks/deck",
        { params: { id }, withCredentials: true }
      );

      setDeckCollection(response.data);

    } catch (err) {
      const message = err.response?.data?.message || err.message || "Erreur inconnue";
      alert(message);
      setDeckCollection({ decks: [] });
    }
  };

  if (!deckCollection) return <div>Chargement...</div>;

  const decks = deckCollection.decks || [];

  return (
    <div className="deck-editor-layout">
      <div className="preview-pane">
        <CardP card={selectedCard} />
      </div>

      <div className="deck-list-container col-span-1">
        {decks.map((deck, index) => (
          <div key={index} className="deck-section">
            <Deck deck={deck} onHoverCard={setSelectedCard}  onAddCard = {handleAddCardToDeck} onRemoveCard = {handleRemoveCardToDeck}/>
          </div>
        ))}
      </div>

      <div className="list-pane">
        <CardS onHoverCard={setSelectedCard} />
      </div>
    </div>
  );
}
