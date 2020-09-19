import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Spring, config } from "react-spring/renderprops";

const Body = () => {
  const [rotate, setRotate] = useState(0);
  const props = useSpring({
    config: { duration: 1200 },
    to: { opacity: 1 },
    from: { opacity: 0.1 },
  });

  return (
    <div className="container">
      <h1 className="display-4 mt-5 mx-3">Hello There</h1>
      <h1>
        <Spring
          config={config.slow}
          from={{ transform: "rotate(0deg)" }}
          to={{ transform: `rotate(${rotate}deg)` }}
        >
          {(props) => <div style={props}>❗</div>}
        </Spring>
      </h1>

      <animated.div
        style={props}
        className="lead px-3 my-5"
        onClick={() => {
          setRotate(rotate + 10);
        }}
      >
        Welcome to my Trivia Game 🅰🅿🅿, created with ReactJS.
        <br /> There are Two modes by which you could play, True✅ And False❌ ,
        and Multiple Choice Questions (MCQ). I hope you will like the twist of
        Gifs and Memes added in it.
        <p>
          <small>
            <br />{" "}
            <a href="https://opentdb.com/" target="_blank">
              This API
            </a>{" "}
            is Used for getting the Questions.
          </small>
          <br />
          <br />
        </p>
      </animated.div>
    </div>
  );
};

export default Body;
