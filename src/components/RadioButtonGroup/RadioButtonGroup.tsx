import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { genderState } from "../../recoil/atoms";
import "./RadioButtonGroup.css";

function RadioButtonGroup() {
  const [gender, setGender] = useRecoilState(genderState);
  const [_, setSelectedOption] = useState("men");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    setGender(e.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        id="men"
        name="genre"
        value="men"
        checked={gender === "men"}
        onChange={handleOptionChange}
      />
      <label htmlFor="men" className="radio-button">
        Men
      </label>
      <input
        type="radio"
        id="women"
        name="genre"
        value="women"
        checked={gender === "women"}
        onChange={handleOptionChange}
      />
      <label htmlFor="women" className="radio-button">
        Women
      </label>
    </div>
  );
}

export default RadioButtonGroup;
