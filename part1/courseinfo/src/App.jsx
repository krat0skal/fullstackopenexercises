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
        {params.name} {params.exercises}
      </p>
    </div>
  )
}

const PartTest = (params) => {
  console.log(params)
  return (
    <div>
      <p>
        {params.name} {params.exercises}
      </p>
    </div>
  )
}

const Content = (params) => {
  return (
    <div>
      <Part name={params.name1} exercises={params.exercises1}/>
      <Part name={params.name2} exercises={params.exercises2}/>
      <Part name={params.name3} exercises={params.exercises3}/>
    </div>
  )
}

const ContentTest = (params) => {
  return (
    <div>
      <PartTest {...params}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header content={course} />
      <Content  name1={part1.name} exercises1={part1.exercises} 
                name2={part2.name} exercises2={part2.exercises} 
                name3={part3.name} exercises3={part3.exercises} />
      <ContentTest {...part1}/>
      <ContentTest {...part2}/>
      <ContentTest {...part3}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App