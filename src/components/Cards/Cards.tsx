import TinderCard from "react-tinder-card";
import "./Cards.css";

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

function Cards() {
  return (
    <div className="cards">
      {characters.map((character) => (
        <TinderCard className="swipe" key={character.name}>
          <div
            style={{ backgroundImage: "url(" + character.url + ")" }}
            className="card"
          >
            <h3>{character.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default Cards;
