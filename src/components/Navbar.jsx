import React from "react";
import UserIcon from "./UserIcon";

import "@fontsource/open-sans"; 

import "../App.css";

export default function NavBar({userName}) {
  return (
    <>
      <nav className="navbar">
        <h1 style={styles.font}>ASII Platforma Firme</h1>
        <UserIcon userName={userName} />
      </nav>
    </>
  );
}
const styles = {
  font: {
    fontFamily: "Open Sans, sans-serif",
  },
};