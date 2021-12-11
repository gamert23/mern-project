const slugify = require("slugify")

// Import Models
const Blog = require('../models/blog')

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
        error: err
      })
    }

    res.json(blog)
  })
}