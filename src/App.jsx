import Login from "./pages/Login";
import { useState } from "react";
import Navbar from "./components/NavBar";
import CardList from "./components/CardList";
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [user, setUser] = useState([]);
  const [cards,setCards]=useState([])
  return !(user && user.name) ? (
    <>
      <Navbar userName={user.name} />
        {/* <Route
          path="/"
          element={<CardList cards={cards} setCards={setCards} />}
        /> */}
      <CardList cards={cards} setCards={setCards}/>
    </>
  ) : (
    <Login setUser={setUser} />
  );
}

export default App;
