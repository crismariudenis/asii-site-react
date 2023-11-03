import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import Flip from 'react-reveal/Flip'

import "@fontsource/open-sans"; 

const Card = ({ card, index }) => {
  return (
    <div
      style={{
        width: "40vw",
        height: "15vw",
        position: "relative",
        margin: "10px",
        marginBottom: "25px",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          position: "absolute",
        }}
      />
      
      <Flip top cascade>
      <div
        style={{
          width: "100%",
          height: "100%",
          top: "1vw",
          position: "absolute",
          color: "black",
          fontSize: 44,
          fontFamily: "Open Sans",
          textAlign: "center",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        {card.name}
      </div>
      <div
        style={{
          padding: "0% 2.5% 0% 2.5%",
          top: 90, // Adjusted the position for the new text field
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Open Sans",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        {card.text}
      </div>
      <Link to={`/cards/${index}`} style={{ textDecoration: "none" }}>
        <div
          style={{
            width: "100%",
            top: "79%",
            position: "absolute",
            color: "rgb(239 68 68)",
            textShadow: "0px 0px 25px #ef4444",
            fontSize: 18,
            fontFamily: "Open Sans",
            textAlign: "center",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          READ MORE
        </div>
      </Link>
      </Flip>
    </div>
  );
};

/* /* 
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "75%",
          left: "16vw",
          width: "8.25vw",
          height: "3rem",
          position: "absolute",
          background: "rgb(239 68 68)",
          borderRadius: 10,
        }}
      /> */

export default Card;
