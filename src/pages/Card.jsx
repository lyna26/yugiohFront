export default function Card({card}){
    return(
        <div>
            <p> {card.name}</p>
            <img src = {card.smallCardImage} alt="Dueling Nexus Logo" className="logo" />
        </div>
    );
}