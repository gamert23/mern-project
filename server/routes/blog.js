const express = require('express')
const router = express.Router()

// Import Controller
const { create, getAllBlogs, getBlog, remove, update } = require('../controllers/blogController')

router.get('/blogs', getAllBlogs)
router.get('/blog/:slug', getBlog)
router.post('/create', create)
router.delete('/blog/:slug', remove)
router.put('/blog/:slug', update)

module.exports = router