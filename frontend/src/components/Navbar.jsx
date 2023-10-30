import "../styles/navBar.css";

import shareState from "../state/StateContext";

const NavBar = function (id) {
  const { resetGame, users, addUserID } = shareState();

  const handleClick = () => {
    addUserID(id.id);
    console.log(users);
  };

  return (
    <div className="navBarComponent">
      <div className="reset" onClick={() => resetGame()}>
        {" "}
        New Game ↻
      </div>
      <div className="reset" onClick={() => handleClick()}>
        {" "}
        New Game ↻
      </div>
    </div>
  );
};

export default NavBar;
