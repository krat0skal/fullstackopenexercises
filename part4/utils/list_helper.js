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
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}