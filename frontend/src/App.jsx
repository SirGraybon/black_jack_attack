import "./App.css";
import PlayArea from "./components/PlayArea";
import { Dealer } from "./components/Dealer";
import shareState, { StateProvider } from "./state/StateContext";
import NavBar from "./components/Navbar";
import Modal from "./components/Modal";
import io, { connect } from "socket.io-client";
import GameSettup from "./components/GameSettup";
import { useEffect } from "react";
const socket = io("http://localhost:8080");

function App() {
  const { gameOverModal, gameOn, players } = shareState();

  const handleClick = ()=> {
    socket.emit("send_message", {message: "this is a test"})
  }
// useEffect(() => {
// }, [players]);

// socket.on("connect", ()=> {
//   console.log("Connected")
// })

  console.log("running?");
  return (
    <StateProvider>
      <button onClick={()=> handleClick()}/>
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
