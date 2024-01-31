const Header = (params) => {
  return (
    <div>
      <h1>{params.content}</h1>
    </div>
  )
}

const Content = (params) => {
  return (
    <div>
      <p>
        {params.part} {params.exercises}
      </p>
    </div>
  )
}

const Total = (params) => {
  return (
    <div>
      <p>Number of exercises {params.exercises1 + params.exercises2 + params.exercises3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header content={course}/>
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App