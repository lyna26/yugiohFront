import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="main-container">
      <div className="buttons">
        <Link to="/decks" className="btn btn-login">
          Deck
        </Link>
      </div>
    </div>
  );
}