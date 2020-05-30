import React, { useState } from "react";
import shuffle from "shuffle-array";
import { Link } from "react-router-dom";

const Quiz = (props) => {
  const arr = [0, 1, 2, 3];
  const [questions, setQuestions] = useState(props.location.data?.results);
  const [amount, setAmount] = useState(0);
  const maxAmount = props.location.amount;
  const [score, setScore] = useState(0);

  const check = (index) => {
    if (index === 3) {
      setScore(score + 5);
    } else {
      setScore(score - 1);
    }
    setTimeout(() => {
      setAmount(amount + 1);
    }, 0);
  };

  const card = () => {
    if (amount < maxAmount) {
      questions[amount].incorrect_answers.push(
        questions[amount].correct_answer
      );
      shuffle(arr);
      return (
        <div className="container border p-3">
          <div className="h4 m-3">
            {questions[amount].question
              .replace("&quot;", `'`)
              .replace("&quot;", `'`)
              .replace("&quot;", `'`)
              .replace("&eacute;", "")
              .replace("&eacute;", "")
              .replace("&#039;", `'`)
              .replace("&#039;", `'`)
              .replace("&#039;", `'`)
              .replace("&shy;", ` `)
              .replace("&shy;", ` `)
              .replace("&shy;", ` `)
              .replace("&shy;", ` `)
              .replace("&rsquo;", ` `)
              .replace("&rsquo;", ` `)
              .replace("&rsquo;", ` `)
              .replace("&shy;", ` `)
              .replace("&shy;", ` `)
              .replace("&shy;", ` `)
              .replace("&quot;", `'`)}
          </div>
          <div class="row align-middle my-3 justify-content-center">
            <div className="col-12 col-md-4">
              <button
                class="btn btn-outline-info btn-lg mx-2 mt-2"
                onClick={() => check(arr[0])}
              >
                {questions[amount].incorrect_answers[arr[0]]}
              </button>
              <button
                class="btn btn-outline-info btn-lg mx-2 mt-2"
                onClick={() => check(arr[1])}
              >
                {questions[amount].incorrect_answers[arr[1]]}
              </button>
            </div>
          </div>
          <div className="row align-middle justify-content-center">
            <div className="col-12 col-md-4">
              <button
                class="btn btn-outline-info btn-lg mx-2 mt-2"
                onClick={() => check(arr[2])}
              >
                {questions[amount].incorrect_answers[arr[2]]}
              </button>
              <button
                class="btn btn-outline-info btn-lg mx-2 mt-2"
                onClick={() => check(arr[3])}
              >
                {questions[amount].incorrect_answers[arr[3]]}
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  const result = () => {
    if (amount >= maxAmount)
      return (
        <div>
          <div className="h1 my-5">
            {score} is your score out of {5 * maxAmount}
          </div>
          <Link className="btn btn-outline-info btn-lg" to="/quiz">
            Go Back
          </Link>
        </div>
      );
  };

  return (
    <div>
      {
        <h1 className="mt-3">
          {maxAmount - amount
            ? maxAmount - amount + " More To Go"
            : "Completed 🎉"}
        </h1>
      }
      {card()}
      {result()}
    </div>
  );
};

export default Quiz;
