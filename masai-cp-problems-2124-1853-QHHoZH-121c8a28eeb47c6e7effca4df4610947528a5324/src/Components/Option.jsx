import { useState } from "react";
import "../App.css";
const Option = ({ options, correctOptionIndex, index, setScore }) => {
  const [ans, setAns] = useState(false);
  function handleAnswer() {
    if (correctOptionIndex === index) {
      setScore((score) => score + 1);
      setAns(true);
    } else {
      setAns(true);
    }
  }

  return (
    <div data-testid="option">
      <button
        onClick={handleAnswer}
        className={
          index === correctOptionIndex && ans ? "bgGreen" : ans ? "bgRed" : null
        }
      >
        {options}
      </button>
    </div>
  );
};

export default Option;
