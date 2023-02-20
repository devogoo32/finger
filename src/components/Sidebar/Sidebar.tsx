import Match from "../Match/Match";
import "./Sidebar.css";

const characters = [
  {
    name: "Richard Hendricks",
    url: "https://www.altavod.com/assets/images/poster-placeholder.png",
  },
  {
    name: "Erlich Bachman",
    url: "https://www.altavod.com/assets/images/poster-placeholder.png",
  },
  {
    name: "Monica Hall",
    url: "https://www.altavod.com/assets/images/poster-placeholder.png",
  },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Finger</h1>
      </div>
      <div className="sidebar__subheader">
        <h3>Matches</h3>
        <div className="sidebar__counter">3</div>
      </div>
      <div className="sidebar__matches">
        {characters.map((match) => (
          <Match image={match.url} name={match.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
