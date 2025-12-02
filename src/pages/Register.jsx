import React, { useState } from "react";
import "../assets/css/Generale.css";
import { useNavigate } from "react-router-dom"; // pour redirection après inscription

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
        credentials: "include" // si tu veux gérer cookie JWT
      });

      if (response.ok) {
        alert("Registration successful!");
        navigate("/index"); // redirige vers login après inscription
      } else {
        const data = await response.json();
        alert("Registration failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="container">
      <img
        src="/images/dn-logo.0468c98.png"
        alt="Dueling Nexus Logo"
        className="logo"
      />

      <h2>ACCOUNT REGISTRATION</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="USERNAME"
            required
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="EMAIL"
            required
          />
        </div>

        <div >
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="PASSWORD"
            required
          />
        </div>

        <div className="buttons">
          <button type="submit" className="btn">
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}