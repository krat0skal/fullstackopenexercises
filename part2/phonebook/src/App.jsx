import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '903-350-610' },
    { name: 'Travis Scott', phone: '902-103-500' },
    { name: 'Kendrick Lamra', phone: 'DNA-1-FEAR' },
    { name: 'Asap Rocky', phone: 'RIH-1-RZA' },
    { name: 'Kanye West', phone: 'PHN-PT-2' }
  ])

  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const [newPhone, setNewPhone] = useState('')

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const [filterName, setfilterName] = useState('')

  const handlefilterNameChange = (event) => {
    console.log(event.target.value)
    setfilterName(event.target.value)
  }

  const dspPersons = filterName === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  const addPerson = (event) => {
    // console.log('New Name :', newName)
    event.preventDefault()
    const newPerson = { name: newName, phone: newPhone }
    const boolArr = persons.map(person => JSON.stringify(person.name) === JSON.stringify(newPerson.name))
    console.log('boolarr is', boolArr)
    if (newName === '') {
      alert(`Name cannot be empty`)
    } else if (newPhone === '') {
      alert(`Phone cannot be empty`)
    } else if (boolArr.includes(true)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewPhone('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filterName={filterName} 
        handlefilterNameChange={handlefilterNameChange} />
      <h3>add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        newPhone={newPhone} 
        handleNameChange={handleNameChange} 
        handlePhoneChange={handlePhoneChange}/>
      <h3>Numbers</h3>
      <Persons 
        dspPersons={dspPersons} />
    </div>
  )
}

export default App