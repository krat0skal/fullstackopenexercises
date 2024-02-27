import { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const checkDuplicate =() => {

  }
  
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson ={ name: newName }
    const boolArr = persons.map(person => JSON.stringify(person) === JSON.stringify(newPerson))
    console.log('boolarr is',boolArr)
    if(boolArr.includes(true)){
      alert(`${newName} is already added to phonebook`)
    } else{
      setPersons(persons.concat(newPerson))
      setNewName('')
      console.log('New Name :',newName)
      console.log('Person array:',persons)
    }
  }
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App