import React from "react";
import { animated, useSpring } from "react-spring";

const ResultScore = (props) => {
  const spring = useSpring({
    config: { duration: 1200 },
    from: { val: 0 },
    to: { val: props.score },
  });
  return (
    <animated.span style={{ color: "green" }}>
      {spring.val.interpolate((val) => Math.floor(val))}
    </animated.span>
  );
};

export default ResultScore;
