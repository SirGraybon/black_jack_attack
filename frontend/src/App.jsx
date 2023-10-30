import "./App.css";
import PlayArea from "./components/PlayArea";
import { Dealer } from "./components/Dealer";
import shareState, { StateProvider } from "./state/StateContext";
import NavBar from "./components/Navbar";
import Modal from "./components/Modal";
import io from "socket.io-client";
import GameSettup from "./components/GameSettup";

const socket = io("http://localhost:8080");

function App() {
  const { gameOverModal, gameOn, players, users } = shareState();

  let userID = "placeholder"

  socket.on("connect", () => {
    console.log("Connected");
    console.log(`connected as user ${socket.id}`);
    userID = socket.id
  });
  console.log(socket.id)

  return (
    <StateProvider>
      <div className="container">
        <button onClick={() => handleClick()} />
        <div>{users}</div>
        {gameOverModal && <Modal />}
        <NavBar id={userID} />
        {gameOn && <GameSettup />}
        <PlayArea />
        <Dealer />
      </div>
      {/* <button onClick={() => handleClick()}></button> */}
    </StateProvider>
  );
}

export default App;
