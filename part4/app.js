const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const blogsRouter = require('./controllers/blogs')
const config = require('./utils/config')
const logger = require('./utils/logger')

const mongoUrl = config.MONGODB_URI_PART4
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())
app.use('/api/blogs',blogsRouter)

const PORT = config.PORT
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
})