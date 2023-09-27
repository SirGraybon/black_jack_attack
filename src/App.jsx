import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PlayArea from "./components/PlayArea";
import { Dealer } from "./components/Dealer";
import { StateProvider } from "./state/StateContext";
import NavBar from "./components/Navbar";

function App() {
  return (
    <StateProvider>
      <div className="container">
        <NavBar/>
        <PlayArea />
        <Dealer />
      </div>
    </StateProvider>
  );
}

export default App;
