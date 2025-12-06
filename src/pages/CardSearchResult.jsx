import "../assets/css/Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Importez l'icône spécifique
export default function CardSearchResult({card}){
    return (
            <div className="yugioh-card-container">
                <figure className="card-image-wrapper">
                    <img
                        src={card.imageUrlSmall}
                        alt={`Carte: ${card.name}`}
                        className="card-image"
                        loading="lazy"
                    />
                </figure>

                <div className="card-details">
                    <h2 className="card-name">{card.name}</h2>
                    <h2 className="card-name">{card.atk} / {card.def}</h2>
                    <h2 className="card-name">{card.attribute} / {card.race} <FontAwesomeIcon icon={faStar} className="star-icon" /> {card.level}</h2>
                </div>
            </div>
    );
}