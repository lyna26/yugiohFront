export default function Deck({card}){
    return(
         <div className="cardImage">
            <img
                className="picture"
                src={card.imageUrlSmall}
            />
        </div>
    );
}