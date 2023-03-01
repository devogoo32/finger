import { useState } from "react";
import { useRecoilState } from "recoil";
import { genderState } from "../../recoil/atoms";
import { menCharacters, womenCharacter } from "../../utils/data";
import Cards from "../../components/Cards/Cards";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  const [gender] = useRecoilState(genderState);
  const [characters, setCharacters] =
    gender === "men" ? useState(menCharacters) : useState(womenCharacter);

  return (
    <div className="dashboard">
      <Sidebar characters={characters} />
      <div className="dashboard__container">
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default Dashboard;
