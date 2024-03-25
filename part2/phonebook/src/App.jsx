import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import bookService from './services/book'

const App = () => {

  const removePerson = (id,name) => {
    if (window.confirm(`Delete ${name}?`)){
      console.log(`Deleting person ${id}`)
      bookService.remove(id).then(deleteResponse => {
        console.log(deleteResponse)
        setPersons(persons.filter(person => person.id !== deleteResponse.id))
      })
    }
  }

  const [persons, setPersons] = useState([])

  useEffect(() => {
    bookService.getAll().then(initialBook => {
      console.log(initialBook)
      setPersons(initialBook)
    })
  }, [])
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
      bookService.create(newPerson).then(returnedPerson => {
        console.log(returnedPerson)
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhone('')
      })
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
        handlePhoneChange={handlePhoneChange} />
      <h3>Numbers</h3>
        {dspPersons.map(person =>
        <Persons  
          key={person.id}
          person={person}
          removePerson={() => removePerson(person.id, person.name)}
          />
        )}
    </div>
  )
}

export default App