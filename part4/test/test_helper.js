const Blog =require('../models/blog')

const initialBlogs = [
    {
        title : 'The Book',
        author : 'The Author',
        url : 'NA',
        likes : 1
    },
    {
        title : 'The Book 2',
        author : 'The Author 2',
        url : 'NA',
        likes : 2
    }
]


module.exports = {
    initialBlogs
}