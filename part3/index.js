/*
first we initialize node repowith node init
install express dependency with npm install express
install nodemon dev dependency with npm install --save-dev nodemon
declare dev script in package.json
to read request.body, please use app.use(express.json())

added morgan by npm install morgan
new morgan variable declared and used by app for logging api reuests uing iny format

create new mprgan token with function which returns request ody when motheod is POST
*/


const express = require('express')
var morgan = require('morgan')

const app = express()
app.use(express.json())
morgan.token('body', function getBody(req) {
    if(req.method === 'POST'){
        return JSON.stringify(req.body)
    }  else {
        return null
    }
})
// app.use(morgan('tiny'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
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

app.get('/api/persons', (request, response) => {
    response.json(persons)
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
    } else if (persons.find(person => person.name === request.body.name)) {
        response.status(400).json({
            error: 'Person already exists'
        })
    } else {
        const person = {
            id: generateId(),
            name: request.body.name,
            number: request.body.number
        }
        persons = persons.concat(person)
        response.json(person)
    }
})
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})