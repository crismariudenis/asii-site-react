import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const CardPage = ({ card, index }) => {
  return (
    <div
      style={{
        width: "40vw",
        height: "15vw",
        position: "relative",
        margin: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          position: "absolute",
          background: "#F8F8F8",
          boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.2)",
          borderRadius: 20,
          border: "1px solid",
        }}
      />
      <div
        style={{
          left: 50,
          top: 30,
          position: "absolute",
          color: "black",
          fontSize: 44,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        {card.name}
      </div>
      <div
        style={{
          width: 150,
          height: 50,
          left: 50,
          top: 200,
          position: "absolute",
          background: "#ff0000",
          borderRadius: 20,
        }}
      />
      <Link to={`/cards/${index}`} style={{ textDecoration: "none" }}>
        <div
          style={{
            left: 70,
            top: 215,
            position: "absolute",
            color: "white",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          READ MORE
        </div>
      </Link>
    </div>
  );
};

export default CardPage;
