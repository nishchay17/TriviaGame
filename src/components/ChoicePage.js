import React, { useState, useEffect } from "react";
import { getQuestions } from "../api";
import gif from "../assets/nogif.json";
import errorGif from "../assets/error.gif";

const ChoicePage = (props) => {
  const randomGif = gif[Math.floor(Math.random() * 4)];
  const [amount, setAmount] = useState("10");
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("9");
  const [error, setError] = useState(false);
  const [notFound, setnotFound] = useState(0);
  const [isBoolean, setIsBoolean] = useState(false);
  const allowedEmoji = [..."🍉👾🤪😴👻👽🤖🐭🦕🦖🐉🍔🍕🍍🚗🐙🕸🦾🎃🏀"];
  const preLoad = () => {
    if (props.history.location.pathname === "/truefalse") {
      setIsBoolean(true);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getQuestions(isBoolean, amount, category, difficulty)
      .then((data) => {
        setnotFound(data.response_code);
        if (data.response_code) return;
        if (isBoolean)
          props.history.push({ pathname: "/truefalsestart", data, amount });
        else props.history.push({ pathname: "/quizstart", data, amount });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
    setnotFound(0);
    setError(false);
  };
  const handleChangeDifficulty = (event) => {
    setDifficulty(event.target.value);
    setnotFound(0);
    setError(false);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    setnotFound(0);
    setError(false);
  };

  const form = () => (
    <form>
      <div className="form-row">
        <div class="form-group col-md-4">
          <label for="inputState" className="lead">
            Number of Questions
          </label>
          <select
            id="inputState"
            class="form-control"
            required
            onChange={handleChangeAmount}
            value={amount}
          >
            <option selected value="10">
              10
            </option>
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState" className="lead">
            Category
          </label>
          <select
            id="inputState"
            class="form-control"
            required
            onChange={handleChangeCategory}
            value={category}
          >
            <option value="any">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState" className="lead">
            Difficulty
          </label>
          <select
            id="inputState"
            class="form-control"
            value={difficulty}
            required
            onChange={handleChangeDifficulty}
          >
            <option value="easy">😎 Easy</option>
            <option value="medium">🤯 Medium</option>
            <option value="hard">💀 Hard</option>
          </select>
        </div>
      </div>
      <button onClick={onSubmit} className="btn btn-outline-info btn-lg mt-2">
        Start 🔥
      </button>
      <br />
      <br />
      <br />
      <br />
    </form>
  );

  const noMatch = () => {
    if (notFound) {
      return (
        <div className="container text-center mt-3 mb-5">
          NO MATCH FOR THIS QUERY🥀
          <div className="col-8 offset-2 col-md-4 mt-2 offset-md-4 embed-responsive embed-responsive-1by1">
            <iframe
              src={randomGif}
              frameBorder="0"
              class="giphy-embed"
              style={{ zIndex: "-1" }}
            ></iframe>
          </div>
          <br />
          <br />
          <br />
        </div>
      );
    }
  };

  const errorPage = () => {
    if (error) {
      return (
        <div className="row text-center mt-3 mb-5">
          <div className="col-8 offset-2 col-md-4 offset-md-4">
            <img src={errorGif} className="rounded mx-auto img-fluid"></img>
          </div>
          <div className="col-12">
            <h1>💩</h1>
          </div>
        </div>
      );
    }
  };

  const heading = () => {
    if (isBoolean) {
      return (
        <div>
          <h2 className="display-4">True or False</h2>
          <p className="lead">
            ➕5️⃣ for Correct answer and ➖1️⃣ for wrong answer{" "}
          </p>
        </div>
      );
    } else
      return (
        <div>
          <h2 className="display-4 mb-3">
            Quiz
            {
              [...allowedEmoji][
                Math.floor(Math.random() * [...allowedEmoji].length - 1)
              ]
            }
            {
              [...allowedEmoji][
                Math.floor(Math.random() * [...allowedEmoji].length - 1)
              ]
            }
          </h2>
          <p className="lead">
            ➕5️⃣ for Correct answer and ➖1️⃣ for wrong answer{" "}
          </p>
        </div>
      );
  };

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <div className="container mt-4">
      {heading()}
      {form()}
      {errorPage()}
      {noMatch()}
    </div>
  );
};

export default ChoicePage;
