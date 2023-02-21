import TinderCard from "react-tinder-card";
import "./Cards.css";

const characters = [
  {
    name: "Richard Hendricks",
    url: "https://m.media-amazon.com/images/M/MV5BZTE5MzdlNzItNWQ2MC00NjU5LWJiYjQtYjNjYzMyN2ZlNTkyXkEyXkFqcGdeQXVyNjc5Mjg0NjU@._V1_UY1200_CR585,0,630,1200_AL_.jpg",
    bio: "Lorem ipsumLorem ipsumLorem ipsum",
  },
  {
    name: "Monica Hall",
    url: "https://s1.r29static.com/bin/entry/006/x,80/1945796/image.jpg",
    bio: "Lorem ipsum",
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
            <div className="card__info">
              <h2>{character.name}</h2>
              <p>{character.bio}</p>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default Cards;
