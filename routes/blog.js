const express = require('express')
const router = express.Router()

// Import Controller
const { create, getAllBlogs, getBlog, remove, update } = require('../controllers/blogController')
const { requireLogin } = require('../controllers/AuthController')

router.get('/blogs', getAllBlogs) // (path, middleware, function)
router.get('/blog/:slug', getBlog)
router.post('/create', requireLogin, create)
router.delete('/blog/:slug', requireLogin, remove)
router.put('/blog/:slug', requireLogin, update)

module.exports = router