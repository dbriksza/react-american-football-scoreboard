//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          {Team(Button("Home"))}
          <div className="timer">00:03</div>
          {Team(Button("Away"))}
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {Button("Home", "Touch Down")}
          {Button("Home", "Field Goal")}
        </div>
        <div className="awayButtons">
          {Button("Away", "Touch Down")}
          {Button("Away", "Field Goal")}
        </div>
      </section>
    </div>
  );
}

function Button(team, scoreType) {
  const [score, setScore] = useState(0);
  return (
    <button
      onClick={() => {
        if ((scoreType = "touchdown")) {
          setScore(score + 7);
        } else if ((scoreType = "fieldGoal")) {
          setScore(score + 3);
        }
      }}
      className="homeButtons__touchdown"
    >
      {team} {scoreType}
    </button>
  );
}

function Team(cb) {
  return (
    <div className="away">
      <h2 className="away__name">{cb.team}</h2>
      <div className="away__score">{cb.score}</div>
    </div>
  );
}

export default App;
