var lodasher = require('lodash');

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, item) => {
        return sum + item
    }
    return blogs.length === 0
        ? 0
        : blogs.map(blog => blog.likes).reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) {
        return {
            title: 'NA',
            author: 'NA',
            likes: 0
        }
    } else {
        const maxLikes = blogs.map(blog => blog.likes).toSorted((a, b) => b - a)[0]
        const indexMax = blogs.map(blog => blog.likes).indexOf(maxLikes)
        const returnObj = {
            title: blogs[indexMax].title,
            author: blogs[indexMax].author,
            likes: blogs[indexMax].likes
        }
        return returnObj
    }
}
const mostBlogs = (blogs) => {
    if (blogs.length === 0) {
        return {
            author: 'NA',
            blogs: 'NA'
        }
    } else {
        const countObj = lodasher.countBy(blogs.map(blog => blog.author))
        const keyscountObjArr = lodasher.keys(countObj)
        const maxValAuthor = lodasher.maxBy(keyscountObjArr, k => countObj[k])
        return {
            author: maxValAuthor,
            blogs: countObj[maxValAuthor]
        }
    }
}

const mostLikes = (blogs) => {
    if (blogs.length === 0) {
        return {
            author: 'NA',
            likes: 'NA'
        }
    } else {
        const groupedAuthors = lodasher.groupBy(blogs, blog => blog.author)
        const authors = lodasher.keys(groupedAuthors)
        const reducer = (sum, item) => {
            return sum + item
        }
        const authorLikes = authors.map(author => (
            {
                author: author,
                likes: groupedAuthors[author].map(g => g.likes).reduce(reducer, 0)
            }
        ))

        return lodasher.maxBy(authorLikes, a => a.likes)
    }
}
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}