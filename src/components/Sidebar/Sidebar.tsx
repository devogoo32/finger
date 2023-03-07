import { useState } from "react";
import FireFillIcon from "remixicon-react/FireFillIcon";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import logo from "../../assets/logo.png";
import Match from "../Match/Match";
import "./Sidebar.css";

type SidebarProps = {
  characters: Character[];
};

function Sidebar({ characters }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar__toggle" onClick={handleClick}>
        {isOpen && <CloseFillIcon />}
        {!isOpen && characters.length === 0 && <FireFillIcon />}
        {!isOpen && characters.length > 0 && <span>+{characters.length}</span>}
      </button>
      <div id={isOpen ? "open" : ""} className="sidebar">
        <div className="sidebar__header">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="sidebar__subheader">
          <h3>Matches</h3>
          <div className="sidebar__counter">{characters.length}</div>
        </div>
        <div className="sidebar__matches">
          {characters.map((character) => (
            <Match
              key={character.id}
              image={character.url}
              name={character.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
