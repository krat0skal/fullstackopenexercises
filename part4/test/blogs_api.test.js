const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const assert = require('assert')
const Blog = require('../models/blog')
const helper = require('./test_helper')
var lodasher = require('lodash');


beforeEach(async () => {
  await Blog.deleteMany({})

  for (let blog of helper.initialBlogs) {
    let blogObject = new Blog(blog)
    await blogObject.save()
  }
})
const api = supertest(app)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('number of blogs are 2', async () => {
  const response = await api.get('/api/blogs')
  assert.strictEqual(response.body.length, helper.initialBlogs.length)
})
test('unique identifier of blogs is named id', async () => {
  const response = await api.get('/api/blogs')
  const keys = lodasher.keys(response.body[0])
  console.log(keys)
  assert(keys.includes('id'))
})
test('Note is succesfuly posted', async () => {
  const newBlog = {
    title : 'There is no Book',
    author : 'There is no author',
    url : 'NA',
    likes : 0
  }
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)
  const blogsAfterPost = await helper.blogsInDb()
  const titleArr = blogsAfterPost.map(b => b.title)
  console.log(blogsAfterPost)
  console.log(titleArr)
  assert.strictEqual(blogsAfterPost.length,helper.initialBlogs.length+1)
  assert(titleArr.includes('There is no Book'))
})
after(async () => {
  await mongoose.connection.close()
})