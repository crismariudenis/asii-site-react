import React from "react";
import { Link } from "react-router-dom";

import "@fontsource/open-sans"; 

export default function Footer() {
    return (
      <>
        <div style={styles.footerMain} className="footer">
           <Link to={`https://www.asii.ro`} style={styles.text}>Home</Link>
           <img src={`https://www.asii.ro/asii.png`} alt="ASII" />
           <Link to={`https://www.asii.ro/contact`} style={styles.text}>Contact</Link>
        </div>
      </>
    );
  }
  const styles = {
    footerMain: {
        top: "100%",
        width: "100%",
        padding: 0,
        margin: "40px 0px 0px 0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Open Sans, sans-serif",
        textDecoration: "none",
        textAlign: "center",
    },

    text: {
      fontFamily: "Open Sans, sans-serif",
      textDecoration: "none",
      color: "#222",
      textAlign: "center",
      padding: 15
    },
  };