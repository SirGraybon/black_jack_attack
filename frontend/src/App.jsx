import "./App.css";
import PlayArea from "./components/PlayArea";
import { Dealer } from "./components/Dealer";
import shareState, { StateProvider } from "./state/StateContext";
import NavBar from "./components/Navbar";
import Modal from "./components/Modal";
import io, { connect } from "socket.io-client";
import GameSettup from "./components/GameSettup";
import { useEffect } from "react";

useEffect(() => {
  socket = io.connect("http://localhost:8080");
}, []);

// socket.on("connect", ()=> {
//   console.log("Connected")
// })

function App() {
  console.log("running?");
  const { gameOverModal, gameOn } = shareState();
  return (
    <StateProvider>
      <div className="container">
        {gameOverModal && <Modal />}
        <NavBar />
        {gameOn && <GameSettup />}
        <PlayArea />
        <Dealer />
      </div>
      {/* <button onClick={() => handleClick()}></button> */}
    </StateProvider>
  );
}

export default App;
