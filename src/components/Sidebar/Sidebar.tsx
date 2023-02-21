import Match from "../Match/Match";
import MenuFillIcon from "remixicon-react/MenuFillIcon";
import "./Sidebar.css";

const characters = [
  {
    name: "Richard Hendricks",
    url: "https://m.media-amazon.com/images/M/MV5BZTE5MzdlNzItNWQ2MC00NjU5LWJiYjQtYjNjYzMyN2ZlNTkyXkEyXkFqcGdeQXVyNjc5Mjg0NjU@._V1_UY1200_CR585,0,630,1200_AL_.jpg",
  },
  {
    name: "Monica Hall",
    url: "https://s1.r29static.com/bin/entry/006/x,80/1945796/image.jpg",
  },
];

function Sidebar() {
  return (
    <>
      <div className="toggle">
        <div>
          <MenuFillIcon size={30} />
        </div>
      </div>
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
    </>
  );
}

export default Sidebar;
