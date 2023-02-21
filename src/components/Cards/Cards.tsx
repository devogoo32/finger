import TinderCard from "react-tinder-card";
import "./Cards.css";

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
