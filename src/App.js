import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";
import NavMobile from "./components/NavMobile";
import { HashRouter as Router, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import ChoicePage from "./components/ChoicePage";
import TrueFalse from "./components/TrueFalse";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/quiz" exact component={ChoicePage} />
        <Route path="/truefalse" exact component={ChoicePage} />
        <Route path="/trivia" exact component={Body} />
        <Route path="/" exact component={Body} />
        <Route path="/truefalsestart" exact component={TrueFalse} />
        <Route path="/quizstart" exact component={Quiz} />
        <NavMobile />
      </div>
    </Router>
  );
};

export default App;
