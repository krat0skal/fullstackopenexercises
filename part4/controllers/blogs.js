const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

blogsRouter.post('/', (request, response) => {
    console.log(request.body)
    if (!request.body.hasOwnProperty('title') || !request.body.hasOwnProperty('url') || 
        !request.body.title || !request.body.url){
        response.sendStatus(400)
    } else {
        const blog = new Blog(request.body)

        blog
            .save()
            .then(result => {
                response.status(201).json(result)
            })
    }
})

module.exports = blogsRouter