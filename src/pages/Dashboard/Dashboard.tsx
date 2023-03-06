import { useState } from "react";
import { useRecoilState } from "recoil";
import { genderState } from "../../recoil/atoms";
import { menCharacters, womenCharacter } from "../../utils/data";
import Cards from "../../components/Cards/Cards";
import Sidebar from "../../components/Sidebar/Sidebar";
import FireFillIcon from "remixicon-react/FireFillIcon";
import "./Dashboard.css";

function Dashboard() {
  const [gender] = useRecoilState(genderState);
  const characters = gender === "men" ? menCharacters : womenCharacter;
  const [matches, setMatches] = useState([]);

  return (
    <div className="dashboard">
      <button className="dashboard__toggle">
        <FireFillIcon />
      </button>
      <Sidebar characters={matches} />
      <div className="dashboard__container">
        <Cards characters={characters} setMatches={setMatches} />
      </div>
    </div>
  );
}

export default Dashboard;
