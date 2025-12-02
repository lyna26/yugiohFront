import React, { useState } from 'react'
import axios from "axios";
export default function CardSearcher(){
    const [cardName, setCardName] = useState("");
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);


     const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try{
            const response = await axios.get("http://localhost:8080/cardSearcher",{params: { cardName },withCredentials: true});
            setCards(response.data);
        } catch (err) {
              const message = err.response?.data?.message || err.message || "Erreur inconnue";
            alert(message);
            setCards([]);
        }
     }

   return (
          <div>
              <form onSubmit={handleSubmit}>
                  <input
                      type="text"
                      placeholder="Enter Card Name..."
                      value={cardName}
                      onChange={e => setCardName(e.target.value)}
                  />
                  <button type="submit" className="btn">Rechercher</button>
              </form>

              <div>
                  {cards.length > 0 ? (
                      cards.map((cardItem, index) => (
                          <Card key={index} card={cardItem} />
                      ))
                  ) : (
                      cardName.trim() && !error && (
                          <p>Aucun résultat trouvé pour "{cardName}".</p>
                      )
                  )}

                  {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
          </div>
      );
}