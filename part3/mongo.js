const mongoose = require('mongoose')
console.log(process.argv.length)
if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://pandeyh38:${password}@clusnoter0.efznds8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)
// Schema name
const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String
})

//module
const Person = mongoose.model('Person', personSchema)

const generateId = () => {
    return (Math.floor(Math.random() * 100))
}
if (process.argv.length == 3) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
} else {
    const person = new Person({
        id: generateId(),
        name: process.argv[3],
        number: process.argv[4]
    })

    person.save().then(result => {
        console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebooks`)
        mongoose.connection.close()
    })
}