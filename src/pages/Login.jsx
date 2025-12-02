import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include" // pour envoyer le cookie JWT
    });


    if (response.ok) {
      window.location.href = "/home";
    } else {
        setError("Invalid email or password")
    }
  };

  return (
    <div className="container">
      <img src="/images/dn-logo.0468c98.png" alt="Dueling Nexus Logo" className="logo" />
      <h2>ACCOUNT LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email"  placeholder="EMAIL" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>

        <div>
          <input type="password"  placeholder="USERNAME" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>

        <div className="buttons">
          <button type="submit" className="btn">LOGIN</button>
        </div>

        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
}