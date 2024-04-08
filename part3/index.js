/*
first we initialize node repowith node init
install express dependency with npm install express
install nodemon dev dependency with npm install --save-dev nodemon
declare dev script in package.json

*/


const express = require('express')
const app = express()
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(request, response) =>{
    response.json(persons)
})

app.get('/info',(request, response) =>{
    let currDate = new Date()
    const numOfPerson = persons.length
    console.log(`Phonebook has info for ${numOfPerson} people`)
    console.log(currDate)
    response.send(`<p>Phonebook has info for ${numOfPerson} people</p>
                    <p>${currDate}</p>`)
    // response.json(persons)
})

app.get('/api/person/:id',(request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person){
        response.json(person)
    } else {
        console.log('No erson found')
        response.sendStatus(404)
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})