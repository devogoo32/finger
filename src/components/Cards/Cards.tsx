import React, { useEffect, createRef, useMemo, useRef, useState } from "react";
import Controls from "../Controls/Controls";
import Card from "../Card/Card";
import "./Cards.css";
import { getRandomNumber } from "../../utils/helpers";
import TinderCard from "react-tinder-card";

type CardsProps = {
  characters: Character[];
  setMatches: (arg: any) => void;
};

function Cards({ characters, setMatches }: CardsProps) {
  const [currentIndex, setCurrentIndex] = useState(characters.length - 1);
  const [lastDirection, setLastDirection] = useState("");
  const currentIndexRef = useRef(currentIndex);
  const canSwipe = currentIndex >= 0;

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

  useEffect(() => {
    if (lastDirection == "right") {
      setMatches((prevState: Character[]) => [
        characters[currentIndex + 1],
        ...prevState,
      ]);
    }
  }, [currentIndex]);

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
            key={character.id}
            ref={childRefs[index]}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, index)}
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
