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
  if (params.score == 'positive'){
    return (
      <div>
        <p>
          {params.score} {params.amount} %
        </p>
      </div>
    )
  } else{
    return (
      <div>
        <p>
          {params.score} {params.amount}
        </p>
      </div>
    )
  }
}

const Statistics = ({props}) =>{
  return(
    <div>
      <Part score={props[0].name} amount={props[0].value}/>
      <Part score={props[1].name} amount={props[1].value}/>
      <Part score={props[2].name} amount={props[2].value}/>
      <Part score={props[3].name} amount={props[3].value}/>
      <Part score={props[4].name} amount={props[4].value}/>
      <Part score={props[5].name} amount={props[5].value}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const statsParams = [
  {
    name: 'good',
    value: good
  },
  {
    name: 'neutral',
    value: neutral
  },
  {
    name: 'bad',
    value: bad
  },
  {
    name: 'all',
    value: good+neutral+bad
  },
  {
    name: 'average',
    value: (good-bad)/(good+neutral+bad)
  },
  {
    name: 'positive',
    value: (good*100)/(good+neutral+bad)
  }
]
  return (
    <div>
      <Header />
      <Button text='good' handleClick={() => setGood(good+1)}/>
      <Button text='neutral' handleClick={() => setNeutral(neutral+1)}/>
      <Button text='bad' handleClick={() => setBad(bad+1)}/>
      <Footer />
      <Statistics props={statsParams} />
    </div>
  )
}

export default App