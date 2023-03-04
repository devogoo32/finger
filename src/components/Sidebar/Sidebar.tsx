import logo from "../../assets/logo.png";
import Match from "../Match/Match";
import "./Sidebar.css";

type SidebarProps = {
  characters: Character[];
};

function Sidebar({ characters }: SidebarProps) {
  return (
    <div className="sidebar">
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
  );
}

export default Sidebar;
