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

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}


module.exports = {
    initialBlogs,
    blogsInDb
}