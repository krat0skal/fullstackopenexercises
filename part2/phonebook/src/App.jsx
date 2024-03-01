import { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone:'903-350-610' }
  ])
  
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterName, setfilterName] = useState('')
  const dspPersons = filterName === ''
                ? persons
                : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handlefilterNameChange = (event) => {
    console.log(event.target.value)
    setfilterName(event.target.value)
  }

  const addPerson = (event) => {
    console.log('New Name :',newName)
    event.preventDefault()
    const newPerson ={ name: newName, phone: newPhone }
    const boolArr = persons.map(person => JSON.stringify(person.name) === JSON.stringify(newPerson.name))
    console.log('boolarr is',boolArr)
    if (newName === ''){
      alert(`Name cannot be empty`)
    }else if(newPhone === ''){
      alert(`Phone cannot be empty`)
    }else if(boolArr.includes(true)){
      alert(`${newName} is already added to phonebook`)
    } else{
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewPhone('')
      console.log('New Name :',newName)
      console.log('Person array:',persons)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={filterName} onChange={handlefilterNameChange}/></div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {dspPersons.map(person => <div key={person.name}>{person.name} {person.phone}</div>)}
    </div>
  )
}

export default App