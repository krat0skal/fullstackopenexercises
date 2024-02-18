import { useState } from 'react'

const Header =() => {
  return(
    <h1>
      give feedback
    </h1>
  )
}

const Footer =() => {
  return(
    <h1>
      statistics
    </h1>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Part = (params) => {
  return (
    <div>
      <p>
        {params.score} {params.amount}
      </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log('Value of good is '+good)
  return (
    <div>
      <Header />
      <Button text='good' handleClick={() => setGood(good+1)}/>
      <Button text='neutral' handleClick={() => setNeutral(neutral+1)}/>
      <Button text='bad' handleClick={() => setBad(bad+1)}/>
      <Footer />
      <Part score='good' amount={good}/>
      <Part score='neutral' amount={neutral}/>
      <Part score='bad' amount={bad}/>
    </div>
  )
}

export default App