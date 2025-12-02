import "../assets/css/DeckCollection.css";
import { useNavigate } from "react-router";
import axios from "axios";
export default function DeckCollection ({name, id, onDeckChange}){
    const navigate = useNavigate(); //

      // DELETE deck
      const handleDelete = async () => {
        try {
          const response = await axios.delete(
            `http://localhost:8080/decks/delete/${id}`, {
              data: { id },
              withCredentials: true}
          );
            onDeckChange()

        } catch (err) {
          console.error("Erreur lors de la suppression :", err);
        }
      };


      // RENAME deck
      const handleRename = async () => {
        const newName = prompt(`Nouveau nom pour le deck "${name}" :`, name);

        if (!newName || !newName.trim() || newName === name) return;

        try {
          await axios.patch(
            "http://localhost:8080/decks/rename",
             { id, name: newName },
            { withCredentials: true }
          );

          onDeckChange();

        } catch (err) {
          console.error("Erreur lors du renommage :", err);
          alert(err);
        }
      };

      const handleEdit = () => {
        alert(`Éditer le deck ${id}`);
        navigate(`/deckbuilder/${id}`)
      };

      return (
        <li className="deck-card">
          <div className="deck-info">
            <span className="deck-name-text">{name}</span>
          </div>

          <div className="deck-buttons">

            <button className="action-icon-button" onClick={handleEdit}>
              <span className="button-label">Edit</span>
              <svg data-v-9ff7c0fe="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path data-v-9ff7c0fe="" d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path> <path data-v-9ff7c0fe="" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
            </button>

            <button className="action-icon-button delete-button" onClick={handleDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
            </button>

            <button className="action-icon-button" onClick={handleRename}>
              <span className="button-label">Rename</span>
              <svg data-v-9ff7c0fe="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path data-v-9ff7c0fe="" d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            </button>

          </div>
        </li>
      );
}