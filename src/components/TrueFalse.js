import React, { useState } from "react";
import Drake from "../assets/Drake.png";
import Pooh from "../assets/Pooh.jpg";
import Carry from "../assets/carry.png";
import Irfan from "../assets/irfan.jpg";
import { Link } from "react-router-dom";

const Image = [Drake, Pooh, Carry, Irfan];

const TrueFalse = (props) => {
  const [questions, setQuestions] = useState(props.location.data?.results);
  const [amount, setAmount] = useState(0);
  const maxAmount = props.location.amount;
  const [score, setScore] = useState(0);
  const [btnTrue, setbtnTrue] = useState("btn btn-outline-info btn-lg");
  const [btnFalse, setbtnFalse] = useState("btn btn-outline-info btn-lg");

  const checkTrue = () => {
    if (questions[amount].correct_answer === "True") {
      setScore(score + 5);
      setbtnTrue("btn btn-success btn-lg");
      setbtnFalse("btn btn-danger btn-lg");
    } else {
      setScore(score - 1);
      setbtnTrue("btn btn-danger btn-lg");
      setbtnFalse("btn btn-success btn-lg");
    }
    setTimeout(() => {
      setbtnTrue("btn btn-outline-info btn-lg");
      setbtnFalse("btn btn-outline-info btn-lg");
      setAmount(amount + 1);
    }, 1000);
  };
  const checkFalse = () => {
    if (questions[amount].correct_answer === "False") {
      setScore(score + 5);
      setbtnTrue("btn btn-danger btn-lg");
      setbtnFalse("btn btn-success btn-lg");
    } else {
      setbtnTrue("btn btn-success btn-lg");
      setbtnFalse("btn btn-danger btn-lg");
      setScore(score - 1);
    }
    setTimeout(() => {
      setbtnTrue("btn btn-outline-info btn-lg");
      setbtnFalse("btn btn-outline-info btn-lg");
      setAmount(amount + 1);
    }, 1000);
  };

  const card = () => {
    if (amount < maxAmount)
      return (
        <div>
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
                .replace("&quot;", `'`)}
            </div>
            <div className="row align-items-center">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <img src={Image[amount % 4]} className="img-fluid"></img>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row align-items-center">
                  <div className="col">
                    <button
                      className={`${btnFalse} mt-4 mb-sm-5`}
                      onClick={checkFalse}
                    >
                      False
                    </button>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col">
                    <button
                      className={`${btnTrue} mt-4 mb-sm-5`}
                      onClick={checkTrue}
                    >
                      True
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      );
  };

  const result = () => {
    if (amount >= maxAmount)
      return (
        <div>
          <div className="h1 my-5">
            {score} is your score out of {5 * maxAmount}
          </div>
          <Link className="btn btn-outline-info btn-lg" to="/truefalse">
            Go Back
          </Link>
        </div>
      );
  };

  return (
    <div className="container mt-3">
      <h1>
        {maxAmount - amount
          ? maxAmount - amount + " More To Go"
          : "Completed 🎉"}
      </h1>
      {card()}
      {result()}
    </div>
  );
};

export default TrueFalse;
