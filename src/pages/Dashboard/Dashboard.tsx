import { useState } from "react";
import TinderCard from "react-tinder-card";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

const db = [
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

function Dashboard() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__container">
        <div className="cards">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
