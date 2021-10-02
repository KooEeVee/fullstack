import React from "react";
import { useState } from "react";

const Header = (props) => {
  return (
      <h1>{props.header}</h1>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
    <p>{props.text} {props.count} {props.text2} </p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  

  const handleGoodClick = () => {
    setAll(allClicks +1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks +1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks +1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Header header="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header header="statistics" />
      <Statistics text="good" count={good} />
      <Statistics text="neutral" count={neutral} />
      <Statistics text="bad" count={bad} />
      <Statistics text="all" count={allClicks} />
      <Statistics text="average" count={(good-bad)/allClicks} />
      <Statistics text="positive" count={good/allClicks} text2="%" />
    </div>
  );
}

export default App;
