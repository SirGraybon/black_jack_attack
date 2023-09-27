import "../styles/navBar.css";

import shareState from "../state/StateContext";

const NavBar = function () {
  const { resetGame } = shareState();

  return (
    <div className="navBarComponent">
      <button onClick={() => resetGame()}></button>
    </div>
  );
};

export default NavBar;
