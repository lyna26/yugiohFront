import "../assets/css/CardPreview.css";
export default function CardPreview({ card }){
    return (
        <div>
                <div>
                    <h6 className = "containerName">
                        {card? card.name : "-"}
                    </h6>
                </div>

                <div className="cardImage">
                    <img
                        className="picture"
                        src={card ? card.imageUrl : "https://duelingnexus.com/assets/images/cover.png"}
                    />
                </div>

                <div>
                    <p className = "containerDescription">
                        {card ? card.description : "Description"}
                    </p>
                </div>
        </div>
    );
}