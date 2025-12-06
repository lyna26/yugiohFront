import Card from "./Card";

export default function Deck({ deck, onHoverCard }) {
    // Sécuriser la liste des cartes
    const cards = Array.isArray(deck.cardList) ? deck.cardList : [];

    return (
        <div className="deck">
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
