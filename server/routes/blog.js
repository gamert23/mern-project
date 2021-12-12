const express = require('express')
const router = express.Router()

// Import Controller
const { create, getAllBlogs, getBlog } = require('../controllers/blogController')

router.get('/blogs', getAllBlogs)
router.get('/blog/:slug', getBlog)
router.post('/create', create)

module.exports = router