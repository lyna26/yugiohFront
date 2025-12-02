import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Decks from "./pages/Decks.jsx";
import Home from "./pages/Home.jsx";
import DeckBuilder from "./pages/DeckBuilder.jsx";

export default function App() {
 return (
       <Routes>
         <Route path="/" element={<Index />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/decks" element={<Decks />} />
         <Route path="/home" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/deckbuilder/:id" element={<DeckBuilder />} />
       </Routes>
   );
}

