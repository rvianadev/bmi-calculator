import React, { useState } from "react";

function RadioInputComponent() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        Opção 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          ckecked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        Opção 2
      </label>
      <label>
        <input
          type="radio"
          value="option3"
          ckecked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        Opção 3
      </label>

      <p>Opção selecionada: {selectedOption}</p>
    </div>
  );
}

export default RadioInputComponent;
