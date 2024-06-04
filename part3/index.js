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


--ex 3.20 custom validator using mongodb
in app.jsx catch block use rror.response.data.error
*/
require('dotenv').config()

const Person = require('./models/person')
const express = require('express')
const path = require('path')
var morgan = require('morgan')
const cors = require('cors')
const { error } = require('console')
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

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    }  else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
      }
  
    next(error)
  }
  
  // this has to be the last loaded middleware, also all the routes should be registered before this!
  app.use(errorHandler)

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "phone": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "phone": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "phone": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "phone": "39-23-6423122"
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

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
    .then(
        person =>{
            if(person){
                response.json(person)
            } else{
                response.status(400).end()
            }
        }
    )
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    console.log(request.params.id)
    console.log('Deleting')
    Person.findByIdAndDelete(request.params.id)
    .then(
        resut =>{
            response.status(400).end()
        }
    )
    .catch(error => next(error))
})

const generateId = () => {
    return (Math.floor(Math.random() * 100))
}

app.put('/api/persons/:id', (request, response, next) => {
    console.log('id')
    console.log(request.params.id)
    console.log('phone')
    console.log(request.body.phone)
    Person.findByIdAndUpdate(request.params.id,{phone : request.body.phone})
    .then(
        resut =>{
            const person = {
                id: request.params.id,
                name: request.body.name,
                phone: request.body.phone
            }
            response.json(person)
        }
    )
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
    if (!request.body) {
        response.status(400).json({
            error: 'Body Not Found'
        })
    } else if (!request.body.name) {
        response.status(400).json({
            error: 'Name Not Found'
        })
    } else if (!request.body.phone) {
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
            phone: request.body.phone
        }
        Person.create(person).then(person=>{
            console.log(`added person ${person.name} with phone number ${person.phone}`)
            response.json(person)
        })
        .catch(error=>{
            response.status(400).json({error : error.message})
            next(error)
        })
        // persons = persons.concat(person)
    }
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})