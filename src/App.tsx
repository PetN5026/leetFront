// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { Leet } from "./components/leet";
import { NavBar } from "./components/nav";
import { Routes, Route } from "react-router";
import "./App.css";
import { Home } from "./components/home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leet" element={<Leet />} />
      </Routes>
    </div>
  );
}

export default App;
