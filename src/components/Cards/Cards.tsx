import { createRef, useEffect, useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import { characters } from "../../utils/data";
import Controls from "../Controls/Controls";
import "./Cards.css";

function Cards() {
  const [currentIndex, setCurrentIndex] = useState(characters.length - 1);
  const [lastDirection, setLastDirection] = useState("");
  const canSwipe = currentIndex >= 0;
  const currentIndexRef = useRef(currentIndex);

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const childRefs: React.RefObject<any>[] = useMemo(
    () =>
      Array(characters.length)
        .fill(0)
        .map((i) => createRef()),
    []
  );

  const swiped = (direction: string, index: number) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < characters.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  return (
    <>
      <div className="cards">
        {characters.map((character, index) => (
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
        ))}
      </div>
      <Controls
        swipeLeft={() => swipe("left")}
        swipeRight={() => swipe("right")}
      />
    </>
  );
}

export default Cards;
