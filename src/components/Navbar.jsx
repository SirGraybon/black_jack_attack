import "../styles/navBar.css";

import shareState from "../state/StateContext";

const NavBar = function () {
  const { resetGame } = shareState();

  return (
    <div className="navBarComponent">
      <div className="reset" onClick={() => resetGame()}> ↻</div>
    </div>
  );
};

export default NavBar;
