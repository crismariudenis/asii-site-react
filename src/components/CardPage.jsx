import React from "react";
import { Link } from "react-router-dom";

import Flip from 'react-reveal/Flip'

const CardDetail = ({ card }) => {
  const styles = {
    container: {
      width: "60vw",
      margin: "5px auto",
      padding: "5px auto",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      fontFamily: "Open Sans, sans-serif",
    },
    heading: {
      fontSize: "2em",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    title: {
      fontSize: "3em",
      fontWeight: "bold",
      marginBottom: "10px",
      textAlign: "center"
    },
    back: {
      fontSize: "18px",
      fontWeight: "bold",
      marginTop: "50px",
      textAlign: "center",
      textDecoration: "none",
      color: "#ef4444",
      padding: 15,
      textShadow: "0px 0px 25px #ef4444",
    },
    listItem: {
      marginBottom: "8px",
    },
    containerIn: {
      padding: "10px",
      margin: "10px"
    },
  };

  if (!card) {
    return <div style={styles.container}>Card not found</div>;
  }

  return (
    <div style={styles.container}>
        <div style={styles.containerIn}>
        <Flip top cascade>
          <h1 style={styles.title}>{card.name}</h1>
          <p>In Iasi: {card.inIasi ? "Yes" : "No"}</p>
          <p>Technologies: {card.technologies.join(", ")}</p>
          <h3 style={styles.heading}>Packets:</h3>
          <ul>
            {card.packets.map((packet) => (
              <li key={packet._id} style={styles.listItem}>
                Date: {packet.date}, Amount: {packet.amount}
              </li>
            ))}
          </ul>
          <h3 style={styles.heading}>Helping Methods:</h3>
          <ul>
            {card.helpingMethod.map((method) => (
              <li key={method} style={styles.listItem}>
                {method}
              </li>
            ))}
          </ul>
          <h3>
            <Link to={`../../`} style={styles.back}>Back</Link>
          </h3>
        </Flip>
      </div>
    </div>
  );
};

export default CardDetail;
