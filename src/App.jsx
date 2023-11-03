import Login from "./pages/Login";
import { useState } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer"
import CardList from "./components/CardList";
import Card from "./components/Card";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [user, setUser] = useState([]);
  const [cards,setCards]=useState([])
  return (true) ? ( // user && user.name
    <>
      <Navbar userName={user.name} />
      <CardList cards={cards} setCards={setCards}/>
      <Footer />
    </>
  ) : (
    <>
      <Login setUser={setUser} />
      <Footer />
    </>
  );
}

export default App;
