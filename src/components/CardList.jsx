import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Card from "./Card";
import CardPage from "./CardPage";

import "@fontsource/open-sans"; 

const CardList = ({ cards, setCards }) => {
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/cards");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);
  return (
    <div style={styles.container}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {cards.map((card, index) => (
                <Card key={index} card={card} index={index} />
              ))}
            </div>
          }
        />
        {cards.map((card, index) => (
          <Route
            key={index}
            path={`/cards/${index}`}
            element={<CardPage key={index} card={card} index={index} />}
          />
        ))}
      </Routes>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "row", // Stack items vertically
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    border: "1px solid #ccc",
    padding: "20px",
    width: "30vw",
    height: "10vw",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    fontFamily: "Open Sans, sans-serif",
    marginBottom: "20px", // Adjust margin to add space between cards
  },
  cardImage: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "50%",
  },
  cardTitle: {
    marginBottom: "30px",
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  cardLink: {
    width: "10%",
    marginTop: "10px",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px",
    backgroundColor: "#cce5ff",
    borderRadius: "8px",
    transition: "background-color 0.3s ease-in-out",
  },
};

export default CardList;
