const Header = (params) => {
  return (
    <div>
      <h1>{params.content}</h1>
    </div>
  )
}

const Part = (params) => {
  return (
    <div>
      <p>
        {params.name} {params.number}
      </p>
    </div>
  )
}

const Content = (params) => {
  return (
    <div>
      <Part name={params.part1} number={params.exercises1}/>
      <Part name={params.part2} number={params.exercises2}/>
      <Part name={params.part3} number={params.exercises3}/>
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
      <Header content={course} />
      <Content  part1={part1} exercises1={exercises1} 
                part2={part2} exercises2={exercises2} 
                part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App