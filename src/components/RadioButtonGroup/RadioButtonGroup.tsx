import React, { useState } from "react";
import "./RadioButtonGroup.css";

function RadioButtonGroup() {
  const [selectedOption, setSelectedOption] = useState("men");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        id="men"
        name="genre"
        value="men"
        checked={selectedOption === "men"}
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
        checked={selectedOption === "women"}
        onChange={handleOptionChange}
      />
      <label htmlFor="women" className="radio-button">
        Women
      </label>
    </div>
  );
}

export default RadioButtonGroup;
