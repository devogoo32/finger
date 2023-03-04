import React, { useEffect, createRef, useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import Controls from "../Controls/Controls";
import { getRandomNumber } from "../../utils/helpers";
import "./Cards.css";

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

  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < characters.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  useEffect(() => {
    if (lastDirection == "right" && getRandomNumber(1, 3) === 1) {
      setMatches((prevState: Character[]) => [
        characters[currentIndex + 1],
        ...prevState,
      ]);
    }
  }, [currentIndex]);

  const handleKeyUp = (e: any) => {
    if (e.key === "ArrowRight") swipe("right");
    if (e.key === "ArrowLeft") swipe("left");
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [currentIndex]);

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
        <p>Made with ❤️ by Denilson Lemus</p>
      </div>
      <Controls
        swipeLeft={() => swipe("left")}
        swipeRight={() => swipe("right")}
      />
    </>
  );
}

export default Cards;
