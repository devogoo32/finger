import { createRef, useEffect, useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";
import Controls from "../Controls/Controls";

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
