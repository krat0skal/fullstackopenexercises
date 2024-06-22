const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    assert.strictEqual(result, 1)
})

describe('total likes', () => {
    const emptyList = []

    test('when list is empty', () => {
        const result = listHelper.totalLikes(emptyList)
        assert.strictEqual(result, 0)
    })

    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 5,
            __v: 0
        }
    ]

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        assert.strictEqual(result, 5)
    })

    const listWithManyBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 90,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 21,
            __v: 0
        }
    ]

    test('when list has many blogs, total is correct', () => {
        const result = listHelper.totalLikes(listWithManyBlog)
        assert.strictEqual(result, 116)
    })
})

describe('Favourite Blog', () => {
    const emptyList = []

    test('when list is empty', () => {
        const result = listHelper.favoriteBlog(emptyList)
        assert.deepStrictEqual(result, {
            title: 'NA',
            author: 'NA',
            likes: 0
        })
    })

    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 5,
            __v: 0
        }
    ]

    test('when list has only one blog, it is same as favouriteblog', () => {
        const result = listHelper.favoriteBlog(listWithOneBlog)
        assert.deepStrictEqual(result, {
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            likes: 5
        })
    })

    const listWithManyBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 16,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'The Bible',
            author: 'Unknown',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 8,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Rap 101',
            author: 'Kendrick Lamar',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 210,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'how to become washed',
            author: 'Kanye West',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 10,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'how to be cringe',
            author: 'Eminem',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 100,
            __v: 0
        }
    ]

    test('when list has many blogs, fave blog is the one with most likes', () => {
        const result = listHelper.favoriteBlog(listWithManyBlog)
        assert.deepStrictEqual(result, {
            title: 'Rap 101',
            author: 'Kendrick Lamar',
            likes: 210
        })
    })
})

describe('Author with mos Blogs', () => {
    const emptyList = []

    test('when list is empty', () => {
        const result = listHelper.mostBlogs(emptyList)
        assert.deepStrictEqual(result, {
            author : 'NA',
            blogs : 'NA'
        })
    })

    const listWithOneBlog = [
        {
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra'
        }
    ]

    test('when list has only one blog, it is same author with 1 blog', () => {
        const result = listHelper.mostBlogs(listWithOneBlog)
        assert.deepStrictEqual(result, {
            author: 'Edsger W. Dijkstra',
            blogs: 1
        })
    })

    const listWithManyBlog = [
        {
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra'
        },
        {
            title: 'The Bible',
            author: 'Unknown'
        },
        {
            title: 'Rap 101',
            author: 'Kendrick Lamar'
        },
        {
            title: 'how to become washed',
            author: 'Kanye West'
        },
        {
            title: 'how to be cringe',
            author: 'Eminem'
        },
        {
            title: 'How to be a Good Dad',
            author: 'Kendrick Lamar'
        },
        {
            title: 'How to be a Hater',
            author: 'Kendrick Lamar'
        }
    ]

    test('when list has many blogs, the author is the one with most blogs', () => {
        const result = listHelper.mostBlogs(listWithManyBlog)
        assert.deepStrictEqual(result, {
            author: 'Kendrick Lamar',
            blogs: 3
        })
    })
})

describe('Author with most likes', () => {
    const emptyList = []

    test('when list is empty', () => {
        const result = listHelper.mostLikes(emptyList)
        assert.deepStrictEqual(result, {
            author : 'NA',
            likes : 'NA'
        })
    })

    const listWithOneBlog = [
        {
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            likes: 90
        }
    ]

    test('when list has only one blog, it is same author with 1 blog', () => {
        const result = listHelper.mostLikes(listWithOneBlog)
        assert.deepStrictEqual(result, {
            author: 'Edsger W. Dijkstra',
            likes: 90
        })
    })

    const listWithManyBlog = [
        {
            title: 'Tennis Balls for the wrong sport',
            author: 'Pusha T',
            likes: 81
        },
        {
            title: 'Daytona',
            author: 'Pusha T',
            likes: 100
        },
        {
            title: 'Rap 101',
            author: 'Kendrick Lamar',
            likes: 90
        },
        {
            title: 'how to become washed',
            author: 'Eminem',
            likes: 1
        },
        {
            title: 'how to be cringe',
            author: 'Eminem',
            likes: 11
        },
        {
            title: 'How to be a Good Dad',
            author: 'Kendrick Lamar',
            likes: 100
        },
        {
            title: 'How to be a Hater',
            author: 'Kendrick Lamar',
            likes: 1
        }
    ]

    test('when list has many blogs, the author is the one with most blogs', () => {
        const result = listHelper.mostLikes(listWithManyBlog)
        assert.deepStrictEqual(result, {
            author: 'Kendrick Lamar',
            likes: 191
        })
    })
})