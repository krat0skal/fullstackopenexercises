import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import bookService from './services/book'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterName, setfilterName] = useState('')
  const [message, setMessage] = useState(null)
  const dspPersons = filterName === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  useEffect(() => {
    bookService.getAll().then(initialBook => {
      console.log(initialBook)
      setPersons(initialBook)
    })
  }, [])
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
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const existingId = persons.filter(person => JSON.stringify(person.name) === JSON.stringify(newPerson.name) ? person.id : '')[0].id
        console.log('existing id is', existingId)
        bookService.update(existingId, newPerson).then(updateResponse => {
          console.log(updateResponse)
          setPersons(persons.map(person => person.id !== existingId ? person : updateResponse))
          setMessage('Phone Updated Successfully')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      }
    } else {
      bookService.create(newPerson).then(returnedPerson => {
        console.log(returnedPerson)
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhone('')
        setMessage('Person Added Successfully')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    }
  }

  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      console.log(`Deleting person ${id}`)
      bookService.remove(id).then(deleteResponse => {
        console.log(deleteResponse)
        setPersons(persons.filter(person => person.id !== deleteResponse.id))
        setMessage('Person Removed Successfully')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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