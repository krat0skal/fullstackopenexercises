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

const StatisticLine = (params) => {
  if (params.text == 'positive'){
    return (
      <div>
        <p>
          {params.text} {params.value} %
        </p>
      </div>
    )
  } else{
    return (
      <div>
        <p>
          {params.text} {params.value}
        </p>
      </div>
    )
  }
}

const Statistics = ({props}) =>{
  if (props[3].value == 0){
    return(
      <div>
        No feedback given
      </div>
    )
  } else {
    return(
      <div>
        <StatisticLine text={props[0].name} value={props[0].value}/>
        <StatisticLine text={props[1].name} value={props[1].value}/>
        <StatisticLine text={props[2].name} value={props[2].value}/>
        <StatisticLine text={props[3].name} value={props[3].value}/>
        <StatisticLine text={props[4].name} value={props[4].value}/>
        <StatisticLine text={props[5].name} value={props[5].value}/>
      </div>
    )
  }
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