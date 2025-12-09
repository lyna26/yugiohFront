import Card from "./Card";

export default function Deck({ deck, onHoverCard,  onAddCard, onRemoveCard}) {
    // Sécuriser la liste des cartes
    const cards = Array.isArray(deck.cardList) ? deck.cardList : [];

     const handleDrop = (e) => {
        e.preventDefault();
        const card = JSON.parse(e.dataTransfer.getData("card"));
        onAddCard(deck.id, card.id);
      };

      const handleRightClick = (e, card) => {
            e.preventDefault();
            onRemoveCard(deck.id, card.id);

        };

    return (
        <div className="deck" onDragOver={(e) => e.preventDefault()}
                                    onDrop={handleDrop}>
            <h3>
                {deck.type} [{cards.length}]
            </h3>

            <div className="cards-grid">
                {cards.length > 0 ? (
                    cards.map((card, idx) => (
                        <div
                            key={card?.id ?? `card-${idx}`} // évite le crash même si id manque
                            onMouseEnter={() => card && onHoverCard(card)}
                            onMouseLeave={() => onHoverCard(null)}
                            onContextMenu={(e) => handleRightClick(e, card)}
                        >
                            {card ? (
                                <Card card={card} />
                            ) : (
                                <p>Carte invalide</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="empty-deck">Aucune carte</p>
                )}
            </div>
        </div>
    );
}
