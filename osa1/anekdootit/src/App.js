import React from "react";
import { useState } from "react";


const Header = (props) => {
  return (
      <h1>{props.header}</h1>
  )
}

const Votes = (props) => {
  return (
    <p>has votes {props.votes}</p>
  )
}

const Anecdote = (props) => {
  return (
    <>
    <p>{props.anecdote}</p>
    <Votes votes={props.votes} />
    </>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0])
  const [popular, setPopular] = useState(0)

  const handleClickRandom = () => {
    setSelected(Math.floor(Math.random() * 7))
    setPopular(votes.indexOf(Math.max(...votes)))
  }

  const handleClickVote = () => {
    const updateVotes = [...votes]
    updateVotes[selected] += 1
    setVotes(updateVotes)
    setPopular(votes.indexOf(Math.max(...votes)))
  }

  return (
    <div>
      <Header header="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button text="next anecdote" handleClick={handleClickRandom} />
      <Button text="vote" handleClick={handleClickVote} />
      <Header header="Anecdote with most votes" />
      <Anecdote anecdote={anecdotes[popular]} votes={votes[popular]} />
    </div>
  );
}

export default App;
