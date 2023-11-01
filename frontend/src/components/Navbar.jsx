import "../styles/navBar.css";

import shareState from "../state/StateContext";

const NavBar = function (id) {
  const { resetGame, users, addUserID } = shareState();



  return (
    <div className="navBarComponent">
      <div className="reset" onClick={() => resetGame()}>
        {" "}
        New Game ↻
      </div>
      
    </div>
  );
};

export default NavBar;
