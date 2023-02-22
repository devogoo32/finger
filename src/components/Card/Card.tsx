import TinderCard from "react-tinder-card";

type CardProps = {
  character: Character;
  index: number;
  childRefs: any;
  swiped: (direction: string, index: number) => void;
};

function Card({ character, index, childRefs, swiped }: CardProps) {
  console.log("CARD")

  return (
    <TinderCard
      className="swipe"
      ref={childRefs[index]}
      preventSwipe={["up", "down"]}
      onSwipe={(dir) => swiped(dir, index)}
      key={character.name}
    >
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
  );
}

export default Card;
