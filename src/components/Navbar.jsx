import React from "react";
import UserIcon from "./UserIcon";
import "../App.css";

export default function NavBar({userName}) {
  return (
    <>
      <nav className="navbar">
        <h1 style={styles.font}>ASII</h1>
        <UserIcon userName={userName} />
      </nav>
    </>
  );
}
const styles = {
  font: {
    fontFamily: "Arial, sans-serif",
  },
};