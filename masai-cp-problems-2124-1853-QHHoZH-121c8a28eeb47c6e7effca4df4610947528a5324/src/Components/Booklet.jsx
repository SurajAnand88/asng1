import { useState } from "react";
import QuestionCard from "./QuestionCard";
const Booklet = () => {
  const [data, setData] = useState([]);
  const [welcome, setWelcome] = useState(true);
  const [score, setScore] = useState(0);
  async function fetchQuestions() {
    const data = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
    );
    const questions = await data.json();
    setData([...questions.data]);
    console.log(questions);
    setWelcome(false);
  }

  return (
    <div data-testid="Booklet">
      {welcome ? (
        <div className="welcome-div">
          <h1>To begin the exam, click on the 'Start Exam' button below</h1>
          <button onClick={fetchQuestions}>Start Exam</button>
        </div>
      ) : (
        <div className="questions-container">
          <button onClick={() => setWelcome(true)}>End Exam</button>
          <h3>Score: {score}</h3>

          {data?.map((data) => {
            return (
              <QuestionCard data={data} key={data.id} setScore={setScore} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Booklet;
