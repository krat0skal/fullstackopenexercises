require('dotenv').config

let PORT = process.env.PORT
let MONGODB_URI_PART4 = process.env.NODE_ENV === 'test' 
                        ? process.env.MONGODB_URI_PART4_TEST
                        : process.env.MONGODB_URI_PART4

module.exports = {
    PORT,
    MONGODB_URI_PART4
}