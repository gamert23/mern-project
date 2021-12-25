const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: {},
    required: true
  },
  author: {
    type: String,
    default: "Admin"
  },
  slug: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  category: {
    type: String,
  },
}, { timestamps: true })

module.exports = mongoose.model("Blogs", blogSchema)