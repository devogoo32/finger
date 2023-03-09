import { useState } from "react";
import { useRecoilState } from "recoil";
import { genderState } from "../../recoil/atoms";
import Cards from "../../components/Cards/Cards";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

const menCharacters = [
  {
    id: 0,
    name: "Groot",
    url: "src/assets/characters/men/groot.png",
    bio: "I am Groot",
  },
  {
    id: 1,
    name: "Yoda",
    url: "src/assets/characters/men/yoda.png",
    bio: "Size matters not, but swipe right, you must",
  },
  {
    id: 2,
    name: "Forrest Gump",
    url: "src/assets/characters/men/forrest.png",
    bio: "I'm a former college football player, shrimp boat captain, and Vietnam veteran. Seeking someone who can appreciate my love of running and Ping-Pong. I may not be a smart man, but I know what love is.",
  },
  {
    id: 3,
    name: "Mclovin",
    url: "src/assets/characters/men/mclovin.png",
    bio: "Hawain. Organ donor",
  },
  {
    id: 4,
    name: "Borat Sagdiyev",
    url: "src/assets/characters/men/borat.png",
    bio: "Kazakh journalist and world traveler seeking partner for cultural exchange and sexy time.",
  },
  {
    id: 5,
    name: "Joey Tribbiani",
    url: "src/assets/characters/men/joey.png",
    bio: "Hey, How you doin'? I'm an actor and I speak French fluently. Let's go get food (I don't share).",
  },
  {
    id: 6,
    name: "Jason Voorhees",
    url: "src/assets/characters/men/jason.png",
    bio: "Let's go on a date. I'm free Friday the 13th.",
  },
  {
    id: 7,
    name: "Darth Vader",
    url: "src/assets/characters/men/darth.png",
    bio: "If you have a daddy or choking kink, I'm your guy. I have two kids (I hope that's not a deal breaker).",
  },
  {
    id: 8,
    name: "Willy Wonka",
    url: "src/assets/characters/men/willy.png",
    bio: "Factory owner seeking someone with a golden ticket to my heart. No Oompa Loompas please.",
  },
  {
    id: 9,
    name: "Walter White",
    url: "src/assets/characters/men/walter.png",
    bio: "Chemist by trade, but now looking for a partner in crime (figuratively speaking, of course).",
  },
  {
    id: 10,
    name: "Latrell Spencer",
    url: "src/assets/characters/men/latrell.png",
    bio: "Looking for someone who's not afraid to belt out 'A Thousand Miles' with me during car rides.",
  },
];

const womenCharacter = [
  {
    id: 0,
    name: "Daenerys Targaryen",
    url: "src/assets/characters/women/daenerys.png",
    bio: "I am Daenerys Stormborn of the House Targaryen, First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragons.",
  },
  {
    id: 1,
    name: "Meredith Gray",
    url: "src/assets/characters/women/meredith.png",
    bio: "I know my way around a heart (literally), but I'm still trying to figure out this whole dating thing.",
  },
  {
    id: 2,
    name: "Michonne Hawthorne",
    url: "src/assets/characters/women/michonne.png",
    bio: "I may look tough on the outside, but I'm a softie at heart. Swipe right if you're looking for someone who can kick butt and cuddle.",
  },
  {
    id: 3,
    name: "Samara Morgan",
    url: "src/assets/characters/women/samara.png",
    bio: "If you're looking for someone who can give you goosebumps with just one phone call, swipe right.",
  },
  {
    id: 4,
    name: "Eleanor Shellstrop",
    url: "src/assets/characters/women/eleanor.png",
    bio: "I may not be a saint, but I'm not exactly a demon either.",
  },
  {
    id: 5,
    name: "Minerva McGonagall",
    url: "src/assets/characters/women/minerva.png",
    bio: "If you are a cat person, I'm your gal.",
  },
  {
    id: 6,
    name: "Lois Wilkerson",
    url: "src/assets/characters/women/lois.png",
    bio: "Mother of five boys. We'll get along if you let me control your life and admit that I'm always right:)",
  },
  {
    id: 7,
    name: "Harley Quinn",
    url: "src/assets/characters/women/harley.png",
    bio: "Not sure if I attract crazy or if I make them crazy.",
  },
  {
    id: 8,
    name: "Angela Martin",
    url: "src/assets/characters/women/angela.png",
    bio: "If you're looking for someone who's down to earth, funny, and relatable, you should probably swipe left. But if you're into cats, I'm your girl.",
  },
  {
    id: 9,
    name: "Gloria Delgado",
    url: "src/assets/characters/women/gloria.png",
    bio: "Not interested in anyone who takes themselves too seriously or doesn't know how to have fun. If you're down for some salsa dancing, margaritas, and a lot of laughter, let's match.",
  },
  {
    id: 10,
    name: "Hermione Granger",
    url: "src/assets/characters/women/hermione.png",
    bio: "If you're looking for someone who can cast a Patronus, solve a riddle, and still have time to discuss social justice issues, let's match. But be warned, I won't tolerate any Death Eater sympathizers or Slytherin elitists.",
  },
];

function Dashboard() {
  const [gender] = useRecoilState(genderState);
  const characters = gender === "men" ? menCharacters : womenCharacter;
  const [matches, setMatches] = useState([]);

  return (
    <div className="dashboard">
      <Sidebar characters={matches} />
      <div className="dashboard__container">
        <Cards characters={characters} setMatches={setMatches} />
      </div>
    </div>
  );
}

export default Dashboard;
