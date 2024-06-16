require('dotenv').config

let PORT = process.env.PORT
let MONGODB_URI_PART4 = process.env.MONGODB_URI_PART4

module.exports = {
    PORT,
    MONGODB_URI_PART4
}