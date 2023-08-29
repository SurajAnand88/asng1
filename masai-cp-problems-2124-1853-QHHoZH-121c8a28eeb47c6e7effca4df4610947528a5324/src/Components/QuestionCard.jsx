import { useState } from "react";
import Option from "./Option";
const QuestionCard = ({ data, setScore }) => {
  console.log(data);
  const [ans, setAns] = useState(false);
  return (
    <div className="question-card">
      {/* add question here */}
      <h3>{data.question}</h3>

      <div className="options">
        {data.options.map((ele, ind) => {
          return (
            <Option
              options={ele}
              key={ind}
              index={ind}
              correctOptionIndex={data.correctOptionIndex}
              setScore={setScore}
            />
          );
        })}
      </div>
      <div className="show-ans">
        <button onClick={() => setAns(!ans)}>
          {ans ? "Hide Ans" : "Show Ans"}
        </button>
        {ans ? <p>{data.options[data.correctOptionIndex]}</p> : null}
      </div>
    </div>
  );
};

export default QuestionCard;
