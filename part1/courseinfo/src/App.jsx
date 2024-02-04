const Header = (params) => {
  return (
    <div>
      <h1>{params.content}</h1>
    </div>
  )
}

const Part = (params) => {
  console.log('The object of array passed to part component from Content')
  console.log(params)
  return (
    <div>
      <p>
        {params.name} {params.exercises}
      </p>
    </div>
  )
}

const Content = ({parts}) => {
  console.log('The entire array paassed to Content componenet from App')
  console.log(parts)
  return (
    <div>
      <Part {...parts[0]}/>
      <Part {...parts[1]}/>
      <Part {...parts[2]}/>
    </div>
  )
}

const Total = ({parts}) => {
  console.log('inside Total Function')
  console.log(parts[0].exercises+parts[1].exercises+parts[2].exercises)
  return (
    <div>
      <p>Number of exercises {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  console.log(parts[0].name)

  return (
    <div>
      <Header content={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App