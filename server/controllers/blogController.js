const slugify = require("slugify")

// Import Models
const Blog = require('../models/blog')

exports.getAllBlogs = (req, res) => {
  Blog.find({}).exec((err, blogs) => {
    if(err) {
      return res.status(400).json({
        error: "Get blogs have a problem!"
      })
    }

    res.json(blogs)
  });
}

exports.getBlog = (req, res) => {
  const { slug } = req.params

  Blog.find({ slug }).exec((err, blog) => {
    if(err) {
      return res.status(400).json({
        error: "Blog not found!"
      })
    }

    res.json(blog)
  });
}

exports.create = (req, res) => {
  const { title, content, author } = req.body
  const slug = slugify(title)

  if(!title) {
    return res.status(400).json({
      error: "Title is empty"
    })
  } else if(!content) {
    return res.status(400).json({
      error: "Content is empty"
    })
  }

  // Store data to db
  Blog.create({
    title,
    content,
    author,
    slug
  }, (err, blog) => {
    if(err) {
      return res.status(400).json({
        error: "Create blog with incorrect data!"
      })
    }

    res.json(blog)
  })
}