import { createRef, useMemo, useRef, useState } from "react";
import { characters } from "../../utils/data";
import Controls from "../Controls/Controls";
import Card from "../Card/Card";
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
          <Card
            index={index}
            character={character}
            childRefs={childRefs}
            swiped={swiped}
          />
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
