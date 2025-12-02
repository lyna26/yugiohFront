import React from "react";
import { Link } from "react-router-dom"; // pour la navigation entre pages
import "../assets/css/Generale.css"; // ton CSS existant

export default function MainMenu() {
  return (
    <div className="container">
      <img
        src="/images/dn-logo.0468c98.png"
        alt="Dueling Nexus Logo"
        className="logo"
      />

      <h1> welcome</h1>
      <div className="buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
    </div>
  );
}