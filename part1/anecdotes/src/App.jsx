import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const Header =() => {
  return(
    <h1>
      Anecdote of the Day
    </h1>
  )
}
const Footer =() => {
  return(
    <h1>
      Anecdote with most votes
    </h1>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const initialPoints = new Uint8Array(anecdotes.length);
  const [points,setPoints] = useState(initialPoints)
  const nextAnecdote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length)
    console.log('random num is'+randomNum)
    setSelected(randomNum)
  }

  const handleVote = () => {
    console.log('selected value is'+selected)
    console.log('points',points)
    const pointsCopy = [...points]
    pointsCopy[selected] += 1 
    setPoints(pointsCopy)
  }
  const indexOfMaxValue = points.indexOf(Math.max(...points));
  console.log('indexOfMaxValue is ',indexOfMaxValue)
 
  return (
    <div>
      <Header />
      {anecdotes[selected]}
      <div>
        has {points[selected]} votes
      </div>
      <div>
        <button onClick={handleVote}>
          vote
        </button>
        <button onClick={nextAnecdote}>
          next Anecdote
        </button>
      </div>
      <Footer />
      {anecdotes[indexOfMaxValue]}
    </div>
  )
}

export default App