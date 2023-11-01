import React from "react";

const CardDetail = ({ card }) => {
  const styles = {
    container: {
      width: "60vw",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      fontFamily: "Arial, sans-serif",
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
    },
    listItem: {
      marginBottom: "8px",
    },
  };

  if (!card) {
    return <div style={styles.container}>Card not found</div>;
  }

  return (
    <div style={styles.container}>
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
    </div>
  );
};

export default CardDetail;
