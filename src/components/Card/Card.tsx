import TinderCard from "react-tinder-card";
import "./Card.css";

type CardProps = {
  character: Character;
  index: number;
  childRefs: any;
};

function Card({ character, index, childRefs }: CardProps) {
  return (
    <TinderCard
      className="swipe"
      ref={childRefs[index]}
      preventSwipe={["up", "down"]}
      key={character.name}
    >
      <div
        style={{ backgroundImage: "url(" + character.url + ")" }}
        className="card"
      >
        <div className="card__info">
          <h2 className="card__name">{character.name}</h2>
          <p className="card__bio">{character.bio}</p>
        </div>
      </div>
    </TinderCard>
  );
}

export default Card;
