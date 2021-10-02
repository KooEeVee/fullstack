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

const Result = (props) => {
  return (
    <p>{props.text} {props.count} {props.text2} </p>
  )
}


const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
        <p>No feedback given</p>
    )
  }
  return (
    <>
    <Result text="good" count={props.good} />
    <Result text="neutral" count={props.neutral} />
    <Result text="bad" count={props.bad} />
    <Result text="all" count={props.allClicks} />
    <Result text="average" count={props.good-props.bad/props.allClicks} />
    <Result text="positive" count={props.good/props.allClicks} text2="%" />
    </>
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
      <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
