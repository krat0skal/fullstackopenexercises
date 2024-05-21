/*
first we initialize node repowith node init
install express dependency with npm install express
install nodemon dev dependency with npm install --save-dev nodemon
declare dev script in package.json
to read request.body, please use app.use(express.json())

added morgan by npm install morgan
new morgan variable declared and used by app for logging api reuests uing iny format

create new mprgan token with function which returns request ody when motheod is POST

npm install cors to allow cross origin resource sharing
use app.use(cors())

npm install dotenv for mongodb model creation and using it to fetch persons from the db
create module for persons using url and personschema
import const Person and use it to fetch data
*/
require('dotenv').config()

const Person = require('./models/person')
const express = require('express')
const path = require('path')
var morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.static('dist'))
morgan.token('body', function getBody(req) {
    if(req.method === 'POST'){
        return JSON.stringify(req.body)
    }  else {
        return null
    }
})
// app.use(morgan('tiny'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())
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

app.get('/', (request, response) => {
    response.send('<a href = "/readme">README!!</a>');
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
            persons.forEach(person =>{
                console.log(person)
            })
            response.json(persons)
        }
    )
})
app.get('/readme', (request, response) => {
    response.sendFile(path.join(__dirname, '/README.md'));
})

app.get('/info', (request, response) => {
    let currDate = new Date()
    const numOfPerson = persons.length
    console.log(`Phonebook has info for ${numOfPerson} people`)
    console.log(currDate)
    response.send(`<p>Phonebook has info for ${numOfPerson} people</p>
                    <p>${currDate}</p>`)
    // response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        console.log('No erson found')
        response.sendStatus(404)
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    if (persons.find(person => person.id === id)) {
        persons = persons.filter(person => person.id !== id)
        response.sendStatus(204)
    } else {
        response.sendStatus(404)
    }
})

const generateId = () => {
    return (Math.floor(Math.random() * 100))
}

app.post('/api/persons', (request, response) => {
    if (!request.body) {
        response.status(400).json({
            error: 'Body Not Found'
        })
    } else if (!request.body.name) {
        response.status(400).json({
            error: 'Name Not Found'
        })
    } else if (!request.body.number) {
        response.status(400).json({
            error: 'Number Not Found'
        })
    // } else if (persons.find(person => person.name === request.body.name)) {
    //     response.status(400).json({
    //         error: 'Person already exists'
    //     })
    } else {
        const person = {
            id: generateId(),
            name: request.body.name,
            number: request.body.number
        }
        Person.create(person)
        // persons = persons.concat(person)
        console.log(`added person ${person.name} with phone number ${person.number}`)
        response.json(person)
    }
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})